import React from "react";

export default function Columnpop({change, submit, numBoxes}) {
  return (
    <div class=" bg-neutral-400 bg-opacity-80 absolute top-0 right-0 left-0 bottom-0 flex items-center justify-between">
      <div className="h-40 mx-auto rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="number"
            value={numBoxes}
            onChange={change}
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Columns number!"
          />
          <label
            for="exampleInputEmail2"
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
          >
            Enter columns number.
          </label>
        </div>
        <button
          type="submit"
          onClick={submit}
          class="inline-block w-full rounded bg-primary mt-4 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
