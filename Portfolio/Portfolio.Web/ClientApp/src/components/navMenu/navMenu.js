import React, {useEffect, useState} from 'react';

import { Link } from 'react-scroll'

import './navMenu.xs.css'
import './navMenu.sm.css'
import './navMenu.md.css'
import './navMenu.lg.css'
import './navMenu.xl.css'

const NavMenu = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  
  const links = [
    {id: 1, name: 'Home', link: 'home', offset: 0},
    {id: 2, name: 'Skills', link: 'skills', offset: -35},
    // {id: 3, name: 'About', link: 'about', offset: -65},
    {id: 4, name: 'Facts', link: 'information', offset: -35},
    {id: 5, name: 'Work', link: 'experience', offset: -45},
    // {id: 6, name: 'Projects', link: 'projects', offset: -45},
  ]

  return (
    <>
      <div className={scroll ? "navMenu blue" : "navMenu basic"}>
        <div>
          <ul className='d-flex mt-3'>
            {links && links.map((link) =>
              <li key={link.id}>
                <Link  activeClass='active'
                       to={link.link}
                       spy={true}
                       smooth={true}
                       delay={100}
                       offset={link.offset}
                >
                  {link.name}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavMenu;