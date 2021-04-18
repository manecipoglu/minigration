import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function Nomination() {
  const [test, setTest] = useContext(TestContext);

  return (
    <div id="q9-nomination">
      <label for="q9">9)	Do you have a nomination certificate from a province or territory?</label>
      <select 
        id="q9" 
        name="q9" 
        className="form-control mrgn-bttm-md"
        onChange={e => setTest(state => ({
            ...state, 
            nomination: e.target.value
          }
        ))}>
        <option value="badvalue" label="Select...">Select...</option>
        <option selected={test.nomination === "A"} value="A">No</option>
        <option selected={test.nomination === "B"} value="B">Yes</option>
      </select>
    </div>
  );
}
