import React from 'react';
import Card from '../Card/Card';
import { useEffect, useState } from 'react'
import Boxs from '../Boxs/Boxs';


const Cards = () => {

    const [cards, setCards] = useState([])
    const [boxs , setBoxs] = useState([])
    const [preparing , setPreparing] = useState([])


    const handelToAddBox=(food)=>{

      const exists = boxs.find(fd => fd.recipe_id === food.recipe_id)
      if(exists){
        alert('Its item already exists')
      }
     else{
       const newBox = [...boxs, food]
       setBoxs(newBox)
         }
      }

      const handlerToPreparingRemove = food =>{
        const remove = boxs.filter( fd => fd.recipe_id !== food.recipe_id)
        setBoxs(remove)
      }



     const handlerToPreparing = food =>{
       const AddToPReparing = boxs.find(fd => fd.recipe_id === food.recipe_id)
         if(AddToPReparing){
             alert('already existed')
           }
           else{
               const newPreparing = [...preparing, food]
               setPreparing(newPreparing)
             }
           
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
            <div className='flex w-10/12 gap-8 mt-20'>
                <div className='grid grid-cols-2 gap-4'>
                {
                    cards.map(card => <Card key={card.recipe_id}
                    card={card}
                    handelToAddBox={handelToAddBox}></Card>)
                }
               </div>

                 <div className='w-8/12 mt-4'>
                 <Boxs handlerToPreparingRemove={handlerToPreparingRemove}
                  boxs={boxs}
                  ></Boxs>
                 </div>
            </div>
        </div>
    );
};

export default Cards;