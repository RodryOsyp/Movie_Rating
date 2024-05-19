import React from 'react'
import styles from "./Button.module.css"

const Button = ({title, variant, icon}) => {
const buttonstyle = variant==="primary"?styles.primary:styles.secondary
    return (
    <div>
        <button className={buttonstyle}>{icon}{title}</button>
    </div>
  )
}

export default Button