import React from 'react'

const Title = ({text}) => {
  return (
    <>
        <h1 className="px-4 text-6xl md:text-8xl text-center font-extrabold text-transparent lg:text-8xl bg-clip-text bg-gradient-to-r from-green-100 to-cyan-500">{text}</h1>
    </>
  )
}

export default Title