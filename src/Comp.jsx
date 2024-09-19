import React, { useState } from 'react';
import data1 from './data.json';
import Bar from './bar';

function Comp() {
    const data = data1;
    const [color, setColor] = useState('');
    const [minRange, setMinRange] = useState('');
    const [maxRange, setMaxRange] = useState('');

    const getBarColor = (percentComplete) => {
        if (minRange && maxRange && percentComplete >= minRange && percentComplete <= maxRange) {
            return color;
        }
        return 'gray';
    };

    return (
        <>
            <div className='text-boxes'>
                <input
                    type='text'
                    className='bigBox'
                    placeholder='Enter the color name'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />`
                <input
                    type='number'
                    className='smallBox1'
                    placeholder='Enter min value'
                    value={minRange}
                    onChange={(e) => setMinRange(Number(e.target.value))}
                />
                <input
                    type='number'
                    className='smallBox2'
                    placeholder='Enter max value'
                    value={maxRange}
                    onChange={(e) => setMaxRange(Number(e.target.value))}
                />
            </div>

            {data.map((card, index) => (
                <Bar
                    key={index}
                    project={card.project}
                    percentComplete={card.percentComplete}
                    customColor={getBarColor(Number(card.percentComplete))}
                />
            ))}
        </>
    );
}

export default Comp;
