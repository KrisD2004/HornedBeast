import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './main';
import Footer from './footer';
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <Main data={data}/>
      <Footer/>
      
      
    </div>
  );
}



export default App;
