import React,{useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import {GithubContext} from '../../context /github/GithubContext'

const Users = () => {
    const githubContext = useContext(GithubContext);

    const {loading, users} = githubContext

    return(
       loading ? <Spinner /> :  
            <div style={userStyle}>
                {users.map(user => (
                <UserItem 
                    key={user.id} 
                    user={user} />
                ))}
            </div>   
        )
}

   

//styles applied to the parent div
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
    width: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap"

}


export default Users
