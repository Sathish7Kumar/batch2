import  { useState } from 'react'

const useCounter = () => {

    const initialValue = 0

    const [count, setcount] = useState(initialValue)

    const increment = () => {
        setcount((preValue) => preValue+1)
    }

    const decrement = () => {
        setcount((preValue) => preValue > 0 ? preValue-1 : preValue )
    }

    const reset = () => {
        setcount(initialValue)
    }

    return {count,increment,decrement,reset}

}

export default useCounter