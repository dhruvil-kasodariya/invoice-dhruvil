

function BasicInfo() {
  return (
    <div className="flex flex-col">
        <div className="  items-center justify-center">
        <input type="file" />
        </div>
        
        <div className=" w-full">
        <textarea placeholder="Who is this invoice from?(required)" />
        </div>
        
        <div className="flex flex-row">
            <div>
            <label className="w-full">Bill To</label>
            <input className="w-full" type="text" placeholder="Who is this invoice to?(required)" />
            </div>
            <div>
            <label className="w-full" >Ship To</label>
            <input className="w-full" type="text" placeholder="(optional)"/>    
            </div>
        </div>  
    </div>
  )
}

export default BasicInfo