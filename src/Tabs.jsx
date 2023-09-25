
import React, { useContext } from 'react'
import { TodoContext } from './Contexts/TodoContext'

const Tabs = () => {
   const { currentTab, setCurrentTab, tabs, editId } = useContext(TodoContext);
   return (
      <div className='my-6 flex gap-2 sm:gap'>
         {tabs.map(tab => (
            <button key={tab} onClick={() => setCurrentTab(tab)} className={`sm:border-sm p-1 sm:border rounded-sm flex-1 uppercase disabled:opacity-40 ${tab === currentTab && "sm:bg-[#fff6] font-bold border-b"}`} disabled={!!editId}>
               {tab}
            </button>
         ))}
      </div>
   )
}

export default Tabs;