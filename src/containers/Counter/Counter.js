import React, { Component } from 'react';
import { connect } from 'react-redux';

import {INCREMENT, DECREMENT, ADD_FIVE, SUBTRACT_FIVE} from '../../store/ActionTypes';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFiveCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: INCREMENT}),
        onDecrementCounter: () => dispatch({type: DECREMENT}),
        onAddFiveCounter: () => dispatch({type: ADD_FIVE, amount: 5}),
        onSubtractFiveCounter: () => dispatch({type: SUBTRACT_FIVE, amount: 5})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);