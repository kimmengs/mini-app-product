import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Promotions from './promotions/Promotion';
import PromotionDetail from './promotions/PromotionDetail';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './assets/animations/loading.json'; // Update with the path to your Lottie animation JSON
import ExchangeRate from './exchange-rate/ExchangeRate';
import ContactUs from './exchange-rate/ContactUs';
import './i18n';

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
          <Route path="/contact-us" element={<ContactUs />} />

          <Route
            path="/promotion/:id"
            element={
              <PromotionDetail />
            }
          />
        </Routes>
      </Router>

      {/* <MainButton text="Submit" color='#000' onClick={() => alert('submitted')} /> */}
    </>);
}

export default App;
