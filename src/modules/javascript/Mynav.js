import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Mynav() {
  return (
    <Fragment>
{/* As a link */}
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
  </div>
</nav>

{/* As a heading */}
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>

    </Fragment>
  )
}
