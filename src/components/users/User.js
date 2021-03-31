import React, {useEffect, useContext} from 'react'
import {GithubContext} from '../../context /github/GithubContext'
import Repos from '../repos/Repos'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'


const User = ({match}) => {

    const githubContext = useContext(GithubContext);

    const {getUser,getUserRepos,user,loading,repos} = githubContext

        //get params as soon as component mounts 
        useEffect(()=>{
            getUser(match.params.login)
            getUserRepos(match.params.login)

        //eslint-disable-next-line 
        },[])
                      
        //destructure all properties from user 
        const {
            name, 
            login,
            company,
            avatar_url,
            location,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user
        

        if(loading)return <Spinner />
        return (
            <>
                <Link to="/" className="btn btn-light">
                    Back To Search
                </Link>

                Hireable:{" "}
                {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}

                <div className="card grid-2">
                    <div className="all-center">
                        <img 
                            src={avatar_url}
                            alt={`user: ${name}`} 
                            className="round-img"
                            style={{width: "150px"}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>}
                        <a 
                            href={html_url}
                            className="btn btn-dark my-1">Visit Github Profile</a>
                        <ul>
                            <li>{login && <>
                                <strong>Username: </strong> {login}
                            </>}</li>
                            <li>{company && <>
                                <strong>Company: </strong> {login}
                            </>}</li>
                            <li>{blog && <>
                                <strong>Website: </strong> {login}
                            </>}</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
                <Repos repos={repos} />
            </>
        );
}


export default User;
