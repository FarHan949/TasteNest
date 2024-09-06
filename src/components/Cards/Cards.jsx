import React from 'react';
import Card from '../Card/Card';
import { useEffect, useState } from 'react'
import Box from '../Box/Box';


const Cards = () => {

    const [cards, setCards] = useState([])
    const [boxs , setBoxs] = useState([])


    const handelToAddBox=(card)=>{
      const newBox = [...boxs , card]
      setBoxs(newBox)
    }


    useEffect(()=>{
      fetch('kitchen.json')
      .then( res => res.json())
      .then( data => setCards(data))
    },[])

    return (
        <div>
            <div className='px-32 mt-10'>
                <h1 className='text-4xl font-bold'>Our Recipe</h1>
                <p className='text-sm text-center mt-4'>
                 minus repellat quaerat maxime ratione animi similique possimus itaque iusto consequuntur. 
                 Eos a quidem voluptatem ducimus modi, praesentium nobis perferendis tenetur vel est asperiores 
                  repellat consectetur, nemo ullam. Deserunt quasi necessitatibus quia porro?
                </p>
            </div>
            <div className='flex w-4/6 gap-8'>
                <div className='grid grid-cols-2 gap-4 mt-24'>
                {
                    cards.map(card => <Card key={card.recipe_id}
                    card={card}
                    handelToAddBox={handelToAddBox}></Card>)
                }
               </div>

                 <div className='mt-24'>
                 <Box boxs={boxs}></Box>
                 </div>
            </div>
        </div>
    );
};

export default Cards;