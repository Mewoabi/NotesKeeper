import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { Navbar } from './components/Navbar';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <div className='pages'>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Notes />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </div>
    </div>
  );
}

export default App;
