import './App.css';
import AppBar from './components/AppBar'
import Button from './components/Button'
import Switch from './components/Switch'

function App() {
  return (
    <div className="App">
      <AppBar>
        This is the App Bar
      </AppBar>
      <Button Click={()=>console.log("clicked")}>
        Just a test
      </Button>
      <Switch>

      </Switch>
    </div>
  );
}

export default App;
