import React from 'react';
import cover from '../../assets/img/cover.png'

const Home = () => {
    return (
        <div className='mt-10 flex justify-center items-center h-screen relative'>

                <img className='w-10/12 bg-black brightness-50 rounded-2xl' src={cover} alt="the " />
                <div className='absolute flex-col justify-center items-center pl-40 pr-20 z-10'>
                    <p className='text-white text-md text-center w-11/12'>
                    Welcome to TASTENEST, where culinary creativity meets health-conscious living! Dive into a 
                    world of delectable recipes, innovative cooking tips, and kitchen essentials designed to make your culinary 
                    journey both enjoyable and nutritious. Whether you're a seasoned chef or just starting out, our website offers 
                    a delightful blend of flavors and wellness, ensuring every meal you create is as healthy as it is delicious.
                     Join us and savor the joy of cooking with confidence, knowing that every bite supports a balanced lifestyle. 
                    </p>
                    <div className='flex gap-5 justify-center'>
                    <button className='bg-red-500 px-4 py-2 rounded-2xl mt-8 text-xl hover:bg-red-700 font-bold'>Join Us</button>
                    <button className='bg-transparent text-white px-4 py-2 rounded-2xl mt-8 text-xl font-bold border-2 border-red-400 hover:bg-red-500'>Explore...</button>

                    </div>
                </div>

                
                
        </div>
    );
};

export default Home;