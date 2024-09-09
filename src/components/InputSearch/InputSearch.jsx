import { useState, useRef } from 'react'

import './InputSearch.css'


const InputSearch = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null)

    const setNewSearchTerm = (e) => {
        setInputValue(e.target.value)
    }

    const sendFetch = () => {
        onSearch(inputValue);
    };

    const activateInputByClickOnLabel = () => { // activate input by clicking on label
        inputRef.current.focus();
    }

    const sendFetchByEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendFetch();
        }
    }

    return (
        <>
            <div>
                <div className="flex max-w-[1000px] max-h-14 p-2">
                    <div className="relative ">
                        <input
                            ref={ inputRef }
                            type="text"
                            placeholder // HERE I'VE GOT A WARNING Received `true` for a non-boolean attribute `placeholder` BUT IF I ADD = '', THE ERROR DISSAPEARS, BUT INSTEAD, THE ANIMATION OF RETURNING LABEL ON IT'S PLACE DOESN'T WORK PROPERLY
                            id="search"
                            value={inputValue} // передаем в app value input'a 
                            onChange={setNewSearchTerm}
                            onKeyDown={sendFetchByEnter}
                            className="w-full py-2 px-4 border-2 border-white focus:outline-none text-sm font-medium text-white-700 bg-transparent active:opacity-10 transition-color  transform  transition-transform duration-500 ease-in-out border-r-0 hover:blur-[1px] transition-100    input" />
                        <label
                            className='absolute inset-7 top-3 text-gray-400 cursor-text text-xs  label'
                            onClick={activateInputByClickOnLabel}
                        >
                            Write here...
                        </label>
                    </div>
                    <button
                        className="py-2 w-40 px-4 bg-none text-right border-2 border-white hover:blur-[1px] transition-100 border-l-0 text-sm font-medium text-gray-400 active:opacity-10   transition-color  transform hover:translate-x-1 transition-transform duration-500 ease-in-out"
                        onClick={sendFetch} // запрос fetch по клику
                    >search</button>
                </div>
            </div>
        </>
    )
}

export default InputSearch;