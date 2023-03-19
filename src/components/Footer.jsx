import React from 'react'

import Logo from "../assets/bookIcon.svg"

const Footer = () => {
  return (
  
   
    <div className='flex justify-center p-10 mt-14 bg-sky-500 text-white text-lg'>
       <img className=" w-20 m-3" src={Logo}  />
        <div className=' font-sans w-[400px] text-center'>“No puedes quedarte ahí sentado y poner las vidas de todos los demás por delante de la tuya y pensar que eso cuenta como amor”{" "}.-Las ventajas de ser un marginado </div>
    </div>
    
  )
}

export default Footer