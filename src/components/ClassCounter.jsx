import React from "react";

class ClassCounter extends React.Component {
    // const [count, setCount] = useState(0)
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    
    increment() {
        this.setState({count: this.state.count + 1});
    }
    decrement() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <h1>Колличество лайков: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Dicrement</button>    
            </div>
        )
    }
}

export default ClassCounter