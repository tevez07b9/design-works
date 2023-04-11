import React from 'react'
import { IconType } from 'react-icons'
import { FiX, FiChevronDown, FiSmile, FiUsers, FiFileText, FiFlag } from 'react-icons/fi'

interface Props {
  icon?: IconType
  text: string
  disabled?: boolean
  dropdown?: boolean
}
const SuggestionItem: React.FC<Props> = ({ icon: Icon, text, disabled, dropdown }) => {
  return (
    <div className="py-1 px-2 cursor-pointer rounded-full border-2 border-gray-200 dark:border-stone-700 dark:bg-stone-800 space-x-2 flex items-center dark:text-white">
      {Icon && <Icon className="text-gray-700 dark:text-stone-200" />}
      <p
        className={`${
          disabled ? 'text-gray-400 dark:text-stone-500' : 'text-gray-700 dark:text-stone-200'
        } font-semibold`}
      >
        {text}
      </p>
      {dropdown ? <FiChevronDown className="text-gray-400" /> : <FiX className="text-gray-400" />}
    </div>
  )
}

const Suggestions = () => {
  return (
    <div className="p-4 w-full">
      <p className="text-gray-400 dark:text-stone-500">I&apos;m looking for...</p>
      <div className="flex space-x-3 items-center mt-3">
        <SuggestionItem text="Users" icon={FiUsers} />
        <SuggestionItem text="Document" icon={FiFileText} />
        <SuggestionItem text="Task" icon={FiFlag} />
        <SuggestionItem text="More" disabled dropdown />
      </div>
    </div>
  )
}

export default Suggestions
