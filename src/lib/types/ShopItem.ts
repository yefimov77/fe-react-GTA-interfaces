export interface IShopItem {
  id: number;
  name: string;
  price: number;
  count: number;
  imgUrl: string;
}

export interface ICartItem extends IShopItem {
  quantity: number;
}
