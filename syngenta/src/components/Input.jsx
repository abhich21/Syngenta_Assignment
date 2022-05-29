import React, { useState } from 'react'

const Input = ({ handleClick }) => {
    const [number, setNumber] = useState()

    const submitData = (e) => {
        e.preventDefault()
        handleClick(number)
        setNumber('')
    }

    return (
        <div>
            <form className='inputDiv' onSubmit={submitData}>
                <input type="number" value={number} style={{width:"200px"}} onChange={(e) => { setNumber(parseInt(e.target.value)) }} max='5' min='1' placeholder="Enter Number between 1 to 5" />
                <input type="submit" value='Shoot' />
            </form>
        </div>
    )
}

export default Input