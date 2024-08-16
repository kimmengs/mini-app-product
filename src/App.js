import { MainButton } from '@twa-dev/sdk/react';
import './App.css';

import WebApp from '@twa-dev/sdk'

function App() {
  return <MainButton text="Submit" color='#000' onClick={() => alert('submitted')} />
  ;
}

export default App;
