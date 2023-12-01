import React, { useState } from 'react'

function ItemsDeatils() {
  const [items] =useState([{
    item:"o",
    quantity:1,
    rate:0,
    amount:0
   }])

 const [itemsDeatils,setItemDeatils] =useState(items);

 const addRow =()=>{

   setItemDeatils([...itemsDeatils,...items])
 }

 const handleTableValue =(e:React.ChangeEvent<HTMLInputElement>,index:number)=>{
   const  {name,value}=e.target;
   if(name=="item"){

    let newObj =itemsDeatils;
    newObj[index].item=value
     setItemDeatils(newObj)
   }else if(name=="quantity"){
    let newObj =itemsDeatils;
    newObj[index].quantity=parseInt (value);
     setItemDeatils(newObj)
   }else if(name=="rate"){
    let newObj =itemsDeatils;
    newObj[index].rate=parseInt(value);
     setItemDeatils(newObj)
   }
  
    
  }
 
  return (
    <div>
        <table className='table-auto'> 
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
              
              {itemsDeatils.map((item,index)=>{
             
                return(
                  <tr key={index}>
                  <td>
                    <input type='text' name="item" defaultValue={item.item} onChange={(e)=>handleTableValue(e,index)}/>
                  </td>
                  <td>
                    <input type='number' name='quantity' defaultValue={item.quantity} onChange={(e)=>handleTableValue(e,index)}/>
                  </td>
                  <td>
                    <input type='number' name="rate" defaultValue={item.rate} onChange={(e)=>handleTableValue(e,index)}/>
                  </td>
                  <td>
                    <input type='number' name="amount" defaultValue={item.quantity*item.rate} onChange={(e)=>handleTableValue(e,index)}/>
                  </td>
                </tr>
                )
              })}
   
            </tbody>
        </table>
        <button onClick={addRow}>add row</button>
    </div>
  )
}

export default ItemsDeatils