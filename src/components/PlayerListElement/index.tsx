import React, { FC } from "react";
import { Player } from "../../models";
import transformPlayerValue from "../../util/transformPlayerValue";
import styles from "./playerlistElement.module.scss";

type PlayerListElementProps = {
  player: Player;
  onClick?: () => void;
};

const PlayerListElement: FC<PlayerListElementProps> = ({ player, onClick }) => {
  return (
    <>
      <td>
        <button className={styles.playerLink} onClick={onClick} />
        {player.position?.singular_name_short}
      </td>
      <td>{player.first_name}</td>
      <td>{player.second_name}</td>
      <td>{player.team}</td>
      <td>{transformPlayerValue(player.now_cost)}</td>
      <td>{player.total_points}</td>
    </>
  );
};

export default PlayerListElement;
