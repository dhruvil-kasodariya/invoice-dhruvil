import React from 'react'
import InvoiceTitle from './invoiceTitle'
import BasicInfo from './basicInfo'
import InvoiceInfo from './invoiceInfo'

function InvoiceDeaitls() {
  return (
    <div className="flex flex-col  h-full">
        <div className="justify-end"> <InvoiceTitle/></div>
       <div className="flex flex-row">
       
        <BasicInfo />
        <InvoiceInfo />
       </div>
        
      </div>
  )
}

export default InvoiceDeaitls