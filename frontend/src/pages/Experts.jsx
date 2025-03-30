import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Experts = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { experts } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(experts.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(experts)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [experts, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the Experts.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Math' ? navigate('/experts') : navigate('/experts/Math')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Math' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Math</p>
          <p onClick={() => speciality === 'Tech' ? navigate('/experts') : navigate('/experts/Tech')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Tech' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Tech</p>
          <p onClick={() => speciality === 'Science' ? navigate('/experts') : navigate('/experts/Science')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Science' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Science</p>
          <p onClick={() => speciality === 'Gaming' ? navigate('/experts') : navigate('/experts/Gaming')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gaming' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gaming</p>
          <p onClick={() => speciality === 'History' ? navigate('/experts') : navigate('/experts/History')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'History' ? 'bg-[#E2E5FF] text-black ' : ''}`}>History</p>
          <p onClick={() => speciality === 'Communication' ? navigate('/experts') : navigate('/experts/Communication')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Communication' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Communication</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'> 
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF] ' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experts