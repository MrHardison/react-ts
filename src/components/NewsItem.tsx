import * as React from 'react'

import { INewsItem } from '../models/news'

interface INewsProps {
  data: INewsItem
}
const NewsItem: React.FC<INewsProps> = ({
  data: { title, text, timestamp, link }
}) => {
  return <article>
    <br/>
    <div>
      {
        <a href={link} target="_blank">
          {title}
        </a>
      }{' '}| {timestamp.toLocaleDateString()}
    </div>
    <div>{text}</div>
  </article>
}

export { NewsItem }
