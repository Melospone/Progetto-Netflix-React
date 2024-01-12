
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CustomHeader from './components/organisms/CustomHeader';
import CustomFooter from './components/organisms/CustomFooter';
import CustomMain from './components/organisms/CustomMain';


function App() {

  return (
    <>
       <CustomHeader/>

       <CustomMain/>

       <CustomFooter/>
    </>
  )
}

export default App;
