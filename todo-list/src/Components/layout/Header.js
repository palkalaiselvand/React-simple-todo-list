import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
    return (
        <div style={headerStyle}>
            <h1>Todo List</h1>
            <p>
                <Link style={linkStyle} to="/">Home</Link> | 
                <Link style={linkStyle} to="/about">About</Link>
            </p>
        </div>
    )
}
 const headerStyle={
     background:'#333',
     color:'#fff',
     padding:'10px',
     textAlign:'center'
 }
const linkStyle={
    color:'#fff',
}