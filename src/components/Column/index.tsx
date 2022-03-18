import React from 'react'
import Task from '../Task'

const Column = () => {
    return (
        <div className="flex-[0_0_auto] w-[300px] h-[calc(100%-10px)] p-[0_8px] bg-slate-200 rounded-t-[5px] ml-[10px] " >
          <header className="pl-[15px] h-9 leading-9 text-[16px] font-bold " >Brainstorm</header>
          <ul className="list-none m-0 overflow-y-auto max-h-[calc(100%-36px-36px)] " >
            <Task />
          </ul>
          <div className="rounded-[3px]" >
          <footer className="pl-[15px] h-9 leading-9 " >Add another card</footer>
          </div>
        </div>
    )
}

export default Column