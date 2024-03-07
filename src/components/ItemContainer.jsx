import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = (props) => {
  return (
    <>
      <div>Item - {props.item}</div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {

  const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIceCreams
  return {
    item: itemState
  }
}

const mapDisptachtToProps = (dispatch, ownProps) => {

  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

  return {
    dispatchFunction
  }
}



export default connect(mapStateToProps , mapDisptachtToProps)(ItemContainer)