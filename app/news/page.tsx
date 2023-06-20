import Head from 'next/head'
import Layout from '../layout'

import styles from './news.module.css'
import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid'
import { Article, INewsArticle } from './article'

const articles: INewsArticle[] = [
  {
    id: 1,
    imageUrl: '',
    headline: 'some headline',
    date: new Date(),
    byline: 'some byline',
    source: { name: 'New York Times', url: 'https://www.nytimes.com' },
  },
  {
    id: 2,
    imageUrl: '',
    headline: 'some headline',
    date: new Date(),
    byline: 'some byline',
    source: { name: 'New York Times', url: 'https://www.nytimes.com' },
  },
]

export default function News() {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <Layout>
        <div className={styles.gradients}>
          <div className="mx-10 mt-10 rounded-lg bg-white p-10 md:mx-auto md:w-2/3 lg:w-1/2">
            <ul role="list" className="-mb-8">
              {articles.map((article, idx) => (
                <li key={article.id}>
                  <div className="relative pb-8">
                    {idx !== articles.length - 1 ? (
                      <span
                        className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <Article article={article} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}
