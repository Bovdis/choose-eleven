import React, { FC } from "react";
import PlayersList from "../../components/PlayersList";
import useStores from "../../stores/useStores";
import styles from "./players.module.scss";

const Players: FC = () => {
  const {
    usersStore: { currentUser },
  } = useStores();

  return (
    <div>
      <div className={styles.managerInfo}>
        <p>
          Manager: <span>{currentUser.name}</span>
        </p>
        <p>
          Available budget: <span>{currentUser.budget + " £"}</span>
        </p>
      </div>
      <PlayersList />
    </div>
  );
};

export default Players;
