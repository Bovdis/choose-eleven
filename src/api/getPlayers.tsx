import axios from "axios";

export const getPlayers = () => {
  return axios.get("https://fantasy.premierleague.com/api/bootstrap-static/");
};
