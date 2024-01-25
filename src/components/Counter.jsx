import { useState } from "preact/hooks";

export const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <section className="flex flex-col justify-center w-70 mb-4 gap-y-1">
      <span className=" text-yellow-300 text-xl m-auto">{counter}</span>
      <button
        class="border px-4 py-2 text-xl"
        onClick={() => setCounter(counter => counter + 1)}
      >+</button>
      <button
        className="border px-4 py-2 text-xl"
        onClick={() => setCounter(counter => counter - 1)}
      >-</button>
    </section>
  );
}
