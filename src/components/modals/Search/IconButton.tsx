import React, { PropsWithChildren } from 'react'

const IconButton: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="min-w-[30px] min-h-[30px] flex items-center justify-center border-none bg-gray-200 dark:bg-stone-700 dark:text-stone-400 px-1 py-0 rounded-md">
      {children}
    </button>
  )
}

export default IconButton
