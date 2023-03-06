import {connect} from "react-redux";

const CounterOutput = (props) => {
    return (
        <h3>Current counter: {props.count}</h3>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.value
    }
}



export default connect(mapStateToProps, null)(CounterOutput)