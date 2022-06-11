import React from 'react'
import styles from "./Buttons.module.css"

function Button({onClick , value , Colors}) {
  return (
    <input style={(Colors) ? {'background-color':Colors} : {'background-color':'blue'}
   } type="button" className={styles.Buttons} onClick={()=>{onClick()}} value={value}  />
       )
}

export default Button