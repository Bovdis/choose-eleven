import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import useStores from "../../stores/useStores";
import BackLink from "../../components/BackLink";
import styles from "./player.module.scss";
import transformPlayerValue from "../../util/transformPlayerValue";

const Player: FC = () => {
  const {
    playersStore: { currentPlayer },
  } = useStores();

  console.log("currentPlayer", currentPlayer);

  return (
    <>
      <BackLink
        href="/"
        icon={faHandPointLeft}
        linkText="Back to Players"
        passedClassName={styles.backLink}
      />
      <div className={styles.singlePlayerHeader}>
        <div className={styles.singlePlayerBasicInfo}>
          <p>First name: {currentPlayer.first_name}</p>
          <p>Last name: {currentPlayer.second_name}</p>
          <p>Position: {currentPlayer.position?.singular_name}</p>
          <p>
            Squad number:{" "}
            {currentPlayer.squad_number
              ? `#${currentPlayer.squad_number}`
              : "Not assigned number"}
          </p>
          <p>Value: {transformPlayerValue(currentPlayer.now_cost)}</p>
        </div>
        <div className={styles.singlePlayerImage}>
          <img
            src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${currentPlayer.code}.png`}
            alt="player"
          />
        </div>
      </div>
    </>
  );
};

export default observer(Player);
