import { useState } from 'react'

import Filter from '../Filter/Filter'
import './InputSearch.css'


const InputSearch = ({ onSearch }) => {

    const [inputValue, setInputValue] = useState('')

    const setNewSearchTerm = (e) => {
        setInputValue(e.target.value)
    }

    const sendFetch = () => {
        onSearch(inputValue);
    };

    return (
        <>
            <div>
                <div className="flex max-w-[1000px] max-h-14 p-2">
                    <input
                        type="text"
                        placeholder="поиск..."
                        value={inputValue} // передаем в app value input'a 
                        onChange={setNewSearchTerm}
                        className="w-full py-2 px-4 border-2 border-white focus:outline-none text-sm font-medium text-white-700 bg-transparent active:opacity-10 transition-color duration-100 transform hover:-translate-x-1 transition-transform duration-500 ease-in-out border-r-0 hover:blur-[1px] transition-100 " />
                    <button
                        className="py-2 w-72 px-4 bg-none text-right border-2 border-white hover:blur-[1px] transition-100 border-l-0 text-sm font-medium text-gray-400 active:opacity-10   transition-color duration-100 transform hover:translate-x-1 transition-transform duration-500 ease-in-out"
                        onClick={sendFetch} // запрос fetch по клику
                    >ищи</button>
                    <svg
                        className="w-20 cursor-pointer "
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M640 288a64 64 0 1 1 0.032-128.032A64 64 0 0 1 640 288z m123.456-96c-14.304-55.04-64-96-123.456-96s-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896V192h-132.544zM640 864a64 64 0 1 1 0.032-128.032A64 64 0 0 1 640 864m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64h-132.544c-14.304-55.04-64-96-123.456-96M384 576a64 64 0 1 1 0.032-128.032A64 64 0 0 1 384 576m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h132.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64H507.456c-14.304-55.04-64-96-123.456-96"
                            fill="gray" />
                    </svg>
                </div>
                <Filter />
            </div>
        </>
    )
}

export default InputSearch;