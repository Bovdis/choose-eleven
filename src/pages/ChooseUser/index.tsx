import React, { FC, useState } from "react";
import useStores from "../../stores/useStores";

const ChooseUser: FC = () => {
  const [userName, setUserName] = useState("");

  const {
    usersStore: { allUsers, addNewUser, removeUser, setCurrentUser },
  } = useStores();

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Input user name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => {
            addNewUser(userName);
            setUserName("");
          }}
        >
          Add user
        </button>
      </div>
      <div>
        <p>Users:</p>
        <ul>
          {allUsers.map((user) => (
            <li>
              <button onClick={() => setCurrentUser(user)}>{user.name}</button>
              <button onClick={() => removeUser(user.name)}>
                Remove user icon (trash can)
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChooseUser;
