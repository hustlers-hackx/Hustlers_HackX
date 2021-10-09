import logo from './logo.svg';
import './App.css';
import { ChatSection } from './components/ChatSection';

function App() {
  return (
    <div className="App">
      <ChatSection sender="testuser@gmail.com"/>
    </div>
  );
}

export default App;
