import React from 'react'
import SearchInput from './SearchInput'
import Suggestions from './Suggestions'
import LastSearch from './LastSearch'
import QuickActions from './QuickActions'

const Search = () => {
  return (
    <div className="w-2/5 bg-white dark:bg-stone-900 rounded-xl shadow-sm text-base text-gray-700 dark:text-stone-700">
      <SearchInput />
      <Suggestions />
      <LastSearch />
      <QuickActions />
    </div>
  )
}

export default Search
