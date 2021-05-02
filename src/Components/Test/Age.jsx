import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function Age() {
  const [test, setTest] = useContext(TestContext);

  return (
    <div id="q3-age" class="form-group">
      <label htmlFor="q3">3)	How old are you? </label>
      <p>Choose the best answer:</p>
      <ul>
        <li>If you’ve been invited to apply, enter your age on the date you were invited.<br />
          OR</li>
        <li>If you plan to complete an Express Entry profile, enter your current age.</li>
      </ul>
      <select 
        id="q3" 
        name="q3" 
        className="form-control mrgn-bttm-md" 
        value={test.age}
        onChange={e => setTest(state => ({
            ...state, 
            age: e.target.value
          }
        ))}>
        <option value="badvalue" label="Select...">Select...</option>
        <option value="A">17 years of age or less</option>
        <option value="B">18 years of age</option>
        <option value="C">19 years of age</option>
        <option value="D">20 years of age</option>
        <option value="E">21 years of age</option>
        <option value="F">22 years of age</option>
        <option value="G">23 years of age</option>
        <option value="H">24 years of age</option>
        <option value="I">25 years of age</option>
        <option value="J">26 years of age</option>
        <option value="K">27 years of age</option>
        <option value="L">28 years of age</option>
        <option value="M">29 years of age</option>
        <option value="N">30 years of age</option>
        <option value="O">31 years of age</option>
        <option value="P">32 years of age</option>
        <option value="Q">33 years of age</option>
        <option value="R">34 years of age</option>
        <option value="S">35 years of age</option>
        <option value="T">36 years of age</option>
        <option value="U">37 years of age</option>
        <option value="V">38 years of age</option>
        <option value="W">39 years of age</option>
        <option value="X">40 years of age</option>
        <option value="Y">41 years of age</option>
        <option value="Z">42 years of age</option>
        <option value="AA">43 years of age</option>
        <option value="AB">44 years of age</option>
        <option value="AC">45 years of age or more</option>
      </select>
      <div>
        <h1>{test.age}</h1>
      </div>
    </div>
  );
}

