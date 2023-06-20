'use client'

import Head from 'next/head'
import Layout from '../layout'

import styles from './news.module.css'
import { createApolloClient } from '@/lib/apolloClient'
import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { ArticleListQuery } from './ArticleList'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function News() {
  const client = createApolloClient()

  return (
    <>
      <Head>
        <title>News - xonic.io</title>
      </Head>
      <Layout>
        <div className="flex h-screen flex-col justify-between">
          <Header />
          <div className="mx-10 mt-10  md:mx-auto md:w-2/3 lg:w-1/2">
            <p className="px-10 text-center font-title text-3xl font-semibold">
              News, tailored for you!
            </p>
            <div className="mb-36 mt-10 rounded-lg bg-white p-10 shadow-md">
              <ApolloProvider client={client}>
                <ArticleListQuery />
              </ApolloProvider>
            </div>
          </div>
          <Footer />
        </div>
        <div className={styles.gradients} />
      </Layout>
    </>
  )
}
