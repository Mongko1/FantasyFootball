import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import '../styles/PlayerList.css';

const PlayerList = ({ 
  players, 
  onAddPlayer, 
  loading, 
  sortBy, 
  setSortBy,
  filterPosition,
  setFilterPosition 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter players by position and search term
  const filteredPlayers = players.filter(player => {
    const matchesPosition = filterPosition === 'all' || player.position === filterPosition;
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPosition && matchesSearch;
  });
  
  // Sort players
  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'cost') return b.cost - a.cost;
    if (sortBy === 'team') return a.team.localeCompare(b.team);
    // Default: sort by total points
    return b.totalPoints - a.totalPoints;
  });
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="player-selection">
      <div className="player-selection-header">
        <h2>Player Selection</h2>
        
        <div className="filter-controls">
          <div className="view-selector">
            <label>View</label>
            <select>
              <option value="all">All players</option>
              <option value="watchlist">My watchlist</option>
            </select>
          </div>
          
          <div className="sort-selector">
            <label>Sorted by</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="total_points">Total points</option>
              <option value="cost">Cost</option>
              <option value="name">Name</option>
              <option value="team">Team</option>
            </select>
          </div>
          
          <div className="position-filter">
            <label>Position</label>
            <select 
              value={filterPosition} 
              onChange={(e) => setFilterPosition(e.target.value)}
            >
              <option value="all">All</option>
              <option value="GKP">Goalkeepers</option>
              <option value="DEF">Defenders</option>
              <option value="MID">Midfielders</option>
              <option value="FWD">Forwards</option>
            </select>
          </div>
          
          <div className="max-cost-filter">
            <label>Max cost</label>
            <span className="cost-value">14.7</span>
          </div>
        </div>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for player..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="player-search-input"
          />
          <button className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="player-count">
        {filteredPlayers.length} players shown
      </div>
      
      <div className="position-tabs">
        <div className={`position-tab ${filterPosition === 'GKP' ? 'active' : ''}`} onClick={() => setFilterPosition('GKP')}>
          Goalkeepers
        </div>
        <div className={`position-tab ${filterPosition === 'DEF' ? 'active' : ''}`} onClick={() => setFilterPosition('DEF')}>
          Defenders
        </div>
        <div className={`position-tab ${filterPosition === 'MID' ? 'active' : ''}`} onClick={() => setFilterPosition('MID')}>
          Midfielders
        </div>
        <div className={`position-tab ${filterPosition === 'FWD' ? 'active' : ''}`} onClick={() => setFilterPosition('FWD')}>
          Forwards
        </div>
      </div>
      
      {loading ? (
        <div className="loading-spinner">Loading players...</div>
      ) : (
        <div className="player-list">
          {sortedPlayers.map(player => (
            <PlayerCard 
              key={player.id} 
              player={player} 
              onAddPlayer={() => onAddPlayer(player)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayerList;