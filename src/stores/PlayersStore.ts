import { makeObservable, observable, runInAction } from "mobx";
import { Player, Players } from "../models";

class PlayersStore {
  allPlayers: Players = [];
  currentPlayer = {} as Player;

  constructor() {
    makeObservable(this, {
      allPlayers: observable,
      currentPlayer: observable,
    });
  }

  setAllPlayers = (players: Players) => {
    runInAction(() => {
      this.allPlayers = players;
    });
  };

  setCurrentPlayer = (player: Player) => {
    runInAction(() => {
      this.currentPlayer = player;
    });
  };
}

export default PlayersStore;
