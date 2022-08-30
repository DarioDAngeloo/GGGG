import { createContext, useContext, ReactNode, useState } from "react";
import { ShopingCart } from "../components/ShopingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShopingContext = createContext({} as ShopingContext);

export const useShoping = () => {
  return useContext(ShopingContext);
};

type ShopingProviderProps = {
  children: ReactNode;
};

type ShopingContext = {
  openCart: () => any;
  closeCart: () => any;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

export const ShopingProvider = ({ children }: ShopingProviderProps) => {
  const [isOpen, setModal] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shoping", []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setModal(true);
  const closeCart = () => setModal(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find((e) => e.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((e) => e.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((e) => {
          if (e.id === id) {
            return { ...e, quantity: e.quantity + 1 };
          } else {
            return e;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((e) => e.id === id)?.quantity === 1) {
        return currItems.filter((e) => e.id !== id);
      } else {
        return currItems.map((e) => {
          if (e.id === id) {
            return { ...e, quantity: e.quantity - 1 };
          } else {
            return e;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((e) => e.id !== id);
    });
  };

  return (
    <ShopingContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShopingCart isOpen={isOpen} />
    </ShopingContext.Provider>
  );
};
