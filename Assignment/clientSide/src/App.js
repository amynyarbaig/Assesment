import Header from './components/header';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      {/* <Routes></Routes> */}
    </BrowserRouter>
  );
}

export default App;
