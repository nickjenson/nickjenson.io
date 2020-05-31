import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

export const name = 'Nick Jenson'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Personal site, blog and portfolio" />
        <meta name="keywords" content="web development, design, ruby, javascript, consulting" />
      </Head>
      <header className={styles.header}>
      <nav id="navbar">
        <a href="/resume.pdf">Resume</a>
        <a href="#">LinkedIn</a>
        <a href="https://github.com/nickjenson">GitHub</a>
      </nav>
        {home ? (
          <>
            <img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src="/images/profile.jpg" className={`${styles.headerImage} ${utilStyles.borderCircle}`} alt={name} />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back</a>
          </Link>
        </div>
      )}
    </div>
  )
}