import {usePDF} from 'react-to-pdf'
import InvoiceDeaitls from "@/componet/InvoiceDeaits";
import Billing from '@/componet/billing';
import ItemsDeatils from '@/componet/itemsDeatils';

export default function Home() {
  const {toPDF,targetRef} =usePDF({filename:"invoice.pdf"});
  return (
   <div className="m-10">
    <button onClick={() => toPDF()}>Download PDF</button>
    <div ref={targetRef} className=' h-full w-full p-5 flex border border-[black] flex-col'>
      <div className="border border-opacity-100 border-[gray] p-3">    <InvoiceDeaitls/></div>
      <div className="border border-opacity-100 border-[gray] p-3">   <ItemsDeatils /></div>
      <div className="border border-opacity-100 border-[gray] p-3">   <Billing /></div>
     
     
      </div>  
   </div>
  )
}


