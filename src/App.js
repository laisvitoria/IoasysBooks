import Routes from './routes';
import { GlobalStyle } from "./global";
import { AuthProvider } from './hooks/AuthContext';
import { BooksProvider } from './hooks/BooksContext';

function App() {
  return (
    <AuthProvider>
      <BooksProvider>
        <GlobalStyle/>
        <Routes/>
      </BooksProvider>
    </AuthProvider>
  );
}

export default App;
