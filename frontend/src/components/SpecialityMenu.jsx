import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm'>
                Easily navigate through our vast community of skilled individuals, connect with like-minded peers, 
                and seamlessly exchange knowledge to enhance your expertise.
            </p>
            
            <div className='flex sm:justify-center gap-5 pt-5 w-full overflow-x-auto px-4'>
                {specialityData.map((item, index) => (
                    <Link 
                        to={`/experts/${item.speciality}`} 
                        onClick={() => scrollTo(0, 0)} 
                        className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-8px] transition-all duration-500' 
                        key={index}>
                        <img className='w-20 sm:w-28 md:w-32 lg:w-36 xl:w-40 mb-2' src={item.image} alt={item.speciality} />
                        <p className="text-sm font-semibold">{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
