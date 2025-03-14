const API_BASE_URL = '/api';

export const fetchPlayers = async () => {
  // For development, return mock data
  // In production, this would call the Spring backend
  return mockPlayers();
};

export const saveSquad = async (squadData) => {
  // For development, just log the data
  // In production, this would call the Spring backend
  console.log('Saving squad:', squadData);
  return { success: true };
};

// Mock data for development
const mockPlayers = () => {
  return [
    { id: 1, name: 'Alisson', shortName: 'Alisson', team: 'LIV', position: 'GKP', cost: 7.5, totalPoints: 135 },
    { id: 2, name: 'Trent Alexander-Arnold', shortName: 'Alexander', team: 'LIV', position: 'DEF', cost: 7.5, totalPoints: 135 },
    { id: 3, name: 'Andrew Robertson', shortName: 'Robertson', team: 'LIV', position: 'DEF', cost: 6.5, totalPoints: 126 },
    { id: 4, name: 'Virgil van Dijk', shortName: 'Van Dijk', team: 'LIV', position: 'DEF', cost: 6.0, totalPoints: 122 },
    { id: 5, name: 'Mohamed Salah', shortName: 'Salah', team: 'LIV', position: 'MID', cost: 13.8, totalPoints: 306 },
    { id: 6, name: 'Kevin De Bruyne', shortName: 'De Bruyne', team: 'MCI', position: 'MID', cost: 12.2, totalPoints: 250 },
    { id: 7, name: 'Erling Haaland', shortName: 'Haaland', team: 'MCI', position: 'FWD', cost: 14.0, totalPoints: 320 },
    { id: 8, name: 'Phil Foden', shortName: 'Foden', team: 'MCI', position: 'MID', cost: 9.5, totalPoints: 195 },
    { id: 9, name: 'Bruno Fernandes', shortName: 'Fernandes', team: 'MUN', position: 'MID', cost: 10.5, totalPoints: 210 },
    { id: 10, name: 'Marcus Rashford', shortName: 'Rashford', team: 'MUN', position: 'FWD', cost: 8.5, totalPoints: 186 },
    { id: 11, name: 'Bukayo Saka', shortName: 'Saka', team: 'ARS', position: 'MID', cost: 8.8, totalPoints: 198 },
    { id: 12, name: 'Gabriel Jesus', shortName: 'Gabriel', team: 'ARS', position: 'FWD', cost: 8.0, totalPoints: 178 },
    { id: 13, name: 'Son Heung-min', shortName: 'Son', team: 'TOT', position: 'MID', cost: 11.5, totalPoints: 232 },
    { id: 14, name: 'Harry Kane', shortName: 'Kane', team: 'TOT', position: 'FWD', cost: 13.0, totalPoints: 280 },
    { id: 15, name: 'James Maddison', shortName: 'Maddison', team: 'TOT', position: 'MID', cost: 8.5, totalPoints: 168 },
    { id: 16, name: 'Kai Havertz', shortName: 'Havertz', team: 'ARS', position: 'FWD', cost: 7.5, totalPoints: 156 },
    { id: 17, name: 'Emiliano Martinez', shortName: 'Martinez', team: 'AVL', position: 'GKP', cost: 5.0, totalPoints: 128 },
    { id: 18, name: 'Ollie Watkins', shortName: 'Watkins', team: 'AVL', position: 'FWD', cost: 8.0, totalPoints: 174 },
    { id: 19, name: 'Cole Palmer', shortName: 'Palmer', team: 'CHE', position: 'MID', cost: 10.9, totalPoints: 191 },
    { id: 20, name: 'Reece James', shortName: 'James', team: 'CHE', position: 'DEF', cost: 5.5, totalPoints: 110 },
    { id: 21, name: 'Jordan Pickford', shortName: 'Pickford', team: 'EVE', position: 'GKP', cost: 5.1, totalPoints: 113 },
    { id: 22, name: 'Dominic Calvert-Lewin', shortName: 'Calvert-Lewin', team: 'EVE', position: 'FWD', cost: 6.5, totalPoints: 124 },
    { id: 23, name: 'David Raya', shortName: 'Raya', team: 'ARS', position: 'GKP', cost: 5.5, totalPoints: 111 },
    { id: 24, name: 'Alejandro Garnacho', shortName: 'Garnacho', team: 'MUN', position: 'MID', cost: 6.5, totalPoints: 140 },
    { id: 25, name: 'Josko Gvardiol', shortName: 'Gvardiol', team: 'MCI', position: 'DEF', cost: 5.3, totalPoints: 116 },
    { id: 26, name: 'Lisandro Martinez', shortName: 'Martinez', team: 'MUN', position: 'DEF', cost: 5.1, totalPoints: 108 },
    { id: 27, name: 'Aaron Ramsdale', shortName: 'Ramsdale', team: 'ARS', position: 'GKP', cost: 4.8, totalPoints: 100 },
    { id: 28, name: 'Nicolas Jackson', shortName: 'Jackson', team: 'CHE', position: 'FWD', cost: 7.3, totalPoints: 155 },
    { id: 29, name: 'Cristian Romero', shortName: 'Romero', team: 'TOT', position: 'DEF', cost: 5.2, totalPoints: 110 },
    { id: 30, name: 'Pedro Porro', shortName: 'Porro', team: 'TOT', position: 'DEF', cost: 5.8, totalPoints: 125 },
    { id: 31, name: 'Enzo Fernandez', shortName: 'Fernandez', team: 'CHE', position: 'MID', cost: 5.0, totalPoints: 112 },
    { id: 32, name: 'Alexis Mac Allister', shortName: 'Mac Allister', team: 'LIV', position: 'MID', cost: 6.4, totalPoints: 128 },
    { id: 33, name: 'Miguel Almiron', shortName: 'Almiron', team: 'NEW', position: 'MID', cost: 5.3, totalPoints: 112 },
    { id: 34, name: 'Kieran Trippier', shortName: 'Trippier', team: 'NEW', position: 'DEF', cost: 5.9, totalPoints: 130 },
    { id: 35, name: 'Alexander Isak', shortName: 'Isak', team: 'NEW', position: 'FWD', cost: 8.3, totalPoints: 172 },
    { id: 36, name: 'Bruno Guimaraes', shortName: 'Guimaraes', team: 'NEW', position: 'MID', cost: 6.0, totalPoints: 125 },
    { id: 37, name: 'Ezri Konsa', shortName: 'Konsa', team: 'AVL', position: 'DEF', cost: 4.9, totalPoints: 100 },
    { id: 38, name: 'Jose Sa', shortName: 'Sa', team: 'WOL', position: 'GKP', cost: 5.1, totalPoints: 124 },
    { id: 39, name: 'William Saliba', shortName: 'Saliba', team: 'ARS', position: 'DEF', cost: 6.0, totalPoints: 132 },
    { id: 40, name: 'Morgan Gibbs-White', shortName: 'Gibbs-White', team: 'NFO', position: 'MID', cost: 5.9, totalPoints: 125 },
    { id: 41, name: 'Neto', shortName: 'Neto', team: 'BOU', position: 'MID', cost: 5.6, totalPoints: 118 },
    { id: 42, name: 'Ederson', shortName: 'Ederson', team: 'MCI', position: 'GKP', cost: 5.5, totalPoints: 121 },
    { id: 43, name: 'Matheus Cunha', shortName: 'Cunha', team: 'WOL', position: 'FWD', cost: 6.7, totalPoints: 138 },
    { id: 44, name: 'Darwin Nunez', shortName: 'Nunez', team: 'LIV', position: 'FWD', cost: 7.6, totalPoints: 150 },
    { id: 45, name: 'Eberechi Eze', shortName: 'Eze', team: 'CRY', position: 'MID', cost: 6.8, totalPoints: 142 },
    { id: 46, name: 'Bryan Mbeumo', shortName: 'Mbeumo', team: 'BRE', position: 'MID', cost: 7.1, totalPoints: 155 },
  ];
};