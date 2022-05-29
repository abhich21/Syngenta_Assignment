import React, { useState } from 'react'
import Input from './Input';

const color = [
  {
    id: 1,
    color: "#d5e8d4",
    status: false,
  },
  {
    id: 2,
    color: "#ffe6cd",
    status: false,
  },
  {
    id: 3,
    color: "#6a00ff",
    status: false,
  },
  {
    id: 4,
    color: "#d9e8fb",
    status: false,
  },
  {
    id: 5,
    color: "#e2d5e7",
    status: false,
  },
];

const Circle = () => {
    const [data, setData] = useState(color)

    const handleClick = (id) => {
        const changed = data.map((el) => {
            return el.id == id ? { ...el, status: !el.status } : el
        })
        setData(changed)
    }
    return (
        <>
            
            <div className='emptyDiv'>
                <h3>empty Div</h3>
                {data.map((el) => (
                    el.status ? (
                        <div key={el.id} className='circles' style={{ backgroundColor: `${el.color}` }} onClick={()=>handleClick(el.id) }></div>
                    ) : null
                ))}
            </div>
            <div className='circleMain'>
                {data.map((cir) => (
                    cir.status ? null :
                        (
                            <div key={cir.id} className='circles' style={{ backgroundColor: `${cir.color}` }}></div>
                        )
                ))}
            </div>
             <Input handleClick={handleClick} />
        </>
    )
}

export default Circle