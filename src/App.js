import logo from './logo.svg';
import './App.css';
import Address from './component/Profile/Address';
import ProfilePhoto from './component/Profile/ProfilePhoto';
import FullName from './component/Profile/FullName';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
