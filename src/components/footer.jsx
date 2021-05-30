import * as React from "react"
import Logo from "../icons/logo"
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={copyright}>
        Copyright &copy; Notes Flower Shop, Philippines,{" "}
        {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
