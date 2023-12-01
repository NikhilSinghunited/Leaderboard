import React from 'react';
import { Leaderboard } from './Database';
import Profile from './Profile';
export default function Board() {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <div div className='bg-white h-screen  '>
        <div className='Board   bg-black-200 text-center items-center justify-center mb-4'>
          <h1>LEADERBOARD</h1>
        </div>
        <div className='Duration flex items-center justify-center gap-40 '>
          <button
            onclick={handleClick}
            data-id='7'
            className='bg-blue-500 text-white rounded-md hover:bg-black-600'
          >
            7 Days
          </button>
          <button
            onclick={handleClick}
            data-id='30'
            className='bg-blue-500 text-white rounded-md hover:bg-black-600  gap-96'
          >
            30 Days
          </button>
          <button
            onclick={handleClick}
            data-id='0'
            className='bg-blue-500 text-white rounded-md hover:bg-black-600  gap-96'
          >
            All-TIME
          </button>
        </div>
        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
      </div>
    </>
  );
}
function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
