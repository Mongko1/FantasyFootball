import React from 'react';
import '../styles/SquadHeader.css';

const SquadHeader = ({ selectedCount, maxPlayers, budget, gameweek, deadline }) => {
  return (
    <div className="squad-header">
      <div className="gameweek">
        <h2>{gameweek}</h2>
        <p className="deadline">Gameweek 29 deadline: {deadline}</p>
      </div>
      
      <div className="selection-info">
        <div className="players-selected">
          <span>Players Selected</span>
          <div className="count-badge">
            {selectedCount} / {maxPlayers}
          </div>
        </div>
        
        <div className="budget-info">
          <span>Budget</span>
          <div className="budget-badge">
            £{parseFloat(budget).toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadHeader;