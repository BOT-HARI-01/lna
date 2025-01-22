"use client";
import Link from "next/link";
import Styles from "@/components/sidebar.module.css";
import { signOut } from "next-auth/react";

const Sidebar = ({isOpen,setIsOpen, session}) => {

  console.log("isOpen val at sidebar.js",isOpen);
  // const [isOpen, setIsOpen] = useState(true);
  // const [isMobile,setIsMobile] = useState(false);
  // useEffect(()=>{
  //   const resize = () =>{
  //     if (typeof setIsOpen === 'function') {
  //       if(window.innerWidth <= 768){
  //         // setIsMobile(true);
  //         setIsOpen(false);
  //       }else{
  //         // setIsMobile(false);
  //         setIsOpen(true);
  //       }
  //     }
  //   }
  //   resize();
  //   window.addEventListener("resize",resize);
  //   return() =>window.removeEventListener("resize",resize);
  // },[]);
  return (
    <div className={isOpen ? Styles.sidebar : Styles.sidebarClosed}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={Styles.toggleButton}
      >
        {isOpen ? "<" : ">"}
      </button>
      <ul className={Styles.navList}>
        <li>
          <Link href="/">
            <i className="fa fa-home" aria-hidden="true"></i>
            {isOpen && <span className={Styles.linkText}>Home</span>}
          </Link>
        </li>
        <li>
          <Link href="/about">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            {isOpen && <span className={Styles.linkText}>About</span>}
          </Link>
        </li>
        <li>
          <Link href="/services">
            <i className="fa fa-cogs" aria-hidden="true"></i>
            {isOpen && <span className={Styles.linkText}>Services</span>}
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            {isOpen && <span className={Styles.linkText}>Contact</span>}
          </Link>
        </li>
        <li>
          <Link href="/selectTags">
            <i className="fa fa-tags" aria-hidden="true"></i>
            {isOpen && <span className={Styles.linkText}>Tags</span>}
          </Link>
        </li>
        {!session ? (
          <div>
            <li>
              <Link href="/login">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                {isOpen && <span className={Styles.linkText}>Sign In</span>}
              </Link>
            </li>
            <li>
            <Link href="/signup">
              <i className="fa fa-sign-in" aria-hidden="true"></i>
              {isOpen && <span className={Styles.linkText}>Sign Up</span>}
            </Link>
          </li>
          </div>
        ) : (
          <li>
              <div onClick={() => signOut()} style={{ cursor: 'pointer' }}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
                {isOpen && <span className={Styles.linkText}>Sign Out</span>}
              </div>

            <p style={{ marginTop: '100px', }}>{session.user.name}</p>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Sidebar;
