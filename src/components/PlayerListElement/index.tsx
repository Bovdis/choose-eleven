import React, { FC } from 'react'
import { Player } from '../../models'

type PlayerListElementProps = {
  player: Player;
}

const PlayerListElement: FC<PlayerListElementProps> = ({ player }) => {
  return (
    <>
      <td>{player.id}</td>
      <td>{player.first_name}</td>
      <td>{player.second_name}</td>
      <td>{player.team}</td>
      <td>{player.now_cost}</td>
      <td>{player.total_points}</td>
    </>
  )
}

export default PlayerListElement;
