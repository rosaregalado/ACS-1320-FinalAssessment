import { useState } from 'react'
import './Like.css'


function Like() {
  const [likes, updateCount] = useState(0)

  const Increase = () => {
    updateCount(Number(likes) + 1);
  }
  const Decrease = () => {
    updateCount(Number(likes) - 1);
  }

  return(
    <div className='Like'>
      <button onChange={Decrease} type="button">-1</button>

      <h2>{likes}</h2>

      <button onChange={Increase} type="button" >+1</button>
    </div>
  )
}
export default Like