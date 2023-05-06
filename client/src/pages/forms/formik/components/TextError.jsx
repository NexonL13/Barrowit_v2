import React from 'react'

const TextError = (props) => {
  return (
    <>
    <label className="block absolute text-xs font-medium text-red-500 italic">{`* ${props.children}.`}</label>
    </>
  )
}

export default TextError