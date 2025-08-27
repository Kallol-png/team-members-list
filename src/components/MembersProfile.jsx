import React from 'react'

const MembersProfile = ({name,role,image}) => {
  return (
     <div className='bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:-translate-y-2 transition-all duration-200 ease-in-out hover:ring-2 ring-green-400 cursor-pointer'>
            <img src={image} alt="" className='w-32 h-32 rounded-full mx-auto mb-4 object-cover' />
            <h2 className='text-xl font-semibold text-center text-gray-800'>{name}</h2>
            <p className='text-gray-600 text-center'>{role}</p>
     </div>
  )
}

export default MembersProfile