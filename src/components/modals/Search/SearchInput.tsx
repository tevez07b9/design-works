import React from 'react'
import { FiSearch, FiCommand } from 'react-icons/fi'
import IconButton from './IconButton'

const SearchInput = () => {
  return (
    <div className="w-full p-4 border-b border-gray-100 dark:border-stone-700 flex items-center text-gray-400 dark:text-stone-500 text-lg">
      <FiSearch className="text-xl" />
      <input
        placeholder="Search for actions, people, instruments"
        className="mx-2 flex-grow focus-visible:outline-none bg-transparent dark:placeholder:text-stone-700 dark:text-stone-500"
        type="text"
      />
      <IconButton>
        <div className="flex items-center space-x-1">
          <FiCommand />
          <span className="mt-[-1px] font-semibold">F</span>
        </div>
      </IconButton>
    </div>
  )
}

export default SearchInput
