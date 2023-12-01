import React from 'react'

function TermsAndCondaition() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col'>
            <label>Notes</label>
            <textarea placeholder='Notes - any relevant infomation not already covered'/>
        </div>
        <div className=' flex flex-col'>
           <label>Terms</label>
           <textarea placeholder='Terms and conditions -late fees,payment methos,delivery schedule' className=''cols={50}/>
        </div>
    </div>
  )
}

export default TermsAndCondaition