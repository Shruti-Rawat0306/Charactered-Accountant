import React from 'react'

function Success() {
  return (
    <>
      <div className='bg-[#b1a7a7] h-50 w-120 ml-100 pt-10 rounded-2xl'>
          <div className='text-center text-2xl font-semibold'>
              <h2>Success!</h2>
          </div>
          <div className='pt-3'>
            <p className='text-center font-normal'>We've sent free template to <b>your@email.com.</b><br/>Please check your inbox or spam folder.</p>
          </div>
      </div>
    </>
  )
}

export default Success