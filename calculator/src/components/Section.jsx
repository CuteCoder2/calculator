import React from 'react'
import styles from './Section.module.css'

function Section({children,style1}) {
  return (
    <div className={`${((style1) ? styles.section1 : styles.section2)} ${styles.section}`}>{children}</div>
  )
}

export default Section