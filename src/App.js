import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import EmployeesList from './components/EmployeesList';
import Header from './components/Header';
import useFetch from './components/useFetch';
import NotFound from './components/NotFound';



function App() {

  const { data: employees, error, isPending} = useFetch('http://localhost:8000/employees');

  return (
        
       <Router> 
        <div className="App">
          <Header />
            <Switch>
                <Route path="/" exact>
                  { error && <div className='errorMessage'>{error}</div>}
                  {isPending && <div className='loadingMessage'><p>loading...</p></div>}
                  {employees && <EmployeesList employees={employees} /> }
                </Route>
                <Route path="/addemp">
                  <AddEmployee />
                </Route>
                <Route path="/edit/:id">
                  <EditEmployee />
                </Route>
                <Route path='*'>
                  <NotFound />
                </Route>
            </Switch>
        </div>
        
      </Router>
  );
}

export default App;
