import React from 'react'

function InvoiceInfo() {
  return (
    <div className='flex flex-col'>
        <div className='flex-row'>
            <span className='text-right'>Date</span>
            <input type='date'/>
        </div>
        <div className='flex-row'>
            <span className='text-right'>Payment terms</span>
            <input type='text'/>
        </div>
        <div className='flex-row'>
            <span className='text-right'>Due Date</span>
            <input type='date'/>
        </div>
        <div className='flex-row'>
            <span className='text-right'>PO Number</span>
            <input type='text'/>
        </div>
    </div>
  )
}

export default InvoiceInfo
/* 
date
payment terms
due date
po number

*/