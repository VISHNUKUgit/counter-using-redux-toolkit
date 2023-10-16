import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/count'
function Counter() {
  const [amount,setAmount] = useState(0)
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()
  const handleIncrement=()=>{
    if(amount==""){
      alert("enter a number")
    }
    else{
      // dispatch(incrementByAmount(amount))
      dispatch(incrementByAmount(Number(amount)))

    }

  }
  return (
    <div style={{height:"50vh"}}  className='w-100 d-flex justify-content-center align-items-center'>
        
        <div className=' d-flex justify-content-center align-items-center border  rounded p-5 w-50 flex-column'>
        <h1 style={{fontSize:"100px"}} >{count}</h1>
        <div>
            <button className='btn btn-warning  ' onClick={()=>dispatch(decrement())}>Decrement</button>
            <button className='btn btn-danger mx-2 ' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-success ' onClick={()=>dispatch(increment())}>increment</button>
        </div>
        <div className='d-flex my-2 '>
          <input type='number'  className='form-control' placeholder='enter a number' onChange={(e)=>setAmount(e.target.value)}  />
          <button className='btn btn-primary mx-2' onClick={handleIncrement}> increment by number</button>
        </div>
        </div>
        
    </div>
  )
}

export default Counter