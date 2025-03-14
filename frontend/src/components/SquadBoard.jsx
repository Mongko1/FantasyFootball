import React from 'react';
import PositionSlot from './PositionSlot';
import '../styles/SquadBoard.css';

const SquadBoard = ({ selectedPlayers, view, onRemovePlayer }) => {
  // Group players by position
  const goalkeepers = selectedPlayers.filter(player => player.position === 'GKP');
  const defenders = selectedPlayers.filter(player => player.position === 'DEF');
  const midfielders = selectedPlayers.filter(player => player.position === 'MID');
  const forwards = selectedPlayers.filter(player => player.position === 'FWD');

  const renderPitchView = () => (
    <div className="pitch-view">
      <div className="field">
        {/* Goalkeepers row */}
        <div className="position-row goalkeepers">
          {[...Array(2)].map((_, index) => (
            <PositionSlot
              key={`gkp-${index}`}
              position="GKP"
              player={goalkeepers[index]}
              onRemove={onRemovePlayer}
            />
          ))}
        </div>
        
        {/* Defenders row */}
        <div className="position-row defenders">
          {[...Array(5)].map((_, index) => (
            <PositionSlot
              key={`def-${index}`}
              position="DEF"
              player={defenders[index]}
              onRemove={onRemovePlayer}
            />
          ))}
        </div>
        
        {/* Midfielders row */}
        <div className="position-row midfielders">
          {[...Array(5)].map((_, index) => (
            <PositionSlot
              key={`mid-${index}`}
              position="MID"
              player={midfielders[index]}
              onRemove={onRemovePlayer}
            />
          ))}
        </div>
        
        {/* Forwards row */}
        <div className="position-row forwards">
          {[...Array(3)].map((_, index) => (
            <PositionSlot
              key={`fwd-${index}`}
              position="FWD"
              player={forwards[index]}
              onRemove={onRemovePlayer}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderListView = () => (
    <div className="list-view">
      <table className="squad-list-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Team</th>
            <th>Cost</th>
            <th>Points</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedPlayers.map(player => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>{player.team}</td>
              <td>£{player.cost.toFixed(1)}</td>
              <td>{player.totalPoints}</td>
              <td>
                <button 
                  className="remove-player-button"
                  onClick={() => onRemovePlayer(player.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="squad-board">
      {view === 'pitch' ? renderPitchView() : renderListView()}
    </div>
  );
};

export default SquadBoard;