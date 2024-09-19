import React from 'react'
import data1 from './data.json'

function Comp() {
    const data= data1;
  return (
    <>
       <div className='text-boxes'>
        <input type='text' className='bigBox' placeholder='Enter the color name'/>
        <input type="number" className='smallBox1' placeholder='Enter min value'/>
        <input type="number" className='smallBox2'placeholder='Enter max value'/>
       </div>

       {
        data.map((card)=>(<bar project={card.project} percentComplete={card.percentComplete}/>))
       }

    
    </>
 
  )
}

export default Comp