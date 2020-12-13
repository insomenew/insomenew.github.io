import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

const ListLink = props => ( 
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link> 
    </li>
)
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
        <div>
                <ul style={{ listStyle: `none`}}> 
                    <ListLink to="/blog/">Blog</ListLink>
                    <ListLink to="/book/">Book</ListLink>
                    <ListLink to="/bible/">Bible</ListLink> 
                    <ListLink to="/math/">Math</ListLink> 
                </ul>
        </div>
      <main>{children}</main>
      <footer>
      <Bio/>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
