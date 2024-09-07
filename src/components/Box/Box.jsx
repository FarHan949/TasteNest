import React from 'react';

// const Box = ({box}) => {

//     const {recipe_name, preparing_time, calories} = box
//     return (
//         <div className='flex flex-col justify-center w-5/6'>
//       <div className="p-4 flex justify-around">
//         <h2 className="text-sm font-semibold text-gray-800">Name</h2>
//         <p className="mt-2 text-sm font-semibold text-gray-800">Time</p>
//         <p className="mt-2 text-sm font-semibold text-gray-800">Calories</p>
//       </div>
//       <div className='p-2 flex justify-between'>
//         <div className='flex justify-between text-sm text-gray-600'>
//         <p>{recipe_name}</p>
//         <p>{preparing_time}</p>
//         <p>{calories}</p>
//         </div>
//         <button className='px-3 py-2 bg-red-500'>Preparing</button>
//       </div>
//         </div>
//     );
// };

// const Box = ({ box }) => {
//     const { recipe_name, preparing_time, calories } = box;
  
//     return (
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
//         {/* Header Section */}
//         <div className="p-4 bg-gray-100 border-b">
//           <div className="flex justify-between">
//             <h2 className="text-lg font-semibold text-gray-800">Name</h2>
//             <p className="text-lg font-semibold text-gray-800">Time</p>
//             <p className="text-lg font-semibold text-gray-800">Calories</p>
//           </div>
//         </div>
  
//         {/* Content Section */}
//         <div className="p-4 flex justify-between items-center">
//           <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
//             <p className="text-center">{recipe_name}</p>
//             <p className="text-center">{preparing_time}</p>
//             <p className="text-center">{calories}</p>
//           </div>
  
//           {/* Button on Right */}
//           <div className="ml-4">
//             <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-300">
//               Preparing
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };


const Box = ({ box , handlerToPreparingRemove}) => {
    const { recipe_name, preparing_time, calories } = box;
  
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Header Section */}
        <div className="p-4 bg-gray-100 border-b">
          <div className="grid grid-cols-3 gap-4">
            <h2 className="text-lg font-semibold text-gray-800 text-center">Name</h2>
            <h2 className="text-lg font-semibold text-gray-800 text-center">Time</h2>
            <h2 className="text-lg font-semibold text-gray-800 text-center">Calories</h2>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="p-4 grid grid-cols-3 gap-4 items-center">
          <p className="text-sm text-gray-600 text-center">{recipe_name}</p>
          <p className="text-sm text-gray-600 text-center">{preparing_time}</p>
          <p className="text-sm text-gray-600 text-center">{calories}</p>
  
          {/* Button */}
          <div className="col-span-3 flex justify-end mt-4">
            <button onClick={()=>handlerToPreparingRemove(box)} 
            className="px-4 py-2 bg-red-500  text-white rounded-lg shadow hover:bg-red-700 transition-colors duration-300">
              Preparing
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  
  

export default Box;