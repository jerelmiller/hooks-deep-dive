import CustomCounterHook from './CustomCounterHook';
import StateHookExample from './StateHookExample';
import CallbackHook from './CallbackHook';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>State hook</h2>
      <StateHookExample initialValue={2} />
      <h2>Custom hook</h2>
      <CustomCounterHook initialValue={2} />
      <h2>Callback hook</h2>
      <CallbackHook initialValue={1} />
    </div>
  );
}

export default App;
