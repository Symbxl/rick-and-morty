import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/docs">Docs</NavLink>
      </li>
      <li>
        <NavLink to="/episodes">Episodes</NavLink>
      </li>
      <li>
        <NavLink to="/characters">Characters</NavLink>
      </li>
    </ul>
  )
}

export default Nav