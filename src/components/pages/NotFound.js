import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => (
    <>
        <h1>Not Found</h1>
        <p className="lead">The page your looking for does not exist...</p>

        <Link to="/" className="btn btn-light">
            Back To Search
        </Link>
    </>
)

export default NotFound
