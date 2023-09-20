import React, { Fragment, useState } from 'react'

export default function Myinfo() {
    const [sv,sf]=useState("Less Info")
    return (
    <Fragment>
    <div className='fs-2 text-center border container-fluid'>Myinfo</div>
    <div className='text-center'>
    <p>
        <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" onClick={()=>{
            sf("More Info")
        }}>
            {sv}
        </button>
        </p>
        <div style={{minHeight:'120px',marginLeft:'30vw'}}>
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
            <div class="card card-body" style={{width:'600px'}}>
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
            </div>
        </div>
        </div>
        </div>
    </Fragment>
  )
}
