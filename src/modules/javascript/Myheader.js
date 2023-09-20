import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Myheader() {
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="MyNav">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="Myinfo">Info</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="Mylink">Link</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="Myaction">Action</Link></li>
                        <li><Link className="dropdown-item" to="Anotheraction">Another action</Link></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><Link className="dropdown-item" to="Somethingelse">Something else here</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button classNameName="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    </Fragment>
  )
}
