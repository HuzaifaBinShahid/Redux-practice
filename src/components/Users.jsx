import React from 'react'
import { fetchusers } from '../redux'
import {connect} from 'react-redux'
import { useEffect } from 'react'

const Users = ({userData , fetchusers}) => {
    useEffect(()=>{
       fetchusers()
       // eslint-disable-next-line
    }, [])
  return userData.loading ? (
    <div>
          LOADING
    </div>
  ): userData.error ? (
    <h2>{userData.error}</h2>
  ): (
    <div>
        <h2>Users List</h2>
        <div>
            {userData &&
            userData.users &&
            userData.users.map(user => <p>{user.name}</p>)
            }
        </div>
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
    fetchusers: ()=> dispatch(fetchusers())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Users)