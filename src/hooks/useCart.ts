import { useEffect, useState } from 'react';
import cart from '../apis/cart';
import { useRecoilState } from 'recoil';
import { cartCountState } from '../recoil/atoms/cartCountState';
import {
  totalItemCountState,
  totalMileageState,
  totalPriceState,
} from '../recoil/atoms/receiptState';
import { parsePrice } from '../utils/Price';
import { PriceType } from '../utils/PriceType';
import { cartListState } from '../recoil/atoms/cartListState';

interface CartData {
  cartCount: number;
  response: string;
  addToCart: (bookId: number) => Promise<void>;
  deleteFromCart: (bookId: number) => Promise<void>;
  cartList: [];
}

const _getCartCount = async (setCartCount: (count: number) => void) => {
  try {
    const response = await cart.getCartCount();
    const newCartCount = response.data.data.countCart;
    setCartCount(newCartCount);
  } catch (err) {
    console.error(err);
  }
};

export function useCart(): CartData {
  const [cartCount, setCartCount] = useRecoilState(cartCountState);
  const [response, setResponse] = useState<string>('');
  const [, setTotalPrice] = useRecoilState(totalPriceState);
  const [, setTotalMileage] = useRecoilState(totalMileageState);
  const [, setTotalItemCount] = useRecoilState(totalItemCountState);
  const [cartList, setCartList] = useRecoilState(cartListState);

  useEffect(() => {
    _getCartCount(setCartCount);
  }, [setCartCount]);

  const addToCart = async (bookId: number) => {
    try {
      const response = await cart.addToCart(bookId);
      setResponse(response.data.message);
      _getCartCount(setCartCount);
    } catch (err) {
      console.error(err);
    }
  };

  const _getCartList = async () => {
    try {
      const response = await cart.getCartList();
      setCartList(response.data.data);

      setTotalPrice(
        response.data.data.reduce((acc: number, item: PriceType) => {
          const discountPrice = parsePrice(item.discountPrice);
          return acc + discountPrice;
        }, 0)
      );

      setTotalMileage(
        response.data.data.reduce((acc: number, item: PriceType) => {
          const milege = parsePrice(item.mileage);
          return acc + milege;
        }, 0)
      );

      setTotalItemCount(response.data.data.length);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    _getCartList();
  }, []);

  const deleteFromCart = async (bookId: number) => {
    try {
      const response = await cart.deleteFromCart(bookId);
      setResponse(response.data.message);
      _getCartList();
    } catch (err) {
      console.error(err);
    }
  };

  return { cartCount, response, addToCart, deleteFromCart, cartList };
}
