import React from "react"

import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import mail from "../assets/mail.png"

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__copyright">&copy;icodeUI 2020</small>
      <nav className="footer__nav">
        <a
          className="footer__link"
          href="https://github.com/Kaleidics"
          target="_blank"
          rel="noopener noreferrer"
          title="Eddie Chu Github"
        >
          <img src={github} alt="Eddie Chu Github" />
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/eddiechu-dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="Eddie Chu LinkedIn"
        >
          <img src={linkedin} alt="Eddie Chu LinkedIn" />
        </a>
        <a
          className="footer__link"
          href="mailto:contact@eddiechu.dev"
          target="_top"
          title="contact@eddiechu.dev"
        >
          <img src={mail} alt="contact@eddiechu.dev" />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
