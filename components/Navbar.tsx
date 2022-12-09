
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";


const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about' 
  },
  {
    text: 'Contact',
    href: '/contact' 
  },
  {
    text: 'Pricing',
    href: '/pricing' 
  }
];

export const Navbar = () => {
/*   return (
    <nav className = { styles['menu-container']} >
        <ActiveLink text="Home" href="/"></ActiveLink>
        <ActiveLink text="About" href="/about"></ActiveLink>
        <ActiveLink text="Contact" href="/contact"></ActiveLink>
        <ActiveLink text="Pricing" href="/pricing"></ActiveLink>
    </nav>
  ) */
  
  return (
    <nav className = { styles['menu-container']} >
        {
          menuItems.map( ({ href, text }) => 
           <ActiveLink key={ href } text={ text } href={ href }></ActiveLink>
          )
        }
    </nav>
  )

}
