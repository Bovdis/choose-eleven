import { makeObservable, observable, runInAction } from "mobx";
import { User } from "../models";

class UsersStore {
  allUsers: User[] = [];
  currentUser = {} as User;

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
