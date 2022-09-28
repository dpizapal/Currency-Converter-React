import React, { useEffect, useState } from "react";
import './App.css';
import InputField from "./InputField";
import Footer from "./Footer";
import { FaExchangeAlt } from 'react-icons/fa';

const url= 'https://v6.exchangerate-api.com/v6/ad9f9e2a1805f6e2aa09e8f0/latest/USD'


function App() {
  //# states
  const [options, setOptions] = useState(['USD', 'INR']);
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('INR');
  const [firstValue, setFirstValue] = useState('1');
  const [secondValue, setSecondValue] = useState('');
  const [frontConversion, setFrontConversion] = useState(true);

  //# useEffect
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // get rates
        const CONVERSION_RATES = data.conversion_rates;

        // set available options to the select element
        setOptions([...Object.keys(CONVERSION_RATES)]);

        // calculate conversion rate
        const rate =
          CONVERSION_RATES[secondCurrency] / CONVERSION_RATES[firstCurrency];

        // check conversion direction
        if (frontConversion) {
          // update value
          setSecondValue((firstValue * rate).toFixed(2));
        } else {
          setFirstValue((secondValue / rate).toFixed(2));
        }
      });
  }, [firstValue, secondValue, firstCurrency, secondCurrency, frontConversion]);

  // jsx
  return (
    <main>
      <h2 className="title">Converter</h2>
      <header>
        <div className="container">
          <InputField
            value={firstValue}
            setValue={setFirstValue}
            currency={firstCurrency}
            setCurrency={setFirstCurrency}
            setFrontConversion={setFrontConversion}
            conversionValue={true}
            options={options}
          />
          <span>
            <FaExchangeAlt className="fa" />{' '}
          </span>
          <InputField
            value={secondValue}
            setValue={setSecondValue}
            currency={secondCurrency}
            setCurrency={setSecondCurrency}
            setFrontConversion={setFrontConversion}
            conversionValue={false}
            options={options}
          />
        </div>
      </header>

      <Footer />
    </main>
  );
}

export default App;