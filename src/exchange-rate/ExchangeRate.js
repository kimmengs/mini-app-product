import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './ExchangeRate.css';
import { Link } from 'react-router-dom/dist';
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000 // Cache for 15 minutes
});

// Create an `axios` instance with the cache adapter
const api = axios.create({
  adapter: cache.adapter
});


const ExchangeRate = () => {
  const [amount, setAmount] = useState(1);
  const [selectedValue, setSelectedValue] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState([]);
  const [activeComponent, setActiveComponent] = useState('ExchangeRate'); // Default active component

  const handleTapClick = (component) => {
    setActiveComponent(component);
  };

  const currencies = [
    { code: 'USD', label: 'USD', flag: 'https://flagcdn.com/us.svg' },
    { code: 'KHR', label: 'KHR', flag: 'https://flagcdn.com/kh.svg' },
  ];

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_URL}/exchangeRate/get`);
        if (response.data.status.code === 0) {
          const mappedData = response.data.data
            .filter(item => item.toCurrency === 'USD')
            .map(item => ({
              country: `assets/images/icons/${item.currencyShort.toLowerCase()}.webp`,
              currency: item.currencyShort,
              toCurrency: item.toCurrency,
              buyRate: item.buyrate,
              sellRate: item.sellrate,
              Currency_name: item.currencyFull
            }));
          
          setExchangeRates(mappedData);
        } else {
          console.error('Error fetching data:', response.data.status.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getConvertedAmount = (rate) => {
    console.log(rate);
    const baseRate = exchangeRates.find((r) => r.currency === selectedValue)?.buyRate.toString().replace(/,/g, '') || 1;
    const convertedAmount = (amount / baseRate * rate.buyRate.toString().replace(/,/g, '')).toFixed(2);
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(convertedAmount);
  };

  return (
    <>
      <div className="container mt-3 p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn">
            <i className="fa fa-arrow-left"></i>
          </button>
          <h2 className="text-center header-promotion">Exchange Rate</h2>
          <div style={{ width: '24px' }}></div>
        </div>

        <Tabs>
          <TabList className="custom-tab-list mb-2">
            <Tab className="custom-tab" selectedClassName="custom-tab-selected">
              Exchange Rate
            </Tab>
            <Tab className="custom-tab" selectedClassName="custom-tab-selected">
              Converter
            </Tab>
          </TabList>
          <TabPanel>
            <div className="d-flex justify-content-between align-items-center ">
              <span className="header-text"> </span>
              <Link to="/contact-us" className="btn btn-link header-text">Contact Us</Link>
            </div>
            <div className="Exchange_rate_table">
              <div className="Exchange_rate_header">
                <div className="CCY">
                  <span>Currency</span>
                </div>
                <div className="Buy">
                  <span>Buy</span>
                </div>
                <div className="Sell">
                  <span>Sell</span>
                </div>
              </div>
              {exchangeRates.map((rate, index) => (
                <div className="Exchange_rate_row fade-in" key={index}>
                  <div className="CCY">
                    <span><img className="currency-flag" src={rate.country} alt='flag' /> {rate.currency}</span>
                  </div>
                  <div className="Buy">
                    <span>{rate.buyRate}</span>
                  </div>
                  <div className="Sell">
                    <span>{rate.sellRate}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: '#7C7C7D', fontSize: '12px' }}>
              Effective Update 25 November 2024.
            </p>
            <p style={{ color: '#7C7C7D', fontSize: '12px' }}>
              The rates displayed are indicative for the day and are subject to change without prior notice. For the latest remittance rates, please visit your nearest Maybank branch.
            </p>
          </TabPanel>
          <TabPanel>
            <div className="converter">
              <div className="card p-3 mb-3">
                <div className="form-group d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center position-relative">
                    <img
                      src={currencies.find((cur) => cur.code === selectedValue).flag}
                      alt={selectedValue}
                      className="currency-flag-convert mr-2"
                    />
                    <select
                      id="currency"
                      className="form-control border-0 mr-3"
                      value={selectedValue}
                      onChange={handleChange}
                    >
                      {currencies.map((currency) => (
                        <option key={currency.code} value={currency.code}>
                          {currency.label}
                        </option>
                      ))}
                    </select>
                    <i className="fa fa-chevron-down position-absolute" style={{ right: '10px' }}></i>
                  </div>
                  <input
                    type="number"
                    id="amount"
                    className="form-control amount-input border-0"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
              </div>
              <div className="Exchange_rate_table">
                <div className="Exchange_rate_header">
                  <div className="CCY">
                    <span>Currency</span>
                  </div>
                  <div className="Converted">
                    <span>Converted Amount</span>
                  </div>
                </div>
                {exchangeRates.map((rate, index) => (
                  <div className="Exchange_rate_row fade-in" key={index}>
                    <div className="CCY">
                      <img src={rate.country} alt={`${rate.currency} flag`} className="currency-flag-convert mr-2" />
                      <span>{rate.currency}</span>
                    </div>
                    <div className="Converted">
                      <span>{getConvertedAmount(rate)} </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

        </Tabs>
      </div>

    </>

  );
};

export default ExchangeRate;