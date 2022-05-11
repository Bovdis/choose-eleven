import React, { FC } from "react";
import SquadPlayerInfo from "../../components/SquadPlayerInfo";
import { Positions } from "../../constants/positions";
import useStores from "../../stores/useStores";

const Squad: FC = () => {
  const {
    usersStore: { currentUser },
  } = useStores();

  return (
    <div>
      <div>
        <p>{currentUser.name}</p>
        <p>Money left: {currentUser.budget}</p>
      </div>
      <div>
        <p>Team</p>
        <div>
          {currentUser.players.map((player) => {
            switch (player.position?.singular_name_short) {
              case Positions.GK:
                return <SquadPlayerInfo player={player} />;
              case Positions.DEF:
                return <p>Component to render all DEFs</p>;
              case Positions.MID:
                return <p>Component to render all MIDs</p>;
              case Positions.FWD:
                return <p>Component to render all FWDs</p>;
              default:
                return <></>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Squad;
