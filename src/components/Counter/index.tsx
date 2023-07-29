import { Button } from "..";
import { useAppDispatch, useAppSelector } from "@/app/hook";

import { decrement, increase, increment } from "@/slices/Counter";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state: any) => state.counter);
  return (
    <div>
      Counter: {count}
      <Button type="primary" onClick={() => dispatch(increment() as any)}>
        Increment
      </Button>
      <Button type="primary" onClick={() => dispatch(decrement() as any)}>
        Decrement
      </Button>
      <Button type="primary" onClick={() => dispatch(increase(20) as any)}>
        Increase
      </Button>
    </div>
  );
};

export default Counter;
