import { SHOP_ITEMS } from '@lib/data/constants';
import type { IShopItem } from '@lib/types';
import { makeAutoObservable } from 'mobx';

export class ShopStore {
  products: IShopItem[] = [];

  constructor() {
    makeAutoObservable(this);
    this.products = SHOP_ITEMS;
  }

  getItemById(itemId: number) {
    return this.products.find((p) => p.id === itemId);
  }

  reduceStock(itemId: number, amount = 1) {
    const item = this.getItemById(itemId);
    if (item && item.count >= amount) {
      item.count -= amount;
    }
  }

  increaseStock(itemId: number, amount = 1) {
    const item = this.getItemById(itemId);
    if (item) {
      item.count += amount;
    }
  }
}
