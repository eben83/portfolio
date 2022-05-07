import React, {useEffect, useState} from 'react';

import { Link } from 'react-scroll'

import './nav.xs.scss'

const NavMenu = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  
  const links = [
    {id: 1, name: 'home', link: 'home', offset: 0},
    {id: 2, name: 'skills', link: 'skills', offset: -35},
    {id: 3, name: 'information', link: 'information', offset: -35},
    {id: 4, name: 'experience', link: 'experience', offset: -45},
  ]
  console.log("SCROLL", window.pageYOffset)

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