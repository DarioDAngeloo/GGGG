import { useShoping } from "../context/Shoping";
import { CartItem } from "../components/CartItem";
import { format } from "../utilities/format";
import storeItems from "../data/items.json";

type ShopingCartProps = {
  isOpen: boolean;
};

export const ShopingCart = ({ isOpen }: ShopingCartProps) => {
  const { closeCart, cartItems } = useShoping();
  return (
    <>
      {isOpen ? (
        <div>
          <div
            className="w-full h-screen bg-blue-900/30  fixed top-0 left-0"
            onClick={closeCart}
          ></div>
          <div className="Principal-Container-blue h-full w-1/3 bg-[#d4d8f0]  fixed top-0 right-0 px-10 items-center  flex flex-col">
            <div
              onClick={closeCart}
              className="cursor-pointer mt-6 flex gap-3 justify-center hover:text-blue-800/70 font-bold"
            >
              <span>Close</span>
              <img src="../public/img/svg.svg" alt="logo" />
            </div>
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="mt-7 font-bold self-end text-[#232946] bg-white/40 p-5 rounded">
              Total:{"  "}
              {format(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
