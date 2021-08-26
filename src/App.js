import AddItem from './AddItem';
import './App.css';
import Lists from './Lists';
import { Provider } from 'react-redux'
import { store } from './redux/store'
function App() {
  
  return (
    <Provider store={store}>
      <div className="wrapper">
        <div>
      <AddItem />
      <Lists />
      </div>
      </div>
    </Provider>
  );
}

export default App;
