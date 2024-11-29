import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './ExchangeRate.css';

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
    { code: 'THB', label: 'THB', flag: 'https://flagcdn.com/th.svg' },
    { code: 'AUD', label: 'AUD', flag: 'https://flagcdn.com/au.svg' },
    { code: 'EUR', label: 'EUR', flag: 'https://flagcdn.com/eu.svg' },
  ];

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const jsonData = [
      {
        country: 'assets/images/icons/cambodia_flag.webp',
        currency: 'KHR',
        buyRate: '4,072',
        sellRate: '4,061',
        Currency_name: "Cambodian Riel",
        exchagneRate_converted: "4,050.00 KHR",
      },
      {
        country: 'assets/images/icons/thailand.webp',
        currency: 'THB',
        buyRate: '34.38',
        sellRate: '32.28',
        Currency_name: "Thai Baht",
        exchagneRate_converted: "34.98 THB",
      },
      {
        country: 'assets/images/icons/australia.webp',
        currency: 'AUD',
        buyRate: '0.6052',
        sellRate: '0.6577',
        Currency_name: " Australian Dollar",
        exchagneRate_converted: "1.5417 AUD",
      },
      {
        country: 'assets/images/icons/europe.webp',
        currency: 'EUR',
        buyRate: '1.0249',
        sellRate: '1.0774',
        Currency_name: "Euro",
        exchagneRate_converted: "0.9555 EUR",
      },
      {
        country: 'assets/images/icons/newzealand.webp',
        currency: 'NZD',
        buyRate: '0.5451',
        sellRate: '0.5976',
        Currency_name: "New Zealand Dollar",
        exchagneRate_converted: "1.7150 NZD",
      },
      {
        country: 'assets/images/icons/canada.webp',
        currency: 'CAD',
        buyRate: '1.4202',
        sellRate: '1.3602',
        Currency_name: "Canadian Dollar",
        exchagneRate_converted: "1.4105 CAD",
      },
      {
        country: 'assets/images/icons/vietname.webp',
        currency: 'VND',
        buyRate: '25,789',
        sellRate: '24,823',
        Currency_name: "Vietnamese Dong",
        exchagneRate_converted: "24,710.59 VND",
      },
      {
        country: 'assets/images/icons/japan.webp',
        currency: 'JPY',
        buyRate: '157.14',
        sellRate: '150.75',
        Currency_name: "Japanese Yen",
        exchagneRate_converted: "153.97 JPY",
      },
      {
        country: 'assets/images/icons/gbp.webp',
        currency: 'GEP',
        buyRate: '1.2294',
        sellRate: '1.2894',
        Currency_name: "British Pound Sterling",
        exchagneRate_converted: "0.7977 GBP",
      },
    ];
    setExchangeRates(jsonData);
  }, []);


  const getConvertedAmount = (rate) => {
    const baseRate = exchangeRates.find((r) => r.currency === selectedValue)?.buyRate.replace(/,/g, '') || 1;
    const convertedAmount = (amount / baseRate * rate.buyRate.replace(/,/g, '')).toFixed(2);
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(convertedAmount) + ` ${rate.currency}`;
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
          <TabList className="custom-tab-list mb-4">
            <Tab className="custom-tab" selectedClassName="custom-tab-selected">
              Exchange Rate
            </Tab>
            <Tab className="custom-tab" selectedClassName="custom-tab-selected">
              Converter
            </Tab>
          </TabList>
          <TabPanel>
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
                <div className="Exchange_rate_row" key={index}>
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
                  <div className="d-flex align-items-center">
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