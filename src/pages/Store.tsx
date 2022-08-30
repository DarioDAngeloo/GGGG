import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-semibold m-6 text-blue-900  justify-center items-center  tracking-wide font-monserrat">
        Choose a Destiny
      </h1>
      <div className="flex flex-wrap m-12  gap-5 justify-center ">
        {storeItems.map((item) => {
          return <StoreItem {...item} />;
        })}
      </div>
    </>
  );
};

export default Store;
