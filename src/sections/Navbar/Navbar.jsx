import React, { useEffect, useRef } from 'react'
import { header } from '../../constants/constants'
import { menu, x, bulb, bulb2 } from '../../assets'
import './Navbar.css'

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > navbarHeight) {
        navbarRef.current.classList.add("active");
        document.getElementById("lol").src = bulb2;
      } else {
        navbarRef.current.classList.remove("active");
        document.getElementById("lol").src = bulb;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleBars = () => {
      let bars = document.querySelector("#bar");
      let nav = document.querySelector(".navigation");
      bars.onclick = function(){
        if(nav.style.right === "0%"){
          nav.style.right = "-50%";
          bars.src = menu;
        } else {
          nav.style.right = "0%";
          bars.src = x;
        }
        nav.classList.toggle("new");
      };
    };
    handleBars();
  }, []);

  return (
    <header id="header" ref={navbarRef}>
      <div className='logo'>
        <a href="#"><img src={header.logo.img} id={header.logo.id} alt="" />furniKmer</a>
      </div>
      <ul className='navigation'>
        {
          header.navLinks.map((link, index) => (
            <li key={index}><a href={link.href} className={index === 0 ? 'active' : ''}>{link.link}</a></li>
          ))
        }
      </ul>
      <div className='bars'>
        <img src={header.bars.img} id={header.bars.id} alt="" />
      </div>
    </header>
  )
}

export default Navbar
