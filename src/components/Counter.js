import React from "react";
import { FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa';

function Counter({ counter, changeStatus, index,lengthCounters }) {
  return (
    // gap-4 grid grid-cols-3 justify-center justify-items-center items-center
    <div className={counter.status ? "main-card bg-green-500 text-white" :"main-card"}>
      <p className="absolute top-2 left-2 border-2  w-8 h-8 py-1 text-sm text-center   rounded-full font-bold">{index+1}</p>
      <p className="text-xl font-bold">{counter.number}</p>
      <div className="flex gap-x-2">
        <button  disabled={counter.status ? false :true}
          onClick={() => {
            index--;
            return index <= -1 ? changeStatus(lengthCounters-1) : changeStatus(index);
          }}
          className="btn disabled-custom text-red-700 hover:ring-red-500 flex gap-x-3 rounded-lg items-center"
        >
          <FaAngleDoubleLeft />

          <span className="font-bold ">Pre</span>
        </button>
        <button disabled={counter.status ? false :true}
          onClick={() => {
            index++;
            return index >= (lengthCounters) ? changeStatus(0) : changeStatus(index);
          }}
          className="btn disabled-custom text-blue-700   hover:ring-blue-500  items-center"
        >
          <FaAngleDoubleRight />

          <span className="font-bold order-first">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
