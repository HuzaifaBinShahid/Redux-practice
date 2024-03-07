import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {

    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <>
            <div>Num of Cakes: {numOfCakes}</div>
            <button onClick={()=> dispatch(buyCake())}>Buy</button>
        </>
    )
}

export default HooksCakeContainer