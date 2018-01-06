# API express

API express is an attempt to come up with universal language for defining and documenting APIs using [JSX](https://jsx.github.io/) which became widely known with the rise of [React](https://reactjs.org/) popularity.

Ultimately, API express allows you to define the structure of your API service in JSX. Using this definition API express is able to **run the service**, **validate request and response formats** and **generate documentation** for your service. The definition is a live JavaScript code which allows changing the meta features of your API without changing the implementation.

## Example

This file defines a service which is able to deliver user data by `GET /users/:id`.

```jsx
/** @jsx ApiExpress.h */

import ApiExpress, {
  Service,
  Middleware,
  Group,
  Route,
  Request,
  Response,
  PathParameter,
} from '.';

export default function() {
  return <Service
    id="my-service"
    port={3000}
    version="0.1.0"
    contact="Alex"
    tags={['node', 'service']}
    endpoint="http://dev.server.at.home"
  >
    <Middleware use={require('./middleware/logger')} />
    <Group name="Users" description="All about users">
      <Route path="/users/:id" method="get" handler={require('./handlers/getUserById')}>
        <Request>
          <PathParameter name="id" type="string" />
        </Request>
        <Response schema={require('./schemas/getUserById.res.json')} />
      </Route>
    </Group>
  </Service>;
}
```

To run this definition with `express`, simply call `run`:

```js
const { run } = require('.');
const serverDef = require('./definition').default;
run(serverDef());
```

To generate documentation in API blueprint format, simply call `doc`:

```js
const { doc } = require('.');
const serverDef = require('./definition').default;
doc(serverDef(), (err, docs) => {
  require('fs').writeFileSync('./api.doc', docs, 'utf-8');
});
```

The result is [here](api.doc).

## Status

Experimental Proof-Of-Concept. There is a lot of work to be done in standardizing the elements available and documenting what they mean to make sure enough use cases can be covered. Internal, the data structures have to be de-coupled from the code generation and documentation generation steps.

## LICENSE

[MIT](LICENSE)

