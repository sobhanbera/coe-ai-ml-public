import Image from 'next/image'
import Link from 'next/link'

import Button from '../components/Button'
import {pageStyles} from '../styles/css.modules'

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

export default function Home() {
    return (
        <div className={pageStyles.homeStyles.container}>
            <div className={pageStyles.homeStyles.mainContent}>
                <div className={pageStyles.homeStyles.aboutSection}>
                    <h3>About the lab</h3>
                    <p>
                        The goal of Ivisionlab is to provide real-world
                        applications. Under this perspective, we drive our
                        research from academic requirements to industry needs,
                        visioning the integrative relationship between these two
                        worlds. Currently, our research topics are Smart Cities,
                        Biometric Systems, Biomedicine, and Robotics.
                    </p>

                    <div className={pageStyles.homeStyles.aboutSectionIFrame}>
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
                                    className={pageStyles.homeStyles.newsCard}>
                                    <div
                                        className={
                                            pageStyles.homeStyles.newsCardStarts
                                        }>
                                        <div
                                            className={
                                                pageStyles.homeStyles.newsText
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
                                            <span>Published: {news.date}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={pageStyles.homeStyles.allNewsButton}>
                        <Button>
                            <Link href="/news">
                                <a>All news</a>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// python3 -m venv .venv
// source .venv/bin/activate
// pip install -r requirements.txt
