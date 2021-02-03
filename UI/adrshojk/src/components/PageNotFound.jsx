import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (

        <div className='pageNotFound'>
        <Card variant="outlined">
            <CardContent>
           <h2>404-Page Not Found</h2>
           <Link to='/'  >Back to Home</Link>
            </CardContent>
        </Card>
        </div>
    )
}

export default PageNotFound
