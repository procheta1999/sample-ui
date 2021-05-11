import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Header from './sections/header';
import Content from './sections/content';

const App = () => {
  return (
    <div className="App">
      <div className="visible">
     <Header/>
  </div>
       
      <Content/>
     
    </div>
  );
}

export default App;
