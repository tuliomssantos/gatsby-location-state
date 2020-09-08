import React from 'react'
import { Link } from "gatsby"

const header = () => {
    return (
        <div>
            <h1>Panel</h1>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/page2">Page 2</Link></p>
            <p><Link to="/page3">Page 3</Link></p>
        </div>
    )
}

export default header
