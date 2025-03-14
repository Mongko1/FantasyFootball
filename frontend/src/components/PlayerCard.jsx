import React from 'react';
import '../styles/PlayerCard.css';

const PlayerCard = ({ player, onAddPlayer }) => {
  const { name, team, position, cost, totalPoints, shortName } = player;
  
  // Determine position color
  const getPositionColor = () => {
    switch(position) {
      case 'GKP': return '#FFC000'; // Yellow
      case 'DEF': return '#00B0F0'; // Blue
      case 'MID': return '#00B050'; // Green
      case 'FWD': return '#FF0000'; // Red
      default: return '#AAAAAA';    // Gray
    }
  };

  const getTeamColor = () => {
    switch(team) {
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
    <div className="player-card">
      <div className="player-icon" style={{ backgroundColor: getTeamColor() }} onClick={onAddPlayer}>
      </div>
      <div className="player-info">
        <div className="player-name">{name}</div>
        <div className="player-details">
          <span className="player-team">{team}</span>
          <span className="player-position">{position}</span>
        </div>
      </div>
      <div className="player-cost">£{cost.toFixed(1)}</div>
      <div className="player-points">{totalPoints}</div>
    </div>
  );
};

export default PlayerCard;