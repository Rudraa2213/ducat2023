import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Myaxios() {
    const [svariable, sfunc]=useState([])
    
        const myapi= ()=>{
            axios.get('https://jsonplaceholder.typicode.com/todos').then((d)=>{
                console.log(d.data);
                sfunc(d.data);
            })
        }
  return (
    <div>
    <button type='button' onClick={myapi}>get data</button>
    <div className='container'>
        <div className='row'>
            
                {svariable.map((d)=>{
                    return(
                        <div className='col-md-3'>
                        <div className="card">
                        <div className="card-body">
                             <h2 className="card-title">{d.id}</h2>
                          <h5 className="card-title">{d.title}</h5>
                          <p className="card-text">{d.userId}</p>
                          <Link to="#" className="btn btn-primary">{d.completed===true ? "Yes" :"No"}</Link>
                        </div>
                      </div> 
                      </div>

                    )
                })}


            
        </div>    
    </div>    
    
    
</div>
  )
}

export default Myaxios