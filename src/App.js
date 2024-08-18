import { MainButton } from '@twa-dev/sdk/react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WebApp from '@twa-dev/sdk'
import Promotions from './Promotion';

function App() {
  return (<><Promotions />
  {/* <MainButton text="Submit" color='#000' onClick={() => alert('submitted')} /> */}
  </>);
}

export default App;
