import React, { useId } from 'react'
import Memo from './pages/Memo'
import Callback from './pages/Callback/Callback'
import Ref from './pages/Ref'

const App4 = () => {
    const id = useId()
  return (
    <div>
        {/* <Memo/> */}
        {/* <Callback/> */}

        {/* <label htmlFor={`name${id}`}>Name : </label>
        <input id={`name${id}`} type='checkbox' />

        <label htmlFor={`age${id}`}>Age : </label>
        <input id={`age${id}`} type='checkbox' /> */}
<Ref/>
        

    </div>
  )
}

export default App4