import React from 'react'
import {buyCake} from '../redux/index'
import {connect} from 'react-redux'


const CakeShop = (props) => {
    return (
        <>
            <div>Welcome to Our Cake Shop - {props.numOfCakes}</div>
            <button onClick = {props.buyCake}>Order</button>
        </>
    )


}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeShop);