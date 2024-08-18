import { MainButton } from '@twa-dev/sdk/react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebApp from '@twa-dev/sdk'
import Promotions from './Promotion';
import PromotionDetail from './PromotionDetail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Promotions />} />
          <Route
            path="/promotion/:id"
            element={
              <PromotionDetail
                promotion={{
                  title: "20% OFF at Aurum Theatre",
                  imageUrl: "/assets/images/m2u-decomm.jpg",
                  description:
                    "Enjoy an exclusive 20% discount on all tickets at Aurum Theatre for a limited time. Don't miss out on the best cinematic experience in town.",
                  terms:
                    "Offer valid until the end of the month. Cannot be combined with other offers. Valid for online bookings only.",
                }}
              />
            }
          />
        </Routes>
      </Router>

      {/* <MainButton text="Submit" color='#000' onClick={() => alert('submitted')} /> */}
    </>);
}

export default App;
