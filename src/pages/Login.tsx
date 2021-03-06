import * as React from 'react'

import { RouteComponentProps } from '@reach/router'

const Login: React.FC<RouteComponentProps> = () => {
  const onSubmit = () => {
    // tslint:disable-next-line: no-console
    console.log('submit!')
  }
  return (
    <React.Fragment>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="text" />
        <button>Отправить</button>
      </form>
    </React.Fragment>
  )
}

export { Login }
