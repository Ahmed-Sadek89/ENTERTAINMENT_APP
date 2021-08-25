// components
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
//pages
import Trendings from './Pages/Trendings/Trendings';
import Movies from './Pages/Movies/Movies';
import TV_Series from './Pages/TV_Series/TV_Series';
import Search from './Pages/Search/Search';
import ContentPage from './Pages/ContentPage/ContentPage';
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
              <Route exact path='/' component={Trendings} />
              <Route  path='/movies' component={Movies} />
              <Route  path='/tv_series' component={TV_Series} />
              <Route  path='/search' component={Search} />
              <Route  path='/content/:type/:id' component={ContentPage} />
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
