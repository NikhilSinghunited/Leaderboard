import React from 'react';
import { Leaderboard } from './Database';

export default function Profile() {
  return (
    <div className='w-[600px] mx-auto mt-4'>
      {Leaderboard.map((value, index) => {
        return (
          <>
            <div className='Parent flex items-center justify-between bg-red-200 w-full'>
              <div className='Left flex justify-start w-full gap-4 mx-auto'>
                <img className='rounded-full w-24 h-24' src={value.img} />
                <div className='info'>
                  <h3>{value.name}</h3>
                  <h3>{value.location}</h3>
                </div>
              </div>
              <div className='Right flex items-center justify-center w-full'>
                <span>{value.score}</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
