import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Employee from './components/Employee'
import Job from './components/Job';
import MainPage from './screens/MainPage';
import EmployeeSchedule from './screens/EmployeeSchedule';
import Header from './components/Header';
function App() {
  return (
      <Router>   
       <Header/>
        <main className="py-3 my-5">
        
          <Container className="py-3 my-5">
            <Route path='/emplo' component={Employee} exact />
            <Route path='/' component={MainPage} exact />
            <Route path='/schedule' component={EmployeeSchedule} exact />
          </Container>
        </main>
      </Router>
  );
}

export default App;
