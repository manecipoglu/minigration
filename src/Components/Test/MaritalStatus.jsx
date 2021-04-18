import React, { useContext } from 'react';

import { TestContext } from './TestContext';

export default function MaritalStatus() {
  const [test, setTest] = useContext(TestContext);

  return (
    <div id="q1-marital-status" className="form-group">
      <label htmlFor="q1">1)	What is your marital status?</label>
      <select 
        id="q1" 
        name="q1" 
        className="form-control mrgn-bttm-md" 
        onChange={e => setTest(state => ({
          ...state, 
          maritalStatus: e.target.value
          }
        ))}>
        <option value="badvalue" label="Select...">Select...</option>
        <option selected={test.maritalStatus === "A"} value="A">Annulled Marriage</option>
        <option selected={test.maritalStatus === "B"} value="B">Common-Law</option>
        <option selected={test.maritalStatus === "C"} value="C">Divorced / Separated</option>
        <option selected={test.maritalStatus === "D"} value="D">Legally Separated</option>
        <option selected={test.maritalStatus === "E"} value="E">Married</option>
        <option selected={test.maritalStatus === "F"} value="F">Never Married / Single</option>
        <option selected={test.maritalStatus === "G"} value="G">Widowed</option>
      </select>
      <h1>{test.maritalStatus}</h1>
    </div>
  );
}

