import React from 'react'
import styles from "./Grid.module.css"
function Grid({children}) {
  return (
    <div className={styles.grid}>{children}</div>
  )
}

export default Grid