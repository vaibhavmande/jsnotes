import React from 'react'
import classes from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        Made with{' '}
        <a href="https://nextjs.org/" target="_blank">
          Next.js
        </a>
      </div>
    </footer>
  )
}
