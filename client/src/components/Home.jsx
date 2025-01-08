import React from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <div className="py-10 relative min-w-[90vw]">
      <button
        onClick={() => nav("/login")}
        className="bg-black hover:bg-green-400 text-richBlue-100 font-saira text-xl w-fit font-bold p-2 px-7 rounded-lg absolute right-5"
      >
        Login
      </button>
      <div className="ml-20 px-16 py-28 text-white flex flex-col gap-6">
        <h1 className="font-orbitron text-5xl font-bold ">
          <span className="text-richYellow">BOOKS hi Books</span>{" "}
        </h1>
        <div className="flex flex-row font-orbitron text-9xl font-bold">
          <h1>LIBR</h1>
          
          <h1>ARY</h1>
        </div>

        <p className="text-xl font-serif">
          Dive into our extensive collection of literary treasures. From
          timeless classics to <br />
          Unlock a world of imagination and discovery. From timeless classics to modern masterpieces, our shelves are brimming with stories that inspire, entertain, and enlighten. Whether you crave epic adventures, heartwarming tales, or profound knowledge, our library is the perfect escape for every curious mind.
        </p>
        <button
          onClick={() => nav("/login")}
          className="bg-black hover:bg-green-400 text-richBlue-100 font-saira text-xl w-fit font-bold p-2 px-5 rounded-lg"
        >
          Start Borrowing!!
        </button>
      </div>
    </div>
  );
};

export default Home;
