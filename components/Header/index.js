import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import {componentStyles} from '../../styles/css.modules'

export default function Header() {
    return (
        <header className={componentStyles.headerStyles.header}>
            <Head>
                <title>Home | COE-AIML | Centre Of Excellence</title>
            </Head>

            <div className={componentStyles.headerStyles.content}>
                <div className={componentStyles.headerStyles.logo}>
                    <a>
                        <Image
                            src="/img/ghrce.png"
                            alt="ghrce logo"
                            width={40}
                            height={40}
                        />
                        &nbsp;COE-AIML
                    </a>
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
                            <Link href="/thesis">
                                <a>Thesis</a>
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
            </div>
        </header>
    )
}
