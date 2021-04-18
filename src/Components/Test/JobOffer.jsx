import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function JobOffer() {
  const [test, setTest] = useContext(TestContext);

  return (
    <>
      <div id="q8-offer">
        <p><strong>Additional Points</strong></p>
        <label for="q8">8)	Do you have a valid job offer supported by a Labour Market Impact Assessment (<a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/offer-employment/lmia-exempt.html">if needed</a>)?</label>
        <p>A valid job offer must be </p>
        <ul>
          <li>full-time</li>
          <li>in a skilled job listed as Skill Type 0, or Skill Level A or B in the 2011 National Occupational ClassNameification</li>
          <li>supported by a Labour Market Impact Assessment (LMIA) or exempt from needing one</li>
          <li>for one year from the time you become a permanent resident</li>
        </ul>
        <p>A job offer isn’t valid if your employer is:</p>
        <ul>
          <li>an embassy, high commission or consulate in Canada or</li>
          <li>on the list of ineligible employers.</li>
        </ul>
        <p>Whether an offer is valid or not also depends on different factors, depending on your case. See a <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/offer-employment.html">full list of criteria for valid job offers</a>.</p>
        <select 
          id="q8" 
          name="q8" 
          className="form-control mrgn-bttm-md"
          onChange={e => setTest(state => ({
            ...state, 
            jobOffer: {
              ...state.jobOffer,
              jobOffer: e.target.value
            }
          }
          ))}>
          <option value="badvalue" label="Select...">Select...</option>
          <option selected={test.jobOffer.jobOffer === "A"} value="A">No</option>
          <option selected={test.jobOffer.jobOffer === "B"} value="B">Yes</option>
        </select>
      </div>
      {test.jobOffer.jobOffer === "B" && 
        <div id="q8-noc">
          <label for="q8a">8a)	Which NOC skill type or level is the job offer?</label>
          <p>You can use our online tool to find out if you don’t know.</p>
          <select 
            id="q8a" 
            name="q8a" 
            className="form-control mrgn-bttm-md"
            onChange={e => setTest(state => ({
            ...state, 
            jobOffer: {
              ...state.jobOffer,
              jobNOC: e.target.value
            }
          }
          ))}>
            <option value="badvalue" label="Select...">Select...</option>
            <option selected={test.jobOffer.jobNOC === "A"} value="A">NOC Skill Type 00</option>
            <option selected={test.jobOffer.jobNOC === "B"} value="B">NOC Skill Level A or B or  any Type 0 other than 00</option>
            <option selected={test.jobOffer.jobNOC === "C"} value="C">NOC Skill Level C or D</option>
          </select>
        </div>
      }
    </>
  );
}

