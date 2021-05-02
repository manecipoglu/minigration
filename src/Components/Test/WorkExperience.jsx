import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function WorkExperience() {
  const [test, setTest] = useContext(TestContext);

  return (
    <>
      <div id="q6-work-xp" className="form-group">
        <p><strong>6)	Work Experience</strong></p>
        <div id="q6i-canada">
          <label for="q6i">i.	In the last ten years, how many years of skilled work experience in Canada do you have? </label>
          <p>It must have been paid and full-time (or an equal amount in part-time).</p>
          <p><strong>Note:</strong> In Canada, the National Occupational ClassNameification (NOC) is the official list of all the jobs in the Canadian labour market. It describes each job according to skill type, group and level.</p>
          <p>&quot;Skilled work&quot; in the NOC is:</p>
          <ul>
            <li>managerial jobs (NOC Skill Level 0)</li>
            <li>professional jobs (NOC Skill Type A)</li>
            <li>technical jobs and skilled trades/manual work (NOC Skill Type B)</li>
          </ul>
          <p> If you aren’t sure of the NOC level for this job, you can <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/find-national-occupation-code.html">find your NOC</a>.</p>
          <select 
            id="q6i" 
            name="q6i" 
            className="form-control mrgn-bttm-md"
            value={test.canadianWorkExperience}
            onChange={e => setTest(state => ({
              ...state, 
              canadianWorkExperience: e.target.value
              }
            ))}
          >
            <option value="badvalue" label="Select...">Select...</option>
            <option value="A">None or less than a year</option>
            <option value="B">1 year</option>
            <option value="C">2 years</option>
            <option value="D">3 years</option>
            <option value="E">4 years</option>
            <option value="F">5 years or more</option>
          </select>
        </div>
        {test.canadianWorkExperience && 
          <div id="q6ii-foreign">
            <label for="q6ii">ii. In the last 10 years, how many total years of foreign skilled work experience do you have? </label>
            <p>It must have been paid, full-time (or an equal amount in part-time), and in only one occupation (NOC skill type 0, A or B).</p>
            <select 
              id="q6ii" 
              name="q6ii" 
              className="form-control mrgn-bttm-md"
              value={test.foreignWorkExperience}
              onChange={e => setTest(state => ({
              ...state, 
              foreignWorkExperience: e.target.value
              }
            ))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option value="A">None or less than a year</option>
              <option value="B">1 year</option>
              <option value="C">2 years</option>
              <option value="D">3 years or more</option>
            </select>
          </div>
        }
      </div>
    </>
  );
}

