import React from 'react'
import style from './Cart.module.css'

function Cart({children}) {
  return (
    <div className={style.cart}>{children}</div>
  )
}

export default Cart