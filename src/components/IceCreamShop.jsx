import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

const IceCreamShop = (props) => {
  return (
    <>
    <div>No Of IceCreams- {props.numOfIceCreams}</div>
    <button onClick={props.buyIceCream}>Order</button>
    </>
  )
}


const mapStateToProps =state =>{
    return{
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}

const mapDispatchToProps  = dispatch => {
    return {
        buyIceCream: ()=> dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(IceCreamShop);