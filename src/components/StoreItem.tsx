import { useShoping } from "../context/Shoping";
import { format } from "../utilities/format";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoping();

  const quantity = getItemQuantity(id);

  return (
    <div className="bg-[#fffffe]   flex flex-col p-2 pb-4 shadow-2xl rounded-t-xl ">
      <img
        src={imgUrl}
        alt="item"
        width={"220px"}
        className="h-full object-cover rounded-lg "
      />
      <div className="flex justify-between mx-2 my-2">
        <h2 className="font-bold text-[#232946]">{name}</h2>
        <p className="text-[#232946]">{format(price)}</p>
      </div>

      <div className="max-h-9">
        {quantity === 0 ? (
          <button
            type="button"
            className="text-center mt-2 bg-[#232946] items-end text-[#b8c1ec] justify-center rounded-md w-full p-1 "
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to cart
          </button>
        ) : (
          <div className="flex justify-center flex-col  pb-4 ">
            <div className="flex flex-row w-full justify-center gap-x-3 ">
              <button
                type="button"
                className="bg-[#b8c1ec9c] px-2 text-lg  text-yebg-slate-200  flex font-extrabold rounded-xl"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <p>{quantity} in car</p>
              <button
                type="button"
                className="bg-[#b8c1ecad] px-2 text-base flex  text-yebg-slate-200 font-bold rounded-xl"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <div>
              <button
                type="button"
                className="text-center mt-2 bg-[#232946] shadow-md text-[#b8c1ec] flex justify-center rounded-md p-1 w-full"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
