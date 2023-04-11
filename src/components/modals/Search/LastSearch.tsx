import React from 'react'
import { FiMenu, FiMessageSquare } from 'react-icons/fi'

interface Props {
  text: string
  textAlt?: string
  msgs?: number
}
const LastSearchItem: React.FC<Props> = ({ text, textAlt, msgs }) => {
  return (
    <div className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-stone-800 rounded-md text-lg">
      <div className="w-6 h-6 rounded-full bg-gray-400 dark:bg-stone-700"></div>
      <p className="font-semibold text-gray-700 dark:text-stone-200 flex-grow">
        {text}
        {textAlt && (
          <span className="ml-2 text-gray-400 dark:text-stone-500 font-normal">{textAlt}</span>
        )}
      </p>
      <div className="flex items-center space-x-3 text-gray-400 dark:text-stone-200">
        {msgs && (
          <div className="flex items-center space-x-1">
            <FiMessageSquare className="mt-[3px]" />
            <span className="">{msgs}</span>
          </div>
        )}
        <FiMenu />
      </div>
    </div>
  )
}

const LastSearch = () => {
  return (
    <div className="p-4 w-full">
      <p className="text-gray-400 dark:text-stone-500 mb-3">
        Last Search <span className="text-gray-700 dark:text-stone-200">3</span>
      </p>
      <LastSearchItem text="Jason Woodheart" textAlt="jason@dribble.com" msgs={3} />
      <LastSearchItem text="Rob Miller" textAlt="robmiller@icloud.com" />
      <LastSearchItem text="Hannah Steward" textAlt="repled in thread" msgs={6} />
    </div>
  )
}

export default LastSearch
