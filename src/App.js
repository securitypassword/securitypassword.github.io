import logo from './logo.svg';
import './App.css';
import Login from './comps/Login.jsx';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://glitch.com/~perfect-cream-wound")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return (
    <div className="App">
      security password
      <br></br>
      <code>discord le gana</code>
      <Login></Login>
    </div>
  );
}

export default App;