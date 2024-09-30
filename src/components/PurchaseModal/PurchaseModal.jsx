import React from 'react'

const PurchaseModal = ({ modalVisible, setModalVisible, currItem }) => {

    if (!modalVisible) return null

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 w-full h-screen transition-all duration-500 ease-in-out ">
            <div className=' bg-cover rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center fixed inset-0 w-2/4 h-2/4 '
                style={{ backgroundImage: `url:${currItem.background_image}` }}>
                <div className="backdrop-blur-2xl rounded w-10/12 p-3 flex flex-col gap-2">

                    <button className='w-25 h-7  px-4 bg-none text-right border-2 border-gray-400 hover:blur-[1px] transition-100 border-l-0 text-sm font-medium text-gray-400 active:opacity-10   transition-color  transform hover:translate-x-1 transition-transform duration-500 ease-in-out  text-shadow'
                        onClick={handleCloseModal}> close </button>
                </div>
            </div >
        </div>
    )
}

export default PurchaseModal
