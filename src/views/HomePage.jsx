import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function HomePage({ setPlayer }) {

    const [name,setName] = useState("")
    const navigate = useNavigate()

    function isNameValid(){
        return name != ""
    }

    function createPlayer(){
        return{
            name: name
        }
    }

    function startGame(){
        if(!isNameValid()){
            alert("Hi user, you must provide a name!")
            return
        }

        const player = createPlayer()
        setPlayer(player)
        navigate('/game')
    }


  return (
    <div className='flex flex-col items-center justify-center overflow-hidden'>
        <h1 className='text-4xl font-bold mb-6'>Card War Game</h1>
        <div className='flex items-center mb-4'>
            <label htmlFor="input" className='mr-2'>Name:</label>
            <input 
                type="text" 
                onChange={(e)=> setName(e.target.value)}
                placeholder='Enter name...'
                className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 transition duration-200'
            />
        </div>
        <button
            onClick={startGame}
            className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300'
        >
            Start Game !
        </button>
    </div>
  )
}
