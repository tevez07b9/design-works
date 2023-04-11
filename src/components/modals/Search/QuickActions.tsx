import React from 'react'
import { FiPlus } from 'react-icons/fi'
import IconButton from './IconButton'

interface Props {
  text: string
  shortcut: string
}
const QuickActionItem: React.FC<Props> = ({ text, shortcut }) => {
  return (
    <div className="flex items-center text-lg text-gray-400 space-x-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-stone-800 rounded-md">
      <IconButton>
        <FiPlus />
      </IconButton>
      <p className="text-gray-700 dark:text-stone-200 font-semibold flex-grow">{text}</p>
      <IconButton>{shortcut}</IconButton>
    </div>
  )
}

const QuickActions = () => {
  return (
    <div className="p-4 w-full">
      <p className="text-gray-400 dark:text-stone-500 mb-3">Quick Actions</p>
      <QuickActionItem text="Create new task" shortcut="E" />
      <QuickActionItem text="Create note" shortcut="S" />
      <QuickActionItem text="Add new member" shortcut="R" />
    </div>
  )
}

export default QuickActions
