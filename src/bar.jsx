import React from 'react'
import { useState } from 'react'

function bar({project,percentComplete}) {
    

    const [chart, setChart] =useState(Number(percentComplete))

  return (
    <div className='barChart'></div>
  )
}

export default bar