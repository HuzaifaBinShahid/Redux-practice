import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {actionCreators} from '../state/index'
import {bindActionCreators} from 'redux'

const Shop = () => {

    const balance = useSelector(state => state.amount)
    const dispatch = useDispatch();
    const {depositMoney , withdrawMoney} = bindActionCreators(actionCreators , dispatch)
    return (
        <div>
            <h1>Deposit / Withdraw</h1>

            <button className="btn btn-primary" onClick={()=>{depositMoney(100)}}>+</button>
            <h3>Change Balance {balance}</h3>
            <button className="btn btn-primary"  onClick={()=>{withdrawMoney(100)}}>-</button>

        </div>
    )
}

export default Shop