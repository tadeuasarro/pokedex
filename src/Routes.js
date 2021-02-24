import { BrowserRouter, Switch, Route } from 'react-router-dom';
import KantoList from './containers/kantolist/KantoList';
import Detail from './containers/detail/Detail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={KantoList} exact />
      <Route path="/detail" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
