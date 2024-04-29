// state - state is only for class component.

// statefull component - class component
// stateless  component - function component

// state in class component

// import React, { Component } from 'react'
//  class State extends Component {
//     state = {
//         count : 0,
//         myname : "Sachin",
//         isplayer : true
//     }
//     handleIncrement = () =>{
//        this.setState({
//         count : this.state.count +1
//        })
//     }
//     handleDecrement = () =>{
//         if(this.state.count > 0){
//             this.setState({
//                 count : this.state.count -1
//                })
//         }
//      }
//      handleName = () =>{
//         this.setState({
//             myname : "MSD"
//         })
//      }
//   render() {
//     console.log("re-render");
//     return (
//       <>
// <h4>State in class component </h4>
//       <h1>Count : {this.state.count}</h1>
//       <button onClick={this.handleIncrement}>Increment</button>
//       <button onClick={this.handleDecrement}>Decrement</button>
//       <h1>Name : {this.state.myname}</h1>
//       <button onClick={this.handleName}>Change Name</button>
//       </>
//     )
//   }
// }
// export default State

// state in function component

// we can use state in react later version that is react-hooks
// useState - hook

import { useState } from "react";
const State = () => {
  const [count, setcount] = useState(0);
  // const handleCount = () =>{
  //     setcount(count+1)
  // }
  return (
    <>
      <h4>State using React-Hooks</h4>
      <h1>Count : {count}</h1>
      {/* <button onClick={handleCount}>Increment</button> */}
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          if (count > 0) {
            setcount(count - 1);
          }
        }}
      >
        Decrement
      </button>
    </>
  );
};
export default State;


