import React from 'react';
import '../styles/PositionSlot.css';

const PositionSlot = ({ position, player, onRemove }) => {

  // Determine position name for display
  const getPositionName = () => {
    switch(position) {
      case 'GKP': return 'Goalkeeper';
      case 'DEF': return 'Defender';
      case 'MID': return 'Midfielder';
      case 'FWD': return 'Forward';
      default: return position;
    }
  };

  const getTeamColor = (teams) => {
    switch(teams) {
      case 'ARS': return '#B90E2C'; 
      case 'AVL': return '#512836'; 
      case 'BOU': return '#CA2831'; 
      case 'BRE': return '#AE1629'; 
      case 'BHA': return '#1663BA'; 
      case 'CHE': return '#1237BD'; 
      case 'CRY': return '#194383'; 
      case 'EVE': return '#1c3079'; 
      case 'FUL': return '#f7f7f7'; 
      case 'IPS': return '#17479d'; 
      case 'LEI': return '#05389f';
      case 'LIV': return '#b5232f';
      case 'MCI': return '#89bae8';
      case 'MUN': return '#a51d32';
      case 'NEW': return '#181818';
      case 'NFO': return '#d6181f';
      case 'SOU': return '#e12228';
      case 'TOT': return '#ffffff';
      case 'WHU': return '#762336';
      case 'WOL': return '#f1b513';
      default: return '#AAAAAA';   
    }
  };


  
  return (
    <div className={`position-slot ${position.toLowerCase()}`} style={player ? { backgroundColor: getTeamColor(player.team) } : {}}>
      {player ? (
        <div className="filled-slot" onClick={() => onRemove(player.id)}>

          <div className="player-name">{player.name}</div>
          <div className="player-next-fixture">vs CHE (H)</div>
          <div className="player-cost">£{player.cost.toFixed(1)}</div>
          <div className="player-cost">£{player.team}</div>
        </div>
      ) : (
        <div className="empty-slot">
          <div className="position-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="position-name">{getPositionName()}</div>
        </div>
      )}
    </div>
  );
};

export default PositionSlot;