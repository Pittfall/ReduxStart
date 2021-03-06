import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, add_five, subtract_five, store_results, delete_results } from '../../store/actions/index';
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
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                <ul>
                  {this.props.results.map((result, i) => {
                    return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                  })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterReducer.counter,
        results: state.resultReducer.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddFiveCounter: () => dispatch(add_five(5)),
        onSubtractFiveCounter: () => dispatch(subtract_five(5)),
        onStoreResult: (result) => dispatch(store_results(result)),
        onDeleteResult: (idToDelete) => dispatch(delete_results(idToDelete))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);