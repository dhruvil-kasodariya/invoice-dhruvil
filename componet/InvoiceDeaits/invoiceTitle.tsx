import React from 'react'

function InvoiceTitle() {
  return (
    <div className='flex flex-col'>
        <div className='font-semibold text-4xl'>INVOICE</div>
        <div className='flex-row'>
            <span className='text-right'>#</span>
            <input type='text'/>
        </div>
    </div>
  )
}

export default InvoiceTitle