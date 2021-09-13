import './App.css';
import Feed from './components/feed/feed';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Stories from './components/stories/stories';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="main">
        <Header/>
        <Stories/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
