import Image from 'next/image'
import Link from 'next/link'

import Button from '../components/Button'
import MainSection from '../components/MainSection'

import {pageStyles} from '../styles/css.modules'

import BuildingSVG from '../public/svgs/building.js'
import BiometricSVG from '../public/svgs/biometric'
import MicroscopeSVG from '../public/svgs/microscope'
import RobotSVG from '../public/svgs/robot'

const RecentNews = [
    {
        date: 'Sep 16, 2021',
        news: 'Papers in the International Symposium on Medical Information Processing and Analysis (SIPAIM)',
        link: '',
    },
    {
        date: 'Sep 16, 2021',
        news: 'Paper in Conference on Graphics, Patterns and Images (SIBGRAPI)',
        link: '',
    },
    {
        date: 'May 28, 2021',
        news: 'Paper in IEEE Intelligent Vehicles Symposium',
        link: '',
    },
]

const ReseachFields = [
    {
        svg: BuildingSVG,
        title: 'Smart Cities',
        link: '',
    },
    {
        svg: BiometricSVG,
        title: 'Biometric System',
        link: '',
    },
    {
        svg: MicroscopeSVG,
        title: 'Biomedicine',
        link: '',
    },
    {
        svg: RobotSVG,
        title: 'Robotics',
        link: '',
    },
]

export default function Home() {
    return (
        <div className={pageStyles.homeStyles.container}>
            <div className={pageStyles.homeStyles.headerImage}>
                {/* <MainSection> */}
                <div className={pageStyles.homeStyles.headerContent}>
                    <img src="/img/ghrce.png" alt="ghrce logo" />
                </div>
                {/* </MainSection> */}
            </div>
            <MainSection>
                <div>
                    <div className={pageStyles.homeStyles.mainContent}>
                        <div className={pageStyles.homeStyles.aboutSection}>
                            <h3>About the lab</h3>
                            <p>
                                The goal of Ivisionlab is to provide real-world
                                applications. Under this perspective, we drive
                                our research from academic requirements to
                                industry needs, visioning the integrative
                                relationship between these two worlds.
                                Currently, our research topics are Smart Cities,
                                Biometric Systems, Biomedicine, and Robotics.
                            </p>

                            <div
                                className={
                                    pageStyles.homeStyles.aboutSectionIFrame
                                }>
                                <iframe
                                    // width="100%"
                                    // height="100%"
                                    src="https://www.youtube-nocookie.com/embed/tX57ONUk0VE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>

                        <div className={pageStyles.homeStyles.newsSection}>
                            <h3>Recent news</h3>

                            <div className={pageStyles.homeStyles.news}>
                                {RecentNews.map(news => {
                                    return (
                                        <div
                                            key={news.date}
                                            className={
                                                pageStyles.homeStyles.newsCard
                                            }>
                                            <div
                                                className={
                                                    pageStyles.homeStyles
                                                        .newsCardStarts
                                                }>
                                                <div
                                                    className={
                                                        pageStyles.homeStyles
                                                            .newsText
                                                    }>
                                                    <Link href={news.link}>
                                                        <a>{news.news}</a>
                                                    </Link>
                                                </div>

                                                <div
                                                    className={
                                                        pageStyles.homeStyles
                                                            .newsPublishedOn
                                                    }>
                                                    <span>
                                                        Published: {news.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div
                                className={pageStyles.homeStyles.allNewsButton}>
                                <Button>
                                    <Link href="/news">
                                        <a>All news</a>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </MainSection>

            <div className={pageStyles.homeStyles.researchSection}>
                <MainSection>
                    <div className={pageStyles.homeStyles.mainResearchSection}>
                        <p
                            className={
                                pageStyles.homeStyles.researchSectionHeader
                            }>
                            Research in Computer Vision and Pattern Recognition
                            to:
                        </p>

                        <br />
                        <br />

                        <div
                            className={
                                pageStyles.homeStyles.reseachItemsSection
                            }>
                            {ReseachFields.map(Field => {
                                return (
                                    <div
                                        className={
                                            pageStyles.homeStyles
                                                .reseachItemsStarts
                                        }
                                        key={Field.title}>
                                        <Link href={Field.link}>
                                            <a>
                                                <div
                                                    className={
                                                        pageStyles.homeStyles
                                                            .reseachItem
                                                    }>
                                                    <Field.svg />
                                                    {/* <img
                                                src={BuildingSVG}
                                                alt={field.title}
                                            /> */}
                                                    <p>{Field.title}</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </MainSection>
            </div>

            <div className={pageStyles.homeStyles.test}></div>
        </div>
    )
}
