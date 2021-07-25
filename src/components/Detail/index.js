import React from 'react'

import styles from './styles.module.scss'

function Detail() {
  return (
    <div className={ styles.detail }>
      { loading ?
        <div>Loading...</div> :
        <div>Detail</div>
      }
    </div>
  )
}

export default Detail
