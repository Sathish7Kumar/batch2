// lifecycle - is only for class component.

import React from 'react'
import { Link } from 'react-router-dom';

class Lifecycle extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
        console.log("Component being Construct");
    }

    componentDidMount(){
        console.log("Component is mounted");
    }

    componentDidUpdate(){
        console.log("Component updated & re-rendered");
    }

    // componentWillUnmount(){
    //     console.log("Component Unmount");
    // }



    increment = ()=>{
        this.setState((val)=>({
            count : val.count + 1
        }))
    }

    decrement = () =>{
        this.setState({
            count : this.state.count-1
        })
    }

    render(){
        console.log("Component rendered ");
        return(
            <> 
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>ADD</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
            <Link to='/effect'>Click here to Effect</Link>
            </>
        )
    }
}

export default Lifecycle

