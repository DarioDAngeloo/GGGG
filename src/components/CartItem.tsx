import { useShoping } from "../context/Shoping";
import storeItems from "../data/items.json";
import { format } from "../utilities/format";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoping();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="mt-4 object-cover flex justify-between items-center gap-5">
      <img src={item.imgUrl} width="70px" alt="img" className="object-cover" />
      <div className="flex flex-col items-center justify-center font-semibold">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-gray-400 text-sm mx-2">x{quantity}</span>
          )}
        </div>
        <div className="text-gray-600">{format(item.price)}</div>
      </div>
      <div>{format(item.price * quantity)}</div>
      <span
        className="bg-[#d4d8f0] text-white rounded-md font-bold hover:bg-blue-900/40 cursor-pointer p-1 px-2"
        onClick={() => removeFromCart(item.id)}
      >
        X
      </span>
    </div>
  );
};
