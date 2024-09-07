import React from 'react';
import { IoMdTime } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";


const Card = ({card, handelToAddBox}) => {

const  {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = card  

    return (
        <div className='mt-4 my-10 border-2 shadow-2xl rounded-2xl'>
            <div className='flex flex-col items-center border-b-2 gap-4'>
                <img className='w-52 p-2 rounded-2xl' src={recipe_image} alt="" />
                <h1 className='text-2xl font-bold px-2'>{recipe_name}</h1>
                <p className='text-sm px-2'>{short_description}</p>
            </div>

            {/* <div className='mt-4'>
                <p className='text-xl font-bold'>Ingredients : {ingredients.length}</p>
                      {
                        ingredients.map( ingredient => <li>{ingredient}</li>)
                      }
            </div> */}

            <div className='mt-4 border-b-2'>
                 <p className='text-xl font-bold mb-2'>Ingredients: {ingredients.length}</p>
                 <ul className='list-disc list-inside'>
                       {ingredients.map((ingredient, index) => (
                    <li key={index} className='text-sm'>{ingredient}</li>
                       ))}
                 </ul>
            </div>

            <div className='flex p-4 gap-8'>
                <div className='flex gap-2 justify-center items-center'>
                    <IoMdTime></IoMdTime>
                    <p>{preparing_time}</p>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <FaFireAlt></FaFireAlt>
                    <p>{calories}</p>
                </div>
            </div>
            <button onClick={()=> handelToAddBox(card)}
             className='bg-red-500 px-4 py-2 rounded-2xl mt-8 text-xl hover:bg-red-700 font-bold mb-5'>Want to cook</button>
        </div>
    );
};

export default Card;