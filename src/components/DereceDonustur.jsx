import React, { useState } from 'react';
import DereceInput from './DereceInput';
import DereceDonusturButton from './DereceDonusturButton';
import SonucLabel from './SonucLabel';

function DereceDonustur() {
  const [derece, setDerece] = useState('');
  const [sonuc, setSonuc] = useState('');

  function handleClick(event) {
    const inputValue = parseFloat(derece);

   
    if (event.target.id === 'kel') {
      const kelvinSonuc = (inputValue + 273.15).toFixed(2);
      setSonuc(`Kelvin: ${kelvinSonuc} °K`);
    } else if (event.target.id === 'fah') {
      const fahrenheitSonuc = ((9/5) * inputValue + 32).toFixed(2);
      setSonuc(`Fahrenheit: ${fahrenheitSonuc} °F`);
    }

    setDerece('');
  }

  function handleChange(event) {
    const inputValue = event.target.value;
    setDerece(inputValue);
  }

  return (
    <div className="jumbotron" >
      <h3 className='baslik'>SICAKLIK DÖNÜŞTÜRÜCÜ</h3>
      <DereceInput value={derece} onChange={handleChange} />
      <DereceDonusturButton onClick={handleClick} id='kel' text="Kelvin" />
      <DereceDonusturButton onClick={handleClick} id='fah' text="Fahrenheit" />
      <SonucLabel sonuc={sonuc} />
    </div>
  );
}

export default DereceDonustur;
