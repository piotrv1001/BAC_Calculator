import React, { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState('');
  const [total, setTotal] = useState('');
  const [isMale, setIsMale] = useState(false);
  const [hours, setHours] = useState('');
  const [bac, setBac] = useState(0);

  const handleWeightInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setWeight(event.target.value);
  }

  const handleTotalInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTotal(event.target.value);
  }

  const handleHoursInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setHours(event.target.value);
  }

  const handleGenderChange = (isMale: boolean): void => {
    setIsMale(isMale);
  }

  const calculateBAC = (): void => {
    const r = isMale ? 0.73 : 0.66; // alcohol distribution
    const bac = (Number(total) * 5.14 / Number(weight) * r) - 0.015 * Number(hours);
    const bacRounded = Math.round(bac * 100) / 100;
    setBac(bacRounded);
  }

  return (
    <div className="App">
      <div className="bac-card">
        <h1>BAC Calculator</h1>
        <div className='bac-form'>
          <div className='input-form-col'>
            <label htmlFor="weight">Bodyweight (kg)</label>
            <input
              id='weight'
              type='text'
              value={weight}
              onChange={handleWeightInputChange}/>
          </div>
          <div className='input-form-col'>
          <label htmlFor="total">Total alcohol (ml)</label>
          <input
            id='total'
            type='text'
            value={total}
            onChange={handleTotalInputChange}/>
          </div>
          <div className='input-form-col'>
            <label htmlFor="total">Hours since first drink</label>
            <input
              id='hours'
              type='text'
              value={hours}
              onChange={handleHoursInputChange}/>
          </div>      
          <p>Gender</p>
          <div>
            <input
              type='radio'
              name='gender'
              id='male'
              checked={isMale}
              onChange={() => handleGenderChange(true)}/>
            <label htmlFor='male'>Male</label>
          </div>
          <div>
            <input
              type='radio'
              name='gender'
              id='female'
              checked={!isMale}
              onChange={() => handleGenderChange(false)}/>
            <label htmlFor='female'>Female</label>
          </div>      
          <button onClick={calculateBAC} className='bac-btn'>Calculate BAC</button>
        </div>      
        <div>
          {bac > 0 && <span className='bac-result'>Blood alcohol concentration (BAC): {bac}</span>}
        </div>
      </div>      
    </div>
  )
}

export default App
