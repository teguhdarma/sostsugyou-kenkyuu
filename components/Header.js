import { useState } from 'react';

import { useRouter } from 'next/router';

function Header({ placeholder }) {
  // kalender
  const [searchInput, setSearchInput] = useState('');

  const router = useRouter();

  const search = () => {
    router.push({
      pathname: '/maps',
      query: {
        location: searchInput,
      },
    });
  };

  const resetInput = () => {
    setSearchInput('');
  };

  return (
    // <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
    //   <input
    //     value={searchInput}
    //     onChange={(e) => setSearchInput(e.target.value)}
    //     className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
    //     type="text"
    //     placeholder={placeholder || 'start your search'}
    //   />

    //   <button onClick={search} className="flex-grow text-blue-400">
    //     Search
    //   </button>
    // </div>
    <div className="flex items-center flex justify-center mt-52  mb-5">
      <div className="flex border border-purple-200 rounded">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          type="text"
          placeholder={placeholder || 'start your search'}
        />
        <button
          onClick={search}
          className="px-4 text-white bg-purple-600 border-l rounded "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
