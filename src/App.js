import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import {
  FaPlusCircle,
  FaSyncAlt,
  FaRegPlayCircle,
  FaRegPauseCircle,
} from "react-icons/fa";

function App() {
  const [collection, setCollection] = useState({
    counters: [{ number: 0, status: true }],
    lengthCounters: 1,
    pauseStatus: false,
    currentIndex: 0,
  });


  const changeStatus = (index) => {
    setCollection((last) => {
      let help = last.counters.map((item, indexItem) => {
        return index === indexItem
          ? { ...item, status: true }
          : { ...item, status: false };
      });
      return { ...last, counters: [...help], currentIndex: index };
    });
  };
  const addBox = () => {
    setCollection((last) => {
      return {
        ...last,
        counters: [...last.counters, { number: 0, status: false }],
        lengthCounters: last.lengthCounters + 1,
      };
    });
  };
  const reset = () => {
    setCollection((last) => {
      return {
        ...last,
        counters: [{ number: 0, status: true }],
        lengthCounters: 1,
        currentIndex: 0,
      };
    });
  };
  const pause = () => {
    setCollection((last) => {
      return { ...last, pauseStatus: !last.pauseStatus };
    });
  };

  useEffect(() => {

    const interval = ((collection.counters[collection.currentIndex].status) && (!collection.pauseStatus))
      && (setInterval(() => {
        setCollection((last) => {
          let help = [...last.counters];
          help[collection.currentIndex].number += 1;

          return { ...last, counters: [...help] };

        });
      }, 100))



    // clean up
    return () => {
      clearInterval(interval);
    };
  }, [collection.counters[collection.currentIndex], collection.pauseStatus]);

  return (
    <div className="container mb-4">
      <div className="flex justify-center gap-x-3 border-b py-4 shadow-lg rounded-sm">
        <button
          onClick={addBox}
          className="btn text-blue-600 items-center font-bold"
        >
          <FaPlusCircle />
          <span>Add</span>
        </button>

        <button
          onClick={pause}
          className="btn items-center justify-center font-bold w-28 px-0"
        >
          {collection.pauseStatus ? (
            <>
              <FaRegPlayCircle className="text-red-500" />
              <span className="text-red-500">Play</span>
            </>
          ) : (
            <>
              <FaRegPauseCircle className="text-green-600" />
              <span className="text-green-600">Pause</span>
            </>
          )}
        </button>
        <button
          onClick={reset}
          className="btn items-center text-indigo-800 font-bold"
        >
          <FaSyncAlt />
          <span>Reset</span>
        </button>
      </div>
      <div className="gap-4 grid grid-cols-3 justify-center justify-items-center items-center mt-8">
        {collection.counters.map((item, index) => {
          return (
            <Counter
              counter={item}
              key={index}
              index={index}
              changeStatus={changeStatus}
              lengthCounters={collection.lengthCounters}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
