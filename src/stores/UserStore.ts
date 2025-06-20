// UserStore.ts

import type { ICartItem } from '@lib/types';
import { makeAutoObservable } from 'mobx';

import type { ShopStore } from './ShopStore';

export class UserStore {
  money = 200;
  cart: ICartItem[] = [];
  shopStore: ShopStore;

  constructor(shopStore: ShopStore) {
    this.shopStore = shopStore;
    makeAutoObservable(this);
  }

  addToCart(itemId: number) {
    const shopItem = this.shopStore.getItemById(itemId);
    if (!shopItem || shopItem.count <= 0) return; // no stock

    const cartItem = this.cart.find((c) => c.id === itemId);
    if (cartItem) {
      // Increase quantity if stock allows
      if (cartItem.quantity < shopItem.count) {
        cartItem.quantity += 1;
        this.shopStore.reduceStock(itemId);
      }
    } else {
      // Add new item with quantity 1
      this.cart.push({ ...shopItem, quantity: 1 });
      this.shopStore.reduceStock(itemId);
    }
  }

  removeFromCart(itemId: number) {
    const index = this.cart.findIndex((c) => c.id === itemId);
    if (index !== -1) {
      const cartItem = this.cart[index];
      this.shopStore.increaseStock(itemId, cartItem.quantity);
      this.cart.splice(index, 1);
    }
  }

  increaseQuantity(itemId: number) {
    const cartItem = this.cart.find((c) => c.id === itemId);
    const shopItem = this.shopStore.getItemById(itemId);
    if (!cartItem || !shopItem) return;

    if (shopItem.count > 0) {
      cartItem.quantity += 1;
      this.shopStore.reduceStock(itemId);
    }
  }

  decreaseQuantity(itemId: number) {
    const cartItem = this.cart.find((c) => c.id === itemId);
    if (!cartItem) return;

    cartItem.quantity -= 1;
    this.shopStore.increaseStock(itemId);

    if (cartItem.quantity <= 0) {
      this.cart = this.cart.filter((c) => c.id !== itemId);
    }
  }

  clearCart() {
    this.cart.forEach((item) => {
      this.shopStore.increaseStock(item.id, item.quantity);
    });
    this.cart = [];
  }

  canPay(total: number) {
    return this.money >= total;
  }

  pay() {
    const total = this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    if (this.canPay(total)) {
      this.money -= total;
      this.clearCart();
      return true;
    }
    console.log('insufficient funds');
    return false;
  }

  getItemQuantity(id: number) {
    const item = this.cart.find((i) => i.id === id);
    return item?.quantity;
  }

  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
