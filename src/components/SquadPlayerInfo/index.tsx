import React, { FC } from "react";
import { Player } from "../../models";

interface SquadPlayerInfoProps {
  player: Player;
}

const SquadPlayerInfo: FC<SquadPlayerInfoProps> = ({ player }) => {
  return (
    <div>
      <p>{player.first_name}</p>
    </div>
  );
};

export default SquadPlayerInfo;
