import React from 'react'
import design from '../../assets/img-design.png'

const Task = () => {
    return (
        <>
            <li className="bg-white pb-2.5 mb-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.1)] ">
              <img src={design} alt="" className="m-[0] rounded-t-[3px] block w-[calc(100% + 20px)] " />
              <p className="pl-2.5 pt-2.5">Design & Research</p>
            </li>
        </>
    )
}

export default Task