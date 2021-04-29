import axios from 'axios'
import React from 'react'

export const getPlayers = () => {
  return axios.get('https://fantasy.premierleague.com/api/bootstrap-static/');
}
