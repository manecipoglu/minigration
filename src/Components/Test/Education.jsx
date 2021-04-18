import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function Education() {

  const [test, setTest] = useContext(TestContext);

  return (
    <>
      <div id="q4-education" className="form-group">
        <label htmlFor="q4">4)	What is your level of education?</label>
        <p>Enter the highest level of education for which you:</p>
        <ul>
          <li>earned a <strong>Canadian degree, diploma or certificate</strong> or</li>
          <li>had an Educational Credential Assessment (ECA) if you did your study outside Canada. (ECAs must be from an approved agency, in the last five years)</li>
        </ul>
        <p>Note: a Canadian degree, diploma or certificate must either have been earned at an accredited Canadian university, college, trade or technical school, or other institute in Canada. Distance learning counts for education points, but not for bonus points in your profile or application.</p>
        <select 
          id="q4" 
          name="q4" 
          className="form-control mrgn-bttm-md" 
          onChange={e => setTest(state => ({
            ...state, 
            education: {
              ...state.education,
              education: e.target.value
            }
          }))}>
          <option value="badvalue" label="Select...">Select...</option>
          <option selected={test.education.education === "A"} value="A">None, or less than secondary (High School)</option>
          <option selected={test.education.education === "B"} value="B">Secondary Diploma (High School Graduation)</option>
          <option selected={test.education.education === "C"} value="C">One-year program at a university, college, trade or technical school or other institution</option>
          <option selected={test.education.education === "D"} value="D">Two-year program at a university, college, trade or technical school or other institution</option>
          <option selected={test.education.education === "E"} value="E">Bachelor's Degree (Three or more year program at a university, college, trade or technical school or other institution</option>
          <option selected={test.education.education === "F"} value="F">Two or more certificates, diplomas or degrees. One must be for a program of three or more years</option>
          <option selected={test.education.education === "G"} value="G">Masters's Degree, or professional degree needed to practice in a licensed profession</option>
          <option selected={test.education.education === "H"} value="H">Doctoral level university degree (PhD)</option>
        </select>
      </div>
      {test.education.education &&
        <>
          <div id="q4b-education" className="form-group">
            <label htmlFor="q4b">4b) Have you earned a Canadian degree, diploma or certificate?</label>
            <p>Note: to answer yes:</p>
            <ul>
              <li>English or French as a Second Language must not have made up more than half your study</li>
              <li>you must not have studied under an award that required you to return to your home country after graduation to apply your skills and knowledge </li>
              <li>you must have studied at a school within Canada (foreign campuses don&rsquo;t count)</li>
              <li>you had to be enrolled full time for at least eight months, and have been physically present in Canada for at least eight months</li>
            </ul>
            <select 
              id="q4b" 
              name="q4b" 
              className="form-control mrgn-bttm-md" 
              onChange={e => setTest(state => ({
                ...state, 
                education: {
                  ...state.education,
                  cadDegree: e.target.value
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option value="A" label="No">No</option>
              <option value="B" label="Yes">Yes</option>
            </select>
          </div>
          {test.education.cadDegree === "B" && 
            <div id="q4c-education" className="form-group">
              <label htmlFor="q4c">4c) Choose the best answer to describe this level of education.</label>
              <select 
                id="q4c" 
                name="q4c" 
                className="form-control mrgn-bttm-md" 
                onChange={e => setTest(state => ({
                ...state, 
                education: {
                  ...state.education,
                  levelCadDegree: e.target.value
                }
              }))}>
                <option value="badvalue" label="Select...">Select...</option>
                <option value="A">Secondary (high school) or less</option>
                <option value="B">One- or two-year diploma or certificate</option>
                <option value="C">Degree, diploma or certificate of three years or longer OR a Master’s, professional or doctoral degree of at least one academic year</option>
              </select>
            </div>
          }
        </>
      }
    </>
  );
}

