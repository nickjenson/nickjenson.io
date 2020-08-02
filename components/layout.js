import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.css'
import utils from '../styles/utils.module.css'

export const name = 'Nick Jenson'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
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
        <a href="https://www.linkedin.com/in/nickxjenson">LinkedIn</a>
        <a href="https://github.com/nickjenson">GitHub</a>
      </nav>
        {home ? (
          <>
            <img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utils.borderCircle}`} alt={name} />
            <h1 className={utils.heading2Xl}>{name}</h1>
            <a id={styles.resume} href="/resume/nickjenson-resume.pdf">Download Resume</a>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src="/images/profile.jpg" className={`${styles.headerImage} ${utils.borderCircle}`} alt={name} />
              </a>
            </Link>
            <h2 className={utils.headingLg}>
              <Link href="/">
                <a className={utils.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}