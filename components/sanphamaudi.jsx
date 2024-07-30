import React from 'react'

function Audiproduct({ item, addCart }) {
  return (
    <div>
      <div className='w-[250px] h-[250px]  text-white m-auto justify-center items-center border	border-red'>
        <img className='cursor-pointer' src={item.imgURL} alt="" />
        <p className='pl-2 text-black cursor-pointer'>{item.name}</p>
        <p className='pl-2 pt-2 text-black cursor-pointer'>{item.price}</p>
        <button onClick={addCart} className='pt-8 text-center text-black cursor-pointer bg-transparent border-black'>
            Mua Ngay
        </button>

      </div>
    </div>
  )
}

export default Audiproduct
