import React, { useState } from 'react';
import './App.css';

import ToggleSwitch from './components/ToggleSwitch';

function App() {
  let [newsletter, setNewsletter] = useState(false);
  let [daily, setDaily] = useState(false);
  let [weekly, setWeekly] = useState(false);
  let [monthly, setMonthly] = useState(false);

  const onNewsletterChange = (value) => {
    setNewsletter(value);
    if (!value) {
      setDaily(false);
      setWeekly(false);
      setMonthly(false);
    }
  }

  return (
    <div className="container">
      <h1>Opt-in for Newsletter</h1>
      <div>
        <ToggleSwitch id="newsletter" value={newsletter} onSwitch={onNewsletterChange} />
        <label htmlFor="newsletter">Send me Marketing Emails!</label>
      </div>
      <div>
        <ToggleSwitch id="daily" small disabled={!newsletter} value={daily} onSwitch={setDaily} />
        <label htmlFor="daily">Daily Briefs</label>
      </div>
      <div>
         <ToggleSwitch id="weekly" small disabled={!newsletter} value={weekly} onSwitch={setWeekly}/>
        <label htmlFor="weekly">Weekly Summary</label>
      </div>
      <div>
        <ToggleSwitch id="monthly" small disabled={!newsletter} value={monthly} onSwitch={setMonthly}/>
        <label htmlFor="monthly">Monthly Digest</label>
      </div>
      <div>
        <h2>States</h2>
        <p>Newsletter: {String(newsletter)}</p>
        <p>Daily: {String(daily)}</p>
        <p>Weekly: {String(weekly)}</p>
        <p>Monthly: {String(monthly)}</p>
      </div>
    </div>
  );
}

export default App;
