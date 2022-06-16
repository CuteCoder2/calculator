import React from 'react'
import styles from './Screen.module.css'
function Screen({view}) {
  return (
    <div className={styles.screen}>
        {view}
    </div>
  )
}

export default Screen