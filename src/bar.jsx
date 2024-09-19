import React from 'react'


function bar({project,percentComplete, customColor}) {
    

    const chart =Number(percentComplete);

    const barHeight = Math.max(5,(percentComplete/100)*30);
    const dispLabel= barHeight>10;

  return (
    <div className='barChart'
    style={{
        width:`${chart}%`,
        height:`${barHeight}px`,
        backgroundColor:customColor|| 'gray',
        position:'relative',
    }}
    
    title={project}

    >
{
    dispLabel && (
        <span className='project-label'>{project}</span>
    )
}

    </div>
  )
}

export default bar