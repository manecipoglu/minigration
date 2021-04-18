import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function Partner() {

  const [test, setTest] = useContext(TestContext);

  return (
    <>
      <div id="q2i-spouse-cit" className="form-group">
        <label htmlFor="q2i">2) i.	Is your spouse or common-law partner a citizen or permanent resident of Canada?</label>
          <select 
            id="q2i" 
            name="q2i" 
            className="form-control mrgn-bttm-md" 
            onChange={e => setTest(state => ({
              ...state, 
              partnerStatus: { 
                spouseCit: e.target.value,
                spouseJoining: e.target.value === "B" ? "" : state.partnerStatus.spouseJoining
              }
            }
          ))}>
          <option value="badvalue" label="Select...">Select...</option>
          <option selected={test.partnerStatus.spouseCit === "A"} value="A">No</option>
          <option selected={test.partnerStatus.spouseCit === "B"} value="B">Yes</option>
        </select>
      </div>
      {test.partnerStatus.spouseCit === "A" &&
      <div id="q2ii-spouse-joining" className="form-group">
        <label htmlFor="q2ii">2) ii.	Will your spouse or common-law partner come with you to Canada?</label>
        <select 
          id="q2ii" 
          name="q2ii" 
          className="form-control mrgn-bttm-md" 
          onChange={e => setTest(state => ({
              ...state, 
              partnerStatus: {
                ...state.partnerStatus, 
                spouseJoining: e.target.value
              }
            }
          ))}>
          <option value="badvalue" label="Select...">Select...</option>
          <option selected={test.partnerStatus.spouseJoining === "A"} value="A">No</option>
          <option selected={test.partnerStatus.spouseJoining === "B"} value="B">Yes</option>
        </select>
      </div>}
      <div>
        <h1>{test.partnerStatus.spouseCit}</h1>
        <h1>{test.partnerStatus.spouseJoining}</h1>
      </div>
    </>
  );
}

