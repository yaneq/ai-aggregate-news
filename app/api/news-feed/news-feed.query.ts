export const insetNewsQuery = (
  payload: string[],
  returning = `returning {id}`
) => {
  return `mutation {
    insert_news_articles (objects: [${payload}]) {
      ${returning}
      }
    }`
}

export const FindNewsBySourceUrlQuery = (source_url: string) => {
  return `query  {
    news_articles(where: {source_url: {_eq: "${source_url}"}}) {
        id published_at title source_url
      }
    }
    `
}

export const getLastNewsQuery = () => {
  return `query  {
    news_articles(limit: 1, order_by: {published_at: desc}) {
      id published_at
    }
  }
  `
}
