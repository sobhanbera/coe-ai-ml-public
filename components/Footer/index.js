import React from 'react'
import Link from 'next/link'

import {DEVELOPER_PORTFOLIO_WEBSITE} from '../../constants'
import {componentStyles} from '../../styles/css.modules'
import MainSection from '../MainSection'

import MailSVG from '../../public/svgs/mail'
import PhoneSVG from '../../public/svgs/phone'
import GitHubSVG from '../../public/svgs/github'
import InstagramSVG from '../../public/svgs/instagram'
import WebsiteSVG from '../../public/svgs/website'

const ContactInfo = [
    {
        svg: MailSVG,
        data: 'sobhanbera258@gmail.com',
        link: 'mailto:sobhanbera258@gmail.com',
    },
    {
        svg: PhoneSVG,
        data: '+91 7400-631560',
        link: 'tel:+917400631560',
    },
]

const SocialMediaInfo = [
    {
        svg: GitHubSVG,
        username: 'sobhanbera',
        link: 'https://github.com/sobhanbera',
    },
    {
        svg: InstagramSVG,
        username: 'sobhanbera_',
        link: 'https://www.instagram.com/sobhanbera_',
    },
]

const DeveloperInfo = [
    {
        svg: GitHubSVG,
        username: 'sobhanbera',
        link: 'https://github.com/sobhanbera',
    },
    {
        svg: WebsiteSVG,
        username: 'portfolio website',
        link: 'https://sobhanbera.github.io',
    },

    {
        svg: InstagramSVG,
        username: 'sobhanbera_',
        link: 'https://www.instagram.com/sobhanbera_',
    },
]

export default function Footer() {
    return (
        <footer className={componentStyles.footerStyles.footer}>
            <MainSection>
                <div className={componentStyles.footerStyles.footerStarts}>
                    <div
                        className={
                            componentStyles.footerStyles.footerSeperateSection
                        }>
                        <p className={componentStyles.footerStyles.heading}>
                            Address Info
                        </p>
                        <p className={componentStyles.footerStyles.details}>
                            Escola Politécnica da UFBA Rua Prof. Aristides
                            Novis, nº 02, 2º andar, CTAI Salvador - Bahia -
                            Brazil. CEP: 40210-630
                        </p>
                    </div>

                    <div
                        className={
                            componentStyles.footerStyles.footerSeperateSection
                        }>
                        <p className={componentStyles.footerStyles.heading}>
                            Contact Info
                        </p>

                        <div
                            className={
                                componentStyles.footerStyles.contactArea
                            }>
                            {ContactInfo.map(Contact => {
                                return (
                                    <div
                                        className={
                                            componentStyles.footerStyles
                                                .contactItem
                                        }
                                        key={Contact.link}>
                                        <Link href={Contact.link}>
                                            <a>
                                                <Contact.svg />
                                                <p>{Contact.data}</p>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>

                        <div
                            className={
                                componentStyles.footerStyles.contactSocialArea
                            }>
                            {SocialMediaInfo.map(SocialMedia => {
                                return (
                                    <div
                                        className={
                                            componentStyles.footerStyles
                                                .socialMediaItem
                                        }
                                        key={SocialMedia.link}>
                                        <Link href={SocialMedia.link}>
                                            <a>
                                                <SocialMedia.svg />
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div
                        className={
                            componentStyles.footerStyles.footerSeperateSection
                        }>
                        <p className={componentStyles.footerStyles.heading}>
                            {"Developer's Details"}
                        </p>

                        <div
                            className={
                                componentStyles.footerStyles.contactArea
                            }>
                            {DeveloperInfo.map(DeveloperData => {
                                return (
                                    <div
                                        className={
                                            componentStyles.footerStyles
                                                .contactItem
                                        }
                                        key={DeveloperData.link}>
                                        <Link href={DeveloperData.link}>
                                            <a>
                                                <DeveloperData.svg />
                                                <p>{DeveloperData.username}</p>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className={componentStyles.footerStyles.websiteDetails}>
                    <p>COE-AIML GHRCE. All Rights Reserved.</p>
                    <p>
                        {'Website built by '}
                        <a href={DEVELOPER_PORTFOLIO_WEBSITE}>
                            <b>Sobhan Bera</b>
                        </a>
                    </p>
                </div>
            </MainSection>
        </footer>
    )
}
