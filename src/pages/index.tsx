import React from 'react'
import SearchModal from '@/components/modals/Search'
import ThemeModeBtn from '@/components/ThemeModeBtn'

const IndexPage = () => {
  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-stone-600 flex flex-col space-y-6 justify-center items-center relative">
      <SearchModal />
      <ThemeModeBtn />
    </div>
  )
}

export default IndexPage
