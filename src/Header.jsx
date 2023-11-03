import React from 'react';
import { BookCheck, Search } from 'lucide-react';

function Header({ isbnInput, onSearchChange, onSearchSubmit }) {
  return (
    <div className="bg-slate-800 text-white w-full text-start py-10">
      <div className="mx-[4rem]">
        <div className="flex mb-4">
          <BookCheck color="orange" size={40} />
          <h1 className="text-4xl font-bold ml-2">Open Library</h1>
        </div>
        <div className="pt-2 text-gray-600">
          <form
            className="flex items-center border-2 rounded-md border-gray-300 bg-white"
            onSubmit={onSearchSubmit}
          >
            <input
              className="px-5 w-full bg-white h-10 flex items-center"
              type="text"
              placeholder="Search by ISBN i.e. 9780596007126"
              value={isbnInput}
              onChange={onSearchChange}
            />
            <button
              className="h-10 w-12 border-1 border-gray-30 bg-amber-500 flex items-center justify-center"
              type="submit"
            >
              <Search color="white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
