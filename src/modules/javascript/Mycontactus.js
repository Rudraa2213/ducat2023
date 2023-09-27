import React, { Fragment } from 'react';
import { mydata } from './mydata';

function Mycontactus() {
    return (
        <Fragment>
            <div className='container m-3 border h1 text-center'>
                Total Data: {mydata.length}
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    {mydata.map((d) => {
                        return (
                            <div className='col-2'>
                                <div class="card text-white bg-success mb-3">
                                    <div class="card-header">{d.name}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">Success card title</h5>
                                        <img src={d.myimg} className='rounded-circle' style={{width:'200px'}} alt='not found'/>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Mycontactus