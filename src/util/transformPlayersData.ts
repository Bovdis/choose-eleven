import { GetPlayers } from "../models";

const transformPlayersData = (apiResponse: GetPlayers) => {
  return apiResponse.elements.map((player) => {
    const matchTeam = apiResponse.teams.filter(
      (team) => team.id === player.team
    )[0];
    const playerPosition = apiResponse.element_types.find(
      (position) => position.id === player.element_type
    );

    player.team = matchTeam.name;
    player.position = playerPosition;

    return player;
  });
};

export default transformPlayersData;
