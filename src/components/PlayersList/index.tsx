import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getPlayers } from "../../api/getPlayers";
import { Player } from "../../models";
import useStores from "../../stores/useStores";
import transformPlayersData from "../../util/transformPlayersData";
import PlayerListElement from "../PlayerListElement";
import styles from "./playerslist.module.scss";
import usePagination from "./usePagination";

const PlayersList: FC = () => {
  const history = useHistory();
  const {
    playersStore: { allPlayers, setAllPlayers, setCurrentPlayer },
  } = useStores();

  const { currentPage, currentPlayers, handlePageChange, pagination } =
    usePagination({
      players: allPlayers,
    });

  const getAllPlayers = async () => {
    const api = await getPlayers();
    setAllPlayers(transformPlayersData(api.data));
  };

  const clickOnSpecificPlayer = (player: Player) => {
    setCurrentPlayer(player);
    history.push(`/player/${player.id}/${player.web_name}`);
  };

  useEffect(() => {
    getAllPlayers();
  }, []);

  const renderPageNumbers = pagination();

  return (
    <table className={styles.playerListTable}>
      <thead className={styles.playerListTableHeader}>
        <tr>
          <td>Position</td>
          <td>First name</td>
          <td>Last name</td>
          <td>Team</td>
          <td>Value</td>
          <td>Total points</td>
        </tr>
      </thead>
      <tbody className={styles.playerListTableContent}>
        {currentPlayers?.map((player) => (
          <tr key={player.id}>
            <PlayerListElement
              player={player}
              onClick={() => {
                clickOnSpecificPlayer(player);
              }}
            />
          </tr>
        ))}
      </tbody>
      <tfoot className={styles.playerListTablePagination}>
        <tr>
          <td colSpan={6}>
            <ul>
              <FontAwesomeIcon
                icon={faArrowLeft}
                onClick={() => handlePageChange(currentPage - 1)}
              />
              {renderPageNumbers &&
                renderPageNumbers.map((number) => {
                  return (
                    <li
                      className={
                        currentPage === number ? styles.active : styles.inactive
                      }
                      key={number}
                      id={number.toString()}
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </li>
                  );
                })}
              <FontAwesomeIcon
                icon={faArrowRight}
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </ul>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default observer(PlayersList);
