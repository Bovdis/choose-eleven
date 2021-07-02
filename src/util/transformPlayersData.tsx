import React from 'react'
import { GetPlayers } from '../models';

const transformPlayersData = (apiResponse: GetPlayers) => {
  return apiResponse.elements.map(player => {
    const matchTeam = apiResponse.teams.filter(team => team.id === player.team)[0];
    player.team = matchTeam.name;
    return player;
  })
}

export default transformPlayersData;
