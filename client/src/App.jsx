import './App.scss'
import { JSFutbolProvider } from './context/JSFutbolContext';
import { AppRoutes } from './routes/AppRoutes';
import './App.scss';

function App() {
  return (
    <>
      <JSFutbolProvider>
        <AppRoutes/>
      </JSFutbolProvider>
    </>
  );
}

export default App
