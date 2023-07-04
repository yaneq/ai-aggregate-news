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

export const FindNewsByTitleQuery = (title: string) => {
  return `query  {
    news_articles(where: {title: {_eq: "${title}"}}) {
        id published_at title 
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
