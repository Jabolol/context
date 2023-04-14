"use client";
import { useState } from "react";

type CounterProps = {
  start: number;
};

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div className="flex gap-2 w-full">
      <p className="flex-grow-1 font-bold text-xl">{count}</p>
      <button
        onClick={() => setCount(count - 1)}
        className="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
      >
        -1
      </button>
      <button
        onClick={() => setCount(count + 1)}
        className="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
      >
        +1
      </button>
    </div>
  );
}
