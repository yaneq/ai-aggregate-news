import { NextResponse } from 'next/server'
import Parser from 'rss-parser'
import {
  getLastNewsQuery,
  insetNewsQuery,
  FindNewsByTitleQuery,
} from './news-feed.query'

export async function GET() {
  try {
    const data = 'hello next'
    return NextResponse.json({ message: data }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ message: 'UnExpected Error' }, { status: 400 })
  }
}

export async function POST(request: Request) {
  try {
    const parser = new Parser()
    const feeds = await parser.parseURL(process.env.NEWS_FEED_URL as string)
    const updatedNewsItems = await removeDuplicateNews(feeds.items)
    const response = { newRecords: null, newsFeed: feeds.items }
    if (updatedNewsItems.length > 0) {
      const query = insetNewsQuery(
        updatedNewsItems,
        `returning {
    id title published_at updated_at source_url source_name }`
      )
      response.newRecords = await HasuraApi(query)
    }
    return NextResponse.json({
      ...response,
    })
  } catch (e) {
    return NextResponse.json(
      { message: 'UnExpected Error Occur' },
      { status: 400 }
    )
  }
}

const removeDuplicateNews = async (news: any[]) => {
  let uniqueNews: string[] = []
  const latestNews = await HasuraApi(getLastNewsQuery())
  for (const item of news) {
    if (
      latestNews.news_articles.length == 0 ||
      new Date(latestNews.news_articles[0].published_at) <
        new Date(item.pubDate)
    ) {
      uniqueNews.push(
        `{ published_at: "${item.pubDate}", title: "${item.title}"
        source_name: "${item.creator}", 
        source_url: "${item.guid}" ,
        updated_at: "${new Date().toISOString()}"}`
      )
    } else {
      break
    }
  }
  return uniqueNews
}

export const HasuraApi = async (query: string) => {
  const hasuraResponse = await fetch(
    process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET as string,
      },
      body: JSON.stringify({
        query,
      }),
    }
  )
  const response = await hasuraResponse.json()
  return response.data
}
