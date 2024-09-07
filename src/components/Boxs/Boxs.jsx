import React from 'react';
import Box from '../Box/Box';

const Boxs = ({boxs}) => {
    return (
        <div className='border-2 shadow-xl'>
            <h1 className='text-2xl border-b-2'>Want to cook : {boxs.length}</h1>
            {
                boxs.map( box => <Box box={box}></Box>)
            }
        </div>
    );
};

export default Boxs;