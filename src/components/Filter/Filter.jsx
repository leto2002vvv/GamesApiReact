import React from 'react'

const Filter = ({ toSort, setToSort }) => {

    const handleChooseSort = (e) => {
        setToSort(e.target.value)
    }

    return (
        <div className='flex items-start flex-col'>
            <label >
                <input
                    type="radio"
                    name="sort"
                    id="newest"
                    value="newest"
                    checked={toSort === 'newest'}
                    onChange={handleChooseSort}
                />from newest to oldest
            </label>
            <label >
                <input
                    type="radio"
                    name="sort"
                    id="best"
                    checked={toSort === "best"}
                    onChange={handleChooseSort}
                    value="best" />from highest-rated
            </label>
        </div>
    )
}

export default Filter
