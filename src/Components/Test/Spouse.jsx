import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function Spouse() {
  const [test, setTest] = useContext(TestContext);

  return (
    <>
      <div id="spouse_questions">
        <div id="q10-s-education">
          <label for="q10">11)	What is the highest level of education for which your spouse or common-law partner's has:</label>
          <ul>
            <li><strong>earned a Canadian degree, diploma or certificate; or</strong></li>
            <li><strong>had an Educational Credential Assessment (ECA)? (ECAs must be from an approved agency, in the last five years)</strong></li>
          </ul>
          <p>To get the correct number of points, make sure you choose the answer that best reflects your case. For example:</p>
          <p> If you have TWO Bachelor&rsquo;s degrees, or one Bachelor&rsquo;s AND a two year college diploma, choose – &ldquo;Two or more certificates, diplomas, or degrees. One must be for a program of three or more years.&rdquo;</p>
          <select 
            id="q10" 
            name="q10" 
            className="form-control mrgn-bttm-md"
            onChange={e => setTest(state => ({
              ...state, 
              spouse: {
                ...test.spouse,
                spouseEducation: e.target.value
              }
            }
            ))}>
            <option value="badvalue" label="Select...">Select...</option>
            <option selected={test.spouse.spouseEducation === "A"} value="A">None, or less than secondary (high school)</option>
            <option selected={test.spouse.spouseEducation === "B"} value="B">Secondary diploma (high school graduation)</option>
            <option selected={test.spouse.spouseEducation === "C"} value="C">One-year program at a university, college, trade or technical school, or other institute</option>
            <option selected={test.spouse.spouseEducation === "D"} value="D">Two-year program at a university, college, trade or technical school, or other institute</option>
            <option selected={test.spouse.spouseEducation === "E"} value="E">Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)</option>
            <option selected={test.spouse.spouseEducation === "F"} value="F">Two or more certificates, diplomas or degrees. One must be for a program of three or more years</option>
            <option selected={test.spouse.spouseEducation === "G"} value="G">Master's degree, or professional degree needed to practice in a licensed profession</option>
            <option selected={test.spouse.spouseEducation === "H"} value="H">Doctoral level university degree (PhD)</option>
          </select>
        </div>
        {test.spouse.spouseEducation && 
          <div id="q11-s-work-xp">
            <label for="q11">12) In the last ten years, how many years of skilled work experience in Canada does your spouse/common-law partner have? </label>
            <p>It must have been paid, full-time (or an equal amount in part-time), and in one or more NOC 0, A or B jobs.</p>
            <select 
              id="q11" 
              name="q11" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                spouse: {
                  ...test.spouse,
                  spouseWorkXp: e.target.value
                }
              }
              ))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.spouse.spouseWorkXp === "A"} value="A">None or less than a year</option>
              <option selected={test.spouse.spouseWorkXp === "B"} value="B">1 year</option>
              <option selected={test.spouse.spouseWorkXp === "C"} value="C">2 years</option>
              <option selected={test.spouse.spouseWorkXp === "D"} value="D">3 years</option>
              <option selected={test.spouse.spouseWorkXp === "E"} value="E">4 years</option>
              <option selected={test.spouse.spouseWorkXp === "F"} value="F">5 years or more</option>
            </select>
          </div>
        }{test.spouse.spouseWorkXp &&
          <div id="q12-s-fol">
            <label for="q12i">13) i) Did your spouse or common-law partner take a language test? If so, which one?</label>
            <p>Test results must be less than two years old.</p>
            <select 
              id="q12i" 
              name="q12i" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                spouse: {
                  ...test.spouse,
                  spouseLanguage: {
                    ...test.spouse.spouseLanguage,
                    spouseLanguage: e.target.value
                  }
                }
              }
              ))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.spouse.spouseLanguage.spouseLanguage === "A"} value="A">CELPIP-G</option>
              <option selected={test.spouse.spouseLanguage.spouseLanguage === "B"} value="B">IELTS</option>
              <option selected={test.spouse.spouseLanguage.spouseLanguage === "C"} value="C">TEF Canada</option>
              <option selected={test.spouse.spouseLanguage.spouseLanguage === "D"} value="D">TCF Canada</option>
              <option selected={test.spouse.spouseLanguage.spouseLanguage === "E"} value="E">not applicable</option>
            </select>
          </div>
        }{test.spouse.spouseLanguage.spouseLanguage === "B" &&
          <div id="q12ii-s-fol">
            <p><strong>ii) Enter the test scores for:</strong></p>
            <label for="q12ii-fol-speaking">Speaking:</label>
            <select 
              id="q12ii-fol-speaking" 
              name="q12ii-fol-speaking" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                spouse: {
                  ...test.spouse,
                  spouseLanguage: {
                    ...test.spouse.spouseLanguage,
                    spouseTestScores: {
                      ...test.spouse.spouseLanguage.spouseTestScores,
                      speaking: e.target.value
                    } 
                  }
                }
              }
              ))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.speaking === "A"} value="A">7.5 - 9.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.speaking === "B"} value="B">7.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.speaking === "C"} value="C">6.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.speaking === "D"} value="D">6.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.speaking === "E"} value="E">5.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.speaking === "F"} value="F">4.0 - 4.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.speaking === "G"} value="G">0 - 3.5</option>
            </select>
            <label for="q12ii-fol-listening">Listening:</label>
            <select 
              id="q12ii-fol-listening" 
              name="q12ii-fol-listening" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                spouse: {
                  ...test.spouse,
                  spouseLanguage: {
                    ...test.spouse.spouseLanguage,
                    spouseTestScores: {
                      ...test.spouse.spouseLanguage.spouseTestScores,
                      listening: e.target.value
                    } 
                  }
                }
              }
              ))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.listening === "A"} value="A">8.5 - 9.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.listening === "B"} value="B">7.5 - 8.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.listening === "C"} value="C">6.0 - 7.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.listening === "D"} value="D">5.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.listening === "E"} value="E">5.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.listening === "F"} value="F">4.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.listening === "G"} value="G">0 - 4.0</option>
            </select>
            <label for="q12ii-fol-reading">Reading:</label>
            <select 
              id="q12ii-fol-reading" 
              name="q12ii-fol-reading" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                spouse: {
                  ...test.spouse,
                  spouseLanguage: {
                    ...test.spouse.spouseLanguage,
                    spouseTestScores: {
                      ...test.spouse.spouseLanguage.spouseTestScores,
                      reading: e.target.value
                    } 
                  }
                }
              }
              ))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.reading === "A"} value="A">8.0 - 9.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.reading === "B"} value="B">7.0 - 7.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.reading === "C"} value="C">6.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.reading === "D"} value="D">6.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.reading === "E"} value="E">5.0 - 5.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.reading === "F"} value="F">4.0 - 4.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.reading === "G"} value="G">3.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.reading === "H"} value="H">0 - 3.0</option>
            </select>
            <label for="q12ii-fol-writing">Writing:</label>
            <select 
              id="q12ii-fol-writing" 
              name="q12ii-fol-writing" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                spouse: {
                  ...test.spouse,
                  spouseLanguage: {
                    ...test.spouse.spouseLanguage,
                    spouseTestScores: {
                      ...test.spouse.spouseLanguage.spouseTestScores,
                      writing: e.target.value
                    } 
                  }
                }
              }
              ))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.writing === "A"} value="A">7.5 - 9.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.writing === "B"} value="B">7.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.writing === "C"} value="C">6.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.writing === "D"} value="D">6.0</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.writing === "E"} value="E">5.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.writing === "F"} value="F">4.0 - 4.5</option>
              <option selected={test.spouse.spouseLanguage.spouseTestScores.writing === "G"} value="G">0 - 3.5</option>
            </select>
          </div>
        }
      </div>
    </>
  );
}
