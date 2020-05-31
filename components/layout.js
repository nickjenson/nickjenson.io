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
      {!home && (
          <Link href="/">
            <a className={styles.backToHome}>&larr; Back</a>
          </Link>
      )}
      <nav id="navbar">
        <a href="#">LinkedIn</a>
        <a href="https://github.com/nickjenson">GitHub</a>
      </nav>
        {home ? (
          <>
            <img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <a id={styles.resume} href="/resume/nickjenson-resume.pdf">Download Resume</a>
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
    </div>
  )
}