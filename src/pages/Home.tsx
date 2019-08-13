import * as React from 'react'

import { RouteComponentProps } from '@reach/router'

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <React.Fragment>
      <p>Домашняя страница</p>
    </React.Fragment>
  )
}

export { Home }
