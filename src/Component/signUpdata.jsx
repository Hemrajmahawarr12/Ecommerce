import React from 'react'
import { useSelector } from 'react-redux'

const SignUpdata = () => {
    const newragister = useSelector((state)=>state.fav.ragister)
    console.log("hemraj",newragister);
  return (
    <div>
      
    </div>
  )
}

export default SignUpdata
