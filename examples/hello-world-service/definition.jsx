import ApiExpress, {
  Service,
  Middleware,
  Group,
  Route,
  Request,
  Response,
  PathParameter,
} from '../..';

export default function() {
  return <Service
    id="hello-world-service"
    port={3000}
    version="0.1.0"
    contact="orkon"
    tags={['node', 'service']}
    endpoint="http://dev.server.at.home"
  >
    <Middleware use={require('./middleware/logger')} />
    <Group name="Hello" description="All routes related to saying Hello">
      <Route description={'Generates a message in the format "Hello :who!"'} path="/hello/:who" method="get" handler={require('./handlers/getHello')}>
        <Request>
          <PathParameter name="who" type="string" />
        </Request>
        <Response schema={require('./schemas/getHello.res.json')} />
      </Route>
    </Group>
  </Service>;
}
