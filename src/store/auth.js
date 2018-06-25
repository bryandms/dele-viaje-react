import { observable } from "mobx";

class AuthStore {
  @observable user = {
    roles: []
  };
}

let store = (window.store = new AuthStore());

export default store;

// autorun(() => {
//   console.log(store.id);
//   console.log(store.username);
//   console.log(store.role);
// });
