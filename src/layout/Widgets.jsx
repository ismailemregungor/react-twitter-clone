import React from 'react';
import { SearchIcon } from '../assets/icons/Icon';

const Timeline = () => {
  return (
    <div className="w-80 min-h-screen border">
      <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="" />
        <input
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent outline-none w-full text-sm"
        />
      </div>
      <div>Timeline</div>
    </div>
  );
};

export default Timeline;
