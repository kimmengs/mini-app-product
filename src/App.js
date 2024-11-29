import { MainButton } from '@twa-dev/sdk/react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebApp from '@twa-dev/sdk'
import Promotions from './Promotion';
import PromotionDetail from './PromotionDetail';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/animations/loading.json'; // Update with the path to your Lottie animation JSON
import ExchangeRate from './ExchangeRate';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Lottie options={defaultOptions} height={110} width={110} />
      </div>
    );
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Promotions />} />
          <Route path="/exchange-rate" element={<ExchangeRate />} />
          <Route
            path="/promotion/:id"
            element={
              <PromotionDetail
                promotion={{
                  title: "20% OFF at Aurum Theatre",
                  imageUrl: "/assets/images/You-Eng-Hotel-640.jpeg",
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
