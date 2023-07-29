import { useEffect, useState } from "react";
import { Form, List } from "./components";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";
import { ICar } from "./interfaces/Car";
import "react-loading-skeleton/dist/skeleton.css";
import { pause } from "./utils/pause";
import Cart from "./components/cart";
const carsData = [
  { id: 1, name: "BMW" },
  { id: 2, name: "Mercedes" },
  { id: 3, name: "Audi" },
];

function App() {
  const [cars, setCars] = useState<ICar[]>(carsData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null);
  const addCar = (car: ICar) => {
    setCars([...cars, car]);
  };
  const removeCar = (id: number | string) => {
    setCars(cars.filter((car) => car.id !== id));
  };
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        await pause(1000);
        setCars(cars);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <div className="w-[600px] mx-auto border border-gray-500 p-2 mt-10">
      <Counter />
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
{
  /* <Form onAdd={addCar} />
      <List loading={isLoading} cars={cars} onRemove={removeCar}></List>
      <hr />*/
}
