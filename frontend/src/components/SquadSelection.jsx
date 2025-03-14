import React, { useState, useEffect } from 'react';
import SquadBoard from './SquadBoard';
import PlayerList from './PlayerList';
import SquadHeader from './SquadHeader';
import { fetchPlayers, saveSquad } from '../services/api';
import '../styles/SquadSelection.css';

const SquadSelection = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [budget, setBudget] = useState(100.0);
  const [remainingBudget, setRemainingBudget] = useState(100.0);
  const [view, setView] = useState('pitch'); // 'pitch' or 'list'
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('total_points');
  const [filterPosition, setFilterPosition] = useState('all');

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        setLoading(true);
        const data = await fetchPlayers();
        setAllPlayers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load players. Please try again later.');
        setLoading(false);
      }
    };

    loadPlayers();
  }, []);

  useEffect(() => {
    // Calculate remaining budget when selected players change
    const usedBudget = selectedPlayers.reduce((total, player) => total + player.cost, 0);
    setRemainingBudget((budget - usedBudget).toFixed(1));
  }, [selectedPlayers, budget]);

  const addPlayer = (player) => {
    // Check if we already have 15 players
    if (selectedPlayers.length >= 15) {
      setError('You cannot select more than 15 players');
      return false;
    }

    // Check if player is already selected
    if (selectedPlayers.some(p => p.id === player.id)) {
      setError('This player is already in your squad');
      return false;
    }

    // Check budget
    if (player.cost > remainingBudget) {
      setError('Not enough budget to add this player');
      return false;
    }

    // Check position limits
    const positionCount = {
      GKP: selectedPlayers.filter(p => p.position === 'GKP').length,
      DEF: selectedPlayers.filter(p => p.position === 'DEF').length,
      MID: selectedPlayers.filter(p => p.position === 'MID').length,
      FWD: selectedPlayers.filter(p => p.position === 'FWD').length
    };

    if ((player.position === 'GKP' && positionCount.GKP >= 2) ||
        (player.position === 'DEF' && positionCount.DEF >= 5) ||
        (player.position === 'MID' && positionCount.MID >= 5) ||
        (player.position === 'FWD' && positionCount.FWD >= 3)) {
      setError(`You cannot select more than ${
        player.position === 'GKP' ? 2 : 
        player.position === 'DEF' ? 5 : 
        player.position === 'MID' ? 5 : 3
      } ${player.position} players`);
      return false;
    }

    // Check team limit (max 3 from same team)
    const playerTeam = player.team;
    const teamCount = selectedPlayers.filter(p => p.team === playerTeam).length;
    if (teamCount >= 3) {
      setError('You cannot select more than 3 players from the same team');
      return false;
    }

    // All checks passed, add player
    setSelectedPlayers([...selectedPlayers, player]);
    setError(null);
    return true;
  };

  const removePlayer = (playerId) => {
    setSelectedPlayers(selectedPlayers.filter(p => p.id !== playerId));
    setError(null);
  };

  const handleAutoPick = async () => {
    try {
      setLoading(true);
      // In a real app, this might be an API call
      // For now, implement a simple auto-pick algorithm
      
      const autoPick = () => {
        // Clear current selection
        setSelectedPlayers([]);
        
        // Sort players by value (points per cost)
        const playersByValue = [...allPlayers].sort((a, b) => 
          (b.total_points / b.cost) - (a.total_points / a.cost)
        );
        
        const newSquad = [];
        let budgetLeft = budget;
        const teamCounts = {};
        const posCounts = { GKP: 0, DEF: 0, MID: 0, FWD: 0 };
        const posLimits = { GKP: 2, DEF: 5, MID: 5, FWD: 3 };
        
        // First pass: try to fill all positions
        for (const player of playersByValue) {
          if (newSquad.length >= 15) break;
          
          // Skip if position is full
          if (posCounts[player.position] >= posLimits[player.position]) continue;
          
          // Initialize team count if not exists
          teamCounts[player.team] = teamCounts[player.team] || 0;
          
          // Skip if team limit reached
          if (teamCounts[player.team] >= 3) continue;
          
          // Skip if not enough budget
          if (player.cost > budgetLeft) continue;
          
          // Add player
          newSquad.push(player);
          budgetLeft -= player.cost;
          posCounts[player.position]++;
          teamCounts[player.team]++;
        }
        
        return newSquad;
      };
      
      const autoPickedSquad = autoPick();
      setSelectedPlayers(autoPickedSquad);
      setLoading(false);
    } catch (err) {
      setError('Failed to auto-pick squad. Please try again.');
      setLoading(false);
    }
  };

  const handleSaveSquad = async () => {
    if (selectedPlayers.length !== 15) {
      setError('You must select exactly 15 players before saving');
      return;
    }

    try {
      setLoading(true);
      await saveSquad({
        players: selectedPlayers.map(p => p.id),
        budget: remainingBudget
      });
      setError(null);
      alert('Squad saved successfully!');
      setLoading(false);
    } catch (err) {
      setError('Failed to save squad. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="squad-selection-container">
      <div className="squad-selection-header">
        <h1>Squad Selection</h1>
        <p>Select a maximum of 3 players from a single team or 'Auto Pick' if you're short of time.</p>
      </div>
      
      <SquadHeader 
        selectedCount={selectedPlayers.length} 
        maxPlayers={15}
        budget={remainingBudget}
        gameweek="Gameweek 29"
        deadline="Sat 15 Mar 20:30"
      />
      
      <div className="view-toggle">
        <button 
          className={view === 'pitch' ? 'active' : ''} 
          onClick={() => setView('pitch')}
        >
          Pitch View
        </button>
        <button 
          className={view === 'list' ? 'active' : ''} 
          onClick={() => setView('list')}
        >
          List
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      <div className="main-content">
        <div className="squad-board-container">
          <SquadBoard 
            selectedPlayers={selectedPlayers} 
            view={view} 
            onRemovePlayer={removePlayer}
          />
          
          <div className="action-buttons">
            <button 
              className="auto-pick-button"
              onClick={handleAutoPick}
              disabled={loading}
            >
              Auto Pick
            </button>
            <button 
              className="save-squad-button"
              onClick={handleSaveSquad}
              disabled={loading || selectedPlayers.length !== 15}
            >
              Save Squad
            </button>
          </div>
        </div>
        
        <PlayerList 
          players={allPlayers}
          onAddPlayer={addPlayer}
          loading={loading}
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterPosition={filterPosition}
          setFilterPosition={setFilterPosition}
        />
      </div>
    </div>
  );
};

export default SquadSelection;