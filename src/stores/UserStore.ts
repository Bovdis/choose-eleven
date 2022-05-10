import { makeObservable, observable, runInAction } from "mobx";
import { Player, User } from "../models";

class UsersStore {
  allUsers: User[] = [];
  currentUser = {} as User;
  playerExistError: boolean = false;

  constructor() {
    makeObservable(this, {
      allUsers: observable,
      currentUser: observable,
    });
  }

  setCurrentUser = (user: User) => {
    runInAction(() => {
      this.currentUser = user;
    });
  };

  addNewPlayer = (player: Player) => {
    runInAction(() => {
      const index = this.currentUser.players.findIndex(
        (p) => p.id === player.id
      );

      if (index === -1) {
        this.currentUser.players.push(player);
        this.playerExistError = false;
      } else {
        this.playerExistError = true;
      }
    });
  };

  addNewUser = (userName: string) => {
    runInAction(() => {
      this.allUsers.unshift({ name: userName, budget: 100, players: [] });
    });
  };

  removeUser = (userName: string) => {
    runInAction(() => {
      this.allUsers = this.allUsers.filter((u) => u.name !== userName);
    });
  };
}

export default UsersStore;
