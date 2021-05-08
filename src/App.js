import Routes from './routes';
import { GlobalStyle } from "./global";
import { AuthProvider } from './hooks/AuthContext'

function App() {
  return (
    <AuthProvider>
      <GlobalStyle/>
      <Routes/>
    </AuthProvider>
  );
}

export default App;
