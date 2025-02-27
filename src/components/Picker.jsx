import React, { useState } from 'react'

const Picker = () => {
    const [color, setColor] = useState("#ffffff");
    const handleChange =(e)=>{
        setColor(e.target.value)
    }
    return (
        <div className="min-h-[30rem] w-[30rem] flex items-center flex-col justify-center bg-gray-500 rounded-md">

            <div 
                className="h-[10rem] w-[15rem] flex flex-col items-center justify-center rounded-md "
                style={{backgroundColor:color}}
            >
                <h1 className='text-xl'>Color Picker</h1>
                <p className='text-xl'>Select Color:{color} </p>
            </div>
            <input type="color" onChange={handleChange} value={color} placeholder='click me'/>

        </div>
    );
}

export default Picker;