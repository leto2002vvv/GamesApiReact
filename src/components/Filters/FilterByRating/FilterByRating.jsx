import React from 'react'

const FilterByRating = ( {toSortByRating, setToSortByRating} ) => {

    const handleChangeSort = (e) => {
        setToSortByRating(e.target.value)
    }

    return (
        <div className='flex items-start flex-col max-h-14 p-2'>
            <label htmlFor=""
            className=''>
                <input
                    type="radio"
                    name="sortRating"
                    id="best"
                    checked={toSortByRating === "best"}
                    onChange={handleChangeSort}
                    value="best" /> from highest-rated
            </label>
            <label htmlFor=""
            className=''>
                <input
                    type="radio"
                    name="sortRating"
                    id="worst"
                    checked={toSortByRating === "worst"}
                    onChange={handleChangeSort}
                    value="worst" /> from lowest-rated   
            </label>
        </div>
    )
}

export default FilterByRating
