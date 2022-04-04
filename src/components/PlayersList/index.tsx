import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useEffect, useState } from "react";
import { getPlayers } from "../../api/getPlayers";
import { Players } from "../../models";
import transformPlayersData from "../../util/transformPlayersData";
import PlayerListElement from "../PlayerListElement";
import styles from "./playerslist.module.scss";
import usePagination from "./usePagination";

const PlayersList: FC = () => {
  const [players, setPlayers] = useState<Players>();

  const { currentPage, currentPlayers, handlePageChange, pagination } =
    usePagination({
      players,
    });

  const allPlayers = async () => {
    const api = await getPlayers();
    setPlayers(transformPlayersData(api.data));
  };

  useEffect(() => {
    allPlayers();
  }, []);

  const renderPageNumbers = pagination();

  return (
    <table className={styles.playerListTable}>
      <thead className={styles.playerListTableHeader}>
        <tr>
          <td>ID</td>
          <td>First name</td>
          <td>Last name</td>
          <td>Team</td>
          <td>Value</td>
          <td>Total points</td>
        </tr>
      </thead>
      <tbody className={styles.playerListTableContent}>
        {currentPlayers &&
          currentPlayers.map((player) => (
            <tr key={player.id}>
              <PlayerListElement player={player} />
            </tr>
          ))}
      </tbody>
      <tfoot className={styles.playerListTablePagination}>
        <tr>
          <td colSpan={6}>
            <ul className={styles.playerListTablePagination}>
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

export default PlayersList;
