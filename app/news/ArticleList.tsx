import { gql, useQuery } from '@apollo/client'
import { Article, INewsArticle } from './article'

const GET_ARTICLES = gql`
  query Articles {
    news_articles(order_by: { published_at: desc }) {
      id
      title
      published_at
      source_name
      source_url
      updated_at
    }
  }
`

export const ArticleListQuery = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES)

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.error(error)
    return <div>Error!</div>
  }
  return <ArticleList articles={data.news_articles} />
}

export const ArticleList = ({ articles }: { articles: INewsArticle[] }) => {
  return (
    <ul role="list">
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
  )
}
