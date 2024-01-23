export function preparePlayerData(playerData) {
  return Object.values(playerData);
};

export function addWinsToPlayers(playerDataArray, matchData) {
  return playerDataArray.map((player) => {
    const wins = matchData.reduce((a, c) => {
      if (player.gamerTag === c.winner) {
        return a += 1;
      } else {
        return a;
      }
    }, 0);
    player.wins = wins;
    return player;
  });
};