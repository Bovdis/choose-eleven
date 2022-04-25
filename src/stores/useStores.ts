import { useContext, createContext } from "react";
import PlayersStore from "./PlayersStore";
import UsersStore from "./UserStore";

const storesContext = createContext({
  playersStore: new PlayersStore(),
  usersStore: new UsersStore(),
});

const useStores = () => useContext(storesContext);

export default useStores;
