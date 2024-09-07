import React from 'react'

const FilterByRelease = ( {toSortByAge, setToSortByAge} ) => {

    const handleChooseSort = (e) => {
        setToSortByAge(e.target.value)
    }

    return (
        <div className='flex items-center flex-col max-h-14 p-2'>
            <label htmlFor="">
                <input
                    type="radio"
                    name="sort"
                    id="oldest"
                    value="oldest"
                    checked={toSortByAge === 'oldest'}
                    onChange={handleChooseSort}
                />from oldest to newest
            </label>
            <label htmlFor="">
                <input
                    type="radio"
                    name="sort"
                    id="newest"
                    value="newest"
                    checked={toSortByAge === 'newest'}
                    onChange={handleChooseSort}
                />from newest to oldest
            </label>
        </div>
    )
}

export default FilterByRelease
