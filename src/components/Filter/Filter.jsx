import React from 'react'

const Filter = () => {
    return (
        <div className='flex items-center flex-col max-h-14 p-2'>
            <label htmlFor="">
                <input type="radio" name="sort" id="oldest" />от старых к новым
            </label>
            <label htmlFor="">
                <input type="radio" name="sort" id="newest" />от новых к старым
            </label>
        </div>
    )
}

export default Filter
