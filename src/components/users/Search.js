import React, { useState, useContext } from 'react'
import {GithubContext} from '../../context /github/GithubContext'

const Search = () => {

    //set state for input
    const [text, setText] = useState('')

    //get whole state from context 
    const githubContext = useContext (GithubContext)

    //destructure needed properties from the state
    const {userSearch, clearUser, users} = githubContext; 

    const onInputChange = e => {
        setText(e.target.value)
    }
    
    const onSubmit = e => {
        e.preventDefault(); 

        if(text !== ''){
            userSearch(text)
            setText('')
            return
        }
        
        
    }

        
        return (
            <>
                <form onSubmit={onSubmit} className="form">
                    <input 
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={text}
                        onChange={onInputChange}
                        />
                    <input 
                        type="submit"
                        value="Search"
                        className="btn btn-primary btn-block"  
                        />
                </form>

                {Object.keys(users).length !== 0 && <button 
                    className="btn btn-light btn-block"
                    onClick={clearUser}
                    >Clear</button>  }
                
            </>
            
        )
}

export default Search
