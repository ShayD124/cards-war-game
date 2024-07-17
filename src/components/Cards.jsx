import React from 'react'


export default function Cards({ value }) {
  return (
    <div className="w-24 h-32 border border-gray-300 rounded-lg flex items-center justify-center shadow-md">
      <span className="text-2xl font-bold">{value}</span>
    </div>
  )
}
