'use client'
import Link from "next/link";
import Image from "next/image";
import Styles from './header.module.css';
export default function Header({ isScrolled }) {
    return (
        <div className={Styles.headerDiv}>
            {/* <div className={Styles.curved}></div> */}
            <aside className={Styles.sidebar}>
                <div className={Styles.verticalButtons}>
                    <Link href='/selectTags'>Tags</Link>
                    <Link href='/login'>Sign in</Link>
                    <Link href='/signup'>Sign up</Link>
                </div>
            </aside>
            <header className={`${Styles.header} ${isScrolled ? '' : ''}`}>
                <nav className={Styles.navList}>
                    <ul className={Styles.leftNav}>
                        <li>
                            <Link href='/' >
                                {/* <Image src={'/logo.jpg'} alt='logo' className={Styles.logo} width={50} height={50}></Image> */}
                                <h3>LnA</h3>
                            </Link>
                        </li>
                    </ul>
                    <ul className={Styles.rightNav}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/features'>Features</Link></li>
                        <li><Link href='/login'>Sign in</Link></li>
                        <li><Link href='/signup'>Sign up</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};