import React from 'react'
import Manifest from './section-2.json';

const Tokenomics = () => {
    return (
        <div className='flex flex-col p-6 space-y-8 flex-1\'>
            <div className='space-y-2'>
                <div className='text-xl font-bold'>A robust and value-focused ecosystem</div>
                <div className='text-base font-medium'>{Manifest[0].description}</div>
            </div>

            <div className='ring-1 ring-gray-400 rounded p-4'>
                <div className='text-lg font-bold'>Supply</div>
                <div className='text-base font-medium'>{Manifest[0].supply}</div>
            </div>

            <div className='ring-1 ring-gray-400 rounded p-4'>
                <div className='text-lg font-bold'>Transactions</div>
                <div className='text-base font-medium'>{Manifest[0].transaction}</div>
            </div>

            <div className='ring-2 ring-black hover:ring-indigo-600 rounded p-3 px-6 w-max ml-auto'>
                <div className='text-base font-bold'>{"Explore Stagelink"}</div>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className='flex'>
            <div className='flex-1'><Tokenomics /></div>
        </div>
    )
}

export default Home
