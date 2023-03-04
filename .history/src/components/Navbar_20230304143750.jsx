import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { styles } from '../styles';
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link to="/"
              className='flex items-center gap-2 '
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
              >
                <img 
                  src={logo} 
                  alt='logo' 
                  className='w-36 h-36 object-contain' 
                  />
                <p 
                  className='text-white text-[18px] font-bold cursor-pointer'
                  >Mike Woods
                    <span
                      className='sm:block hidden'
                      >
                        | Web3 Developer
                    </span>
                </p>
          </Link>
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((link) => (
                    <li 
                      key={link.id}
                      className={`${
                        active === link.title 
                        ? "text-white" 
                        : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer`}
                      onClick={() => setActive(link.title)}
                      > 
                    <a href={`#${link.id}`}> {link.title}</a>
                    </li>

                ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img src={menu}
                   alt="menu"
              />

            </div>
        </div>
      </nav>
  )
}

export default Navbar