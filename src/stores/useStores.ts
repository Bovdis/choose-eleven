import { useContext, createContext } from "react";
import PlayersStore from "./PlayersStore";

const storesContext = createContext({
  playersStore: new PlayersStore(),
});

const useStores = () => useContext(storesContext);

export default useStores;
