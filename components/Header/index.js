import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Router, {useRouter} from 'next/router'

import {componentStyles} from '../../styles/css.modules'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    const pathname = useRouter().pathname

    useEffect(() => {
        Router.events.on('routeChangeComplete', () => {
            setShowMenu(false)
        })
    }, [])

    return (
        <header className={componentStyles.headerStyles.header}>
            <Head>
                <title>Home | COE-AIML | Centre Of Excellence</title>
            </Head>

            <div className={componentStyles.headerStyles.content}>
                <div className={componentStyles.headerStyles.logo}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/img/ghrce.png"
                                alt="ghrce logo"
                                width={40}
                                height={40}
                            />
                            &nbsp;COE-AIML
                        </a>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/peoples">
                                <a>Peoples</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/theses">
                                <a>Theses</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/publications">
                                <a>Publications</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contactus">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Phone Part */}
                <div
                    className={
                        componentStyles.headerStyles.smallScreenComponent
                    }>
                    <Image
                        onClick={() => setShowMenu(value => !value)}
                        src={showMenu ? '/img/cross.png' : '/img/menu.png'}
                        width={showMenu ? 16 : 20} // 20 for menu icon's size else small since the icon width is diff
                        height={showMenu ? 16 : 20} // 20 for menu icon's size else small since the icon width is diff
                        alt="menu icon"
                        className={componentStyles.headerStyles.hamburgerIcon}
                    />

                    {showMenu ? (
                        <div className={componentStyles.headerStyles.tabsList}>
                            <ul>
                                <li
                                    className={
                                        pathname === '/'
                                            ? componentStyles.headerStyles
                                                  .listItemActive
                                            : null
                                    }>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname === '/projects'
                                            ? componentStyles.headerStyles
                                                  .listItemActive
                                            : null
                                    }>
                                    <Link href="/projects">
                                        <a>Projects</a>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname === '/peoples'
                                            ? componentStyles.headerStyles
                                                  .listItemActive
                                            : null
                                    }>
                                    <Link href="/peoples">
                                        <a>Peoples</a>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname === '/theses'
                                            ? componentStyles.headerStyles
                                                  .listItemActive
                                            : null
                                    }>
                                    <Link href="/theses">
                                        <a>Theses</a>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname === '/publications'
                                            ? componentStyles.headerStyles
                                                  .listItemActive
                                            : null
                                    }>
                                    <Link href="/publications">
                                        <a>Publications</a>
                                    </Link>
                                </li>
                                <li
                                    className={
                                        pathname === '/contactus'
                                            ? componentStyles.headerStyles
                                                  .listItemActive
                                            : null
                                    }>
                                    <Link href="/contactus">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </header>
    )
}
