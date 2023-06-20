import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid'
import { formatDistance, parse, parseISO, subDays } from 'date-fns'

export interface INewsArticle {
  id: number
  imageUrl: string
  title: string
  byline: string
  published_at: string
  source_name: string
  source_url: string
}

export const Article = ({ article }: { article: INewsArticle }) => (
  <div className="relative flex items-start space-x-3">
    <>
      {console.log({ article })}
      <div className="relative">
        <img
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
          src={'https://i.pravatar.cc/150?img=' + article.id.toString()}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <div>
          <div className="text-sm">
            <a href={article.source_url} className="font-medium text-gray-900">
              {article.source_name}
            </a>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            {formatDistance(parseISO(article.published_at), new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <p>{article.title}</p>
        </div>
      </div>
    </>
  </div>
)
