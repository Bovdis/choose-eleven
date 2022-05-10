import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import useStores from "../../stores/useStores";
import styles from "./chooseUser.module.scss";

const ChooseUser: FC = () => {
  const [userName, setUserName] = useState("");

  const history = useHistory();

  const {
    usersStore: { allUsers, addNewUser, removeUser, setCurrentUser },
  } = useStores();

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Input user name"
          className={styles.inputUser}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addNewUser(userName);
              setUserName("");
            }
          }}
        />
        <button
          className={styles.addUserBtn}
          disabled={!userName}
          onClick={() => {
            addNewUser(userName);
            setUserName("");
          }}
        >
          Add user
        </button>
      </div>
      <div className={styles.userList}>
        <p>Managers:</p>
        <ul className={styles.userListUl}>
          {allUsers.map((user) => (
            <li key={user.name}>
              <button
                className={styles.userListNames}
                onClick={() => {
                  setCurrentUser(user);
                  history.push("/players");
                }}
              >
                {user.name}
              </button>
              <button
                className={styles.userListRemoveBtn}
                onClick={() => removeUser(user.name)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default observer(ChooseUser);
