import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { receiveValue } from '../../actions';
import style from './Counter.css'

import { Spinner } from '../';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        let getNumber = () => {
            axios.get('/counter').then(response => {
                this.props.onReceive(response.data.number);
                setTimeout(getNumber, 1000 * 5);
            });
        };

        setTimeout(getNumber, 1000);
    }

    onClick(){
        axios.post('/counter').then(response => {
            this.props.onReceive(response.data.number);
        });
    }
    

    render() {
        const number = (
            <div className={style.number} ref={ref => {this.element = ref}}> 
                {this.props.value}
            </div>
        );

        const spinner = (
            <Spinner />
        );

        return (
            <div className={style.container} onClick={this.onClick}>
                <div className={style.center}>
                    { (this.props.value == -1) ? spinner : number }
                </div>   
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        this.element.classList.remove(style.bounce);
        this.element.offsetWidth;
        this.element.classList.add(style.bounce);
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