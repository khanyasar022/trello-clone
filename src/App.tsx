import React from 'react';
import design from './assets/img-design.png'
import './App.css';

function App() {
  return (
    <div className="h-screen grid grid-rows-[40px_50px_1fr] leading-5 bg-sky-600 ">
      <div className="flex items-center " >
        <nav className="pl-4 text-[1.5rem] w-full leading-10 bg-sky-700">App bar</nav>
      </div>
      <div className="pl-4 flex items-center" >
        <nav className="text-[1.1rem] bg-sky-600">Board bar</nav>
      </div>
      <div className="flex overflow-x-auto m=[0_10px_10px] " >
        <div className="flex-[0_0_auto] w-[300px] h-[calc(100%-10px)] p-[0_8px] bg-slate-200 rounded-t-[5px] ml-[10px] " >
          <header className="pl-[15px] h-9 leading-9 text-[16px] font-bold " >Brainstorm</header>
          <ul className="list-none m-0 overflow-y-auto max-h-[calc(100%-36px-36px)] " >
            <li className="bg-white pb-2.5 mb-2.5 rounded-t-[5px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] ">
              <img src={design} alt="" className="m-[0] rounded-t-[3px] block w-[calc(100% + 20px)] " />
              <p className="pl-2.5">Design & Research</p>
            </li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
            <li className="bg-white p-2.5 mb-2.5 ">second</li>
          </ul>
          <div className="rounded-[3px]" >
          <footer className="pl-[15px] h-9 leading-9 " >Add another card</footer>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
