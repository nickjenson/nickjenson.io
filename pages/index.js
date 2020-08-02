import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { name } from '../components/layout'
import utils from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
        <link rel="apple-touch-icon" href="/public/images/apple-touch-icon.png"></link>
      </Head>
      <section className={utils.headingMd}>
        <ul className={utils.list}>
          <li>Technical Consultant for <a href="https://www.instructure.com/canvas">Canvas LMS</a> @ <a href="https://www.instructure.com/">Instructure</a>.</li>
        </ul>
      </section>
      <section className={`${utils.headingMd} ${utils.padding1px}`}>
        <h2 className={utils.headingLg}>Blog</h2>
        <ul className={utils.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utils.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utils.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
