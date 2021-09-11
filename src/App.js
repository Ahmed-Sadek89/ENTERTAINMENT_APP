// components
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
//pages
import Home from './Pages/Home/Home';
import Trendings from './Pages/Trendings/Trendings';
import Movies from './Pages/Movies/Movies';
import TV_Series from './Pages/TV_Series/TV_Series';
import Search from './Pages/Search/Search';
import ContentPage from './Pages/ContentPage/ContentPage';
import WatchLists from './Pages/WatchLists/WatchLists';
import Likes from './Pages/Likes/Likes';
import DisLikes from "./Pages/DisLikes/DisLikes";
//tools
import {BrowserRouter as AllRoutes, Switch, Route} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
// import {ReactQueryDevtools} from 'react-query/devtools';
//styles
import './index.css'

const client = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={client}>
      <AllRoutes>
        <Header />
          <div className='App'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/watchlists' component={WatchLists} />
              <Route exact path='/likes' component={Likes} />
              <Route exact path='/dislikes' component={DisLikes} />
              <Route exact path='/trendings/:page' component={Trendings} />
              <Route exact path='/movies/:page/:genURL' component={Movies} />
              <Route exact path='/tv_series/:page/:genURL' component={TV_Series} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/content/:type/:id' component={ContentPage} />
              <Route>Error...</Route>
            </Switch>
          </div>
        <Navigation />
      </AllRoutes>
      {/* <ReactQueryDevtools initialIsOpen={true}/> */}

    </QueryClientProvider>
  );
}

export default App;