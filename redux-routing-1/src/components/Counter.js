import React ,{Component} from "react"

class Counter extends Component{

	render(){
		
		const {counter,increment,decrement,reset}=this.props;

		return(

			<div className="App">
				<div>{counter}</div>
				<div>
					<button onClick={increment}>INCREMENT BY 1</button>
				</div>

				<div>
					<button onClick={decrement}>DECREMENT BY </button>
				</div>

				<button onClick={reset}>RESET</button>

			</div>
		)
	}
}

export default Counter;