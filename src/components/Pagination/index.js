import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

function Pagination( props ) {
  const { total } = props
  const pages = total / 20

  const page = () => {
    const links = []
    for (let i = 0; i < pages; i++) {
      let current = i + 1
      links.push( <NavLink activeClassName={ styles.active } key={ current } to={`/page/${ current }`}>{ current }</NavLink> )
    }
    return links
  }

  return (
    <div className={ styles.pagination }>
      <NavLink to={'/page/1'}> &lt; </NavLink>
      { page() }
      <NavLink to={`/page/${pages}`}> &gt; </NavLink>
    </div>
  )
}

export default Pagination
