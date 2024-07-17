import React, { useContext } from 'react'
import { playerContext } from '../context/playerContext'
import { computerContext } from '../context/computerContext'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function ScorePage() {

  const {player, playerPoints} = useContext(playerContext)
  const {computerPoints} = useContext(computerContext)

  const { id } = useParams()


  return (
    <div className='flex flex-col items-center justify-center p-4'>
        <h1 className='text-4xl font-bold mb-6'>Game Over</h1>
        <h2 className='text-2xl font-semibold mb-4'>Final Scores</h2>
      <div className='mb-4'>
        <p className='text-lg'>Player Points: <span className='font-bold'>{playerPoints}</span></p>
        <p className='text-lg'>Computer Points: <span className='font-bold'>{computerPoints}</span></p>
      </div>  
      <h2 className='text-2xl font-semibold mb-4'>Winner</h2>
      <p className='text-xl font-bold mb-6'>{player.winner}</p>
      <Link to={'/game'}>
        <button className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300'>Restart game</button>
      </Link>
    </div>
  )
}
