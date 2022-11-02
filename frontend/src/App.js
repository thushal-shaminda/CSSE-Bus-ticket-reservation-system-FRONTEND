import './App.css';
import AddNewBus from './components/Bus/addNewBus';
import ViewBuses from './components/Bus/ViewBuses';
import Header from './components/Header/Header';
import AddTimeTable from './components/TimeTable/addTimeTable';
import Signin from './components/User/signin';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Signin /> */}
      {/* <AddNewBus /> */}
      {/* <ViewBuses/> */}
      <AddTimeTable />
    </div>
  );
}

export default App;
