import React, { Component } from 'react';

import { connect } from 'react-redux';
import { receiveValue } from '../../actions';
import style from './Counter.css'

class Counter extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.center}>
                    <div className={style.number}> 
                        {this.props.value}
                    </div>
                </div>   
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onReceive: (value) => {
            dispatch(receiveValue(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);