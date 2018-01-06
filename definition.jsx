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
