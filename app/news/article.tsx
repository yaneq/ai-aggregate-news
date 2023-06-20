import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid'

export interface INewsArticle {
  id: number
  imageUrl: string
  headline: string
  byline: string
  date: Date
  source: {
    name: string
    url: string
  }
}

export const Article = ({ article }: { article: INewsArticle }) => (
  <div className="relative flex items-start space-x-3">
    <>
      <div className="relative">
        <img
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
          src={'https://i.pravatar.cc/150?img=' + article.id.toString()}
          alt=""
        />

        <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
          <ChatBubbleLeftEllipsisIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div>
          <div className="text-sm">
            <a href={article.source.url} className="font-medium text-gray-900">
              {article.source.name}
            </a>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Commented {article.date.toString()}
          </p>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <p>{article.headline}</p>
        </div>
      </div>
    </>
  </div>
)
