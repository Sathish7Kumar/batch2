// function  component props access

// import React from 'react'

// const FuncProps = (props) => {
//   return (
//     <>
//     <h1>You have Ordered : {props.order} </h1>
//     </>
//   )
// }

// export default FuncProps



// import React from 'react'

// const FuncProps = (val) => {
//   return (
//     <>
//     <h1>You have Ordered : {val.order} </h1>
//     </>
//   )
// }

// export default FuncProps


import React from 'react'

const FuncProps = ({order,price}) => {
  return (
    <>
    <h4>Function Props</h4>
    <h1>You have Ordered : {order} at price of rs: {price} </h1>
    </>
  )
}

export default FuncProps