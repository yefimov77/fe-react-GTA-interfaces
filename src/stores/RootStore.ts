import { FormStore } from './FormStore';
import { ShopStore } from './ShopStore';
import { UserStore } from './UserStore';

export class RootStore {
  userStore: UserStore;
  shopStore: ShopStore;

  formStore: FormStore;

  constructor() {
    this.shopStore = new ShopStore();
    this.userStore = new UserStore(this.shopStore);
    this.formStore = new FormStore();
  }
}

export const rootStore = new RootStore();
