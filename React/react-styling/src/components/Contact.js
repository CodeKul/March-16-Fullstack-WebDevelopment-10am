import React from 'react'

import styles from "./contact.module.css"

export default function Contact() {
    return (
        <div>
            <h1 className={styles.contact}>Contact</h1>

            <p id={styles.name}>Name : Sanket Bhosale</p>
            <p>Email - sanketbhosale.codekul@gmail.com</p>
        </div>
    )
}
