import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function Sibling() {
  const [test, setTest] = useContext(TestContext);

  return (
    <div id="q10-sibling">
      <label for="q10i">10)	Do you or your spouse or common law partner (if they will come with you to Canada) have at least one brother or sister living in Canada who is a citizen or permanent resident?</label>
      <p><strong>Note: to answer yes, the brother or sister must be:</strong></p>
      <ul>
        <li>18 years old or older</li>
        <li>related to you or your partner by blood, marriage, common-law partnership or adoption</li>
        <li>have a parent in common with you or your partner</li>
      </ul>
      <p>A brother or sister is related to you by:</p>
      <ul>
        <li>blood (biological)</li>
        <li>adoption</li>
        <li>marriage (step-brother or step-sister)</li>
      </ul>
      <select 
        id="q10i" 
        name="q10i" 
        className="form-control mrgn-bttm-md"
        onChange={e => setTest(state => ({
            ...state, 
            sibling: e.target.value
          }
        ))}>
        <option value="badvalue" label="Select...">Select...</option>
        <option selected={test.sibling === "A"} value="A">No</option>
        <option selected={test.sibling === "B"} value="B">Yes</option>
      </select>
    </div>
  );
}

