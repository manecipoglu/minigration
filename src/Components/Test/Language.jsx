import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function Language() {

  const [test, setTest] = useContext(TestContext);

  return (
    <>
      <div id="q5-ol" className="form-group">
        <p><strong>5)	Official languages: Canada's official languages are English and French.</strong></p>
        <p><strong>You need to submit language test results that are less than two years old for all programs under Express Entry, even if English or French is your first language.</strong></p>
        <div id="q5i-fol">
          <label for="q5i">i.	Are your test results less than two years old?</label>
          <select 
            id="q5i" 
            name="q5i" 
            className="form-control mrgn-bttm-md"
            onChange={e => setTest(state => ({
              ...state, 
              language: {
                ...state.language,
                lessThanTwoYears: e.target.value
              }
            }))}>
            <option value="badvalue" label="Select...">Select...</option>
            <option value="B">No</option>
            <option value="A">Yes</option>
          </select>
        </div>
        {test.language.lessThanTwoYears === "B" && 
          <div>
            <h1>
              Based on your answers, you do not appear to be eligible for Express Entry at this time.
              To submit an Express Entry profile, you must prove your language skills by taking an approved language test.
            </h1>
          </div>
        }{test.language.lessThanTwoYears === "A" && 
          <div id="q5i-a-fol">
            <label for="q5i-a">ii.	Which language test did you take for your first official language? </label>
            <select 
              id="q5i-a" 
              name="q5i-a" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  languageTest: e.target.value
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option value="A">CELPIP-G</option>
              <option value="B">IELTS</option>
              <option value="C">TEF Canada</option>
              <option value="D">TCF Canada</option>
            </select>
          </div>
        }
        {test.language.languageTest === "B" &&
          <div id="q5i-b-fol">
            <p>Enter your test scores:</p>
            <label for="q5i-b-speaking">Speaking:</label>
            <select 
              id="q5i-b-speaking" 
              name="q5i-b-speaking" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  testScores: {
                    ...state.language.testScores,
                    speaking: e.target.value
                  }
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.testScores.speaking === "A"} value="A">7.5 - 9.0</option>
              <option selected={test.language.testScores.speaking === "B"} value="B">7.0</option>
              <option selected={test.language.testScores.speaking === "C"} value="C">6.5</option>
              <option selected={test.language.testScores.speaking === "D"} value="D">6.0</option>
              <option selected={test.language.testScores.speaking === "E"} value="E">5.5</option>
              <option selected={test.language.testScores.speaking === "F"} value="F">4.0 - 4.5</option>
              <option selected={test.language.testScores.speaking === "G"} value="G">0 - 3.5</option>
            </select>
            <label for="q5i-b-listening">Listening:</label>
            <select 
              id="q5i-b-listening" 
              name="q5i-b-listening" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  testScores: {
                    ...state.language.testScores,
                    listening: e.target.value
                  }
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.testScores.listening === "A"} value="A">8.5 - 9.0</option>
              <option selected={test.language.testScores.listening === "B"} value="B">7.5 - 8.0</option>
              <option selected={test.language.testScores.listening === "C"} value="C">6.0 - 7.0</option>
              <option selected={test.language.testScores.listening === "D"} value="D">5.5</option>
              <option selected={test.language.testScores.listening === "E"} value="E">5.0</option>
              <option selected={test.language.testScores.listening === "F"} value="F">4.5</option>
              <option selected={test.language.testScores.listening === "G"} value="G">0 - 4.0</option>
            </select>
            <label for="q5i-b-reading">Reading:</label>
            <select 
              id="q5i-b-reading" 
              name="q5i-b-reading" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  testScores: {
                    ...state.language.testScores,
                    reading: e.target.value
                  }
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.testScores.reading === "A"} value="A">8.0 - 9.0</option>
              <option selected={test.language.testScores.reading === "B"} value="B">7.0 - 7.5</option>
              <option selected={test.language.testScores.reading === "C"} value="C">6.5</option>
              <option selected={test.language.testScores.reading === "D"} value="D">6.0</option>
              <option selected={test.language.testScores.reading === "E"} value="E">5.0 - 5.5</option>
              <option selected={test.language.testScores.reading === "F"} value="F">4.0 - 4.5</option>
              <option selected={test.language.testScores.reading === "G"} value="G">3.5</option>
              <option selected={test.language.testScores.reading === "H"} value="H">0 - 3.0</option>
            </select>
            <label for="q5i-b-writing">Writing:</label>
            <select 
              id="q5i-b-writing" 
              name="q5i-b-writing" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  testScores: {
                    ...state.language.testScores,
                    writing: e.target.value
                  }
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.testScores.writing === "A"} value="A">7.5 - 9.0</option>
              <option selected={test.language.testScores.writing === "B"} value="B">7.0</option>
              <option selected={test.language.testScores.writing === "C"} value="C">6.5</option>
              <option selected={test.language.testScores.writing === "D"} value="D">6.0</option>
              <option selected={test.language.testScores.writing === "E"} value="E">5.5</option>
              <option selected={test.language.testScores.writing === "F"} value="F">4.0 - 4.5</option>
              <option selected={test.language.testScores.writing === "G"} value="G">0 - 3.5</option>
            </select>
          </div>
        }
        {Object.values(test.language.testScores).every(x => (x !== '')) &&
          <div id="q5ii-sol">
            <label for="q5ii">iii. Do you have other language results?</label>
            <p>If so, which language test did you take for your second official language?</p>
            <p>Test results must be less than two years old.</p>
            <select 
              id="q5ii" 
              name="q5ii" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  otherLanguage: e.target.value
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.otherLanguage === "A"} value="A">TEF Canada</option>
              <option selected={test.language.otherLanguage === "B"} value="B">TCF Canada</option>
              <option selected={test.language.otherLanguage === "C"} value="C">not applicable</option>
            </select>
          </div>
        }
        {test.language.otherLanguage === "A" &&
          <div id="q5ii-b-sol">
            <p><strong>Enter your test scores for:</strong></p>
            <label for="q5ii-sol-speaking">Speaking:</label>
            <select 
              id="q5ii-sol-speaking" 
              name="q5ii-sol-speaking" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  otherTestScores: {
                    ...state.language.otherTestScores,
                    speaking: e.target.value
                  }
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.otherTestScores.speaking === "A"} value="A">393 - 450</option>
              <option selected={test.language.otherTestScores.speaking === "B"} value="B">371 - 392</option>
              <option selected={test.language.otherTestScores.speaking === "C"} value="C">349 - 370</option>
              <option selected={test.language.otherTestScores.speaking === "D"} value="D">310 - 348</option>
              <option selected={test.language.otherTestScores.speaking === "E"} value="E">271 - 309</option>
              <option selected={test.language.otherTestScores.speaking === "F"} value="F">226 - 270</option>
              <option selected={test.language.otherTestScores.speaking === "G"} value="G">181 - 225</option>
              <option selected={test.language.otherTestScores.speaking === "H"} value="H">0 - 180</option>
            </select>
            <label for="q5ii-sol-listening">Listening:</label>
            <select 
              id="q5ii-sol-listening" 
              name="q5ii-sol-listening" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  otherTestScores: {
                    ...state.language.otherTestScores,
                    listening: e.target.value
                  }
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.otherTestScores.listening === "A"} value="A">316 - 360</option>
              <option selected={test.language.otherTestScores.listening === "B"} value="B">298 - 315</option>
              <option selected={test.language.otherTestScores.listening === "C"} value="C">280 - 297</option>
              <option selected={test.language.otherTestScores.listening === "D"} value="D">249 - 279</option>
              <option selected={test.language.otherTestScores.listening === "E"} value="E">217 - 248</option>
              <option selected={test.language.otherTestScores.listening === "F"} value="F">181 - 216</option>
              <option selected={test.language.otherTestScores.listening === "G"} value="G">145 - 180</option>
              <option selected={test.language.otherTestScores.listening === "H"} value="H">0 - 144</option>
            </select>
            <label for="q5ii-sol-reading">Reading:</label>
            <select 
              id="q5ii-sol-reading" 
              name="q5ii-sol-reading" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  otherTestScores: {
                    ...state.language.otherTestScores,
                    reading: e.target.value
                  }
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.otherTestScores.reading === "A"} value="A">263 - 300</option>
              <option selected={test.language.otherTestScores.reading === "B"} value="B">248 - 262</option>
              <option selected={test.language.otherTestScores.reading === "C"} value="C">233 - 247</option>
              <option selected={test.language.otherTestScores.reading === "D"} value="D">207 - 232</option>
              <option selected={test.language.otherTestScores.reading === "E"} value="E">181 - 206</option>
              <option selected={test.language.otherTestScores.reading === "F"} value="F">151 - 180</option>
              <option selected={test.language.otherTestScores.reading === "G"} value="G">121 - 150</option>
              <option selected={test.language.otherTestScores.reading === "H"} value="H">0 - 120</option>
            </select>
            <label for="q5ii-sol-writing">Writing:</label>
            <select 
              id="q5ii-sol-writing" 
              name="q5ii-sol-writing" 
              className="form-control mrgn-bttm-md"
              onChange={e => setTest(state => ({
                ...state, 
                language: {
                  ...state.language,
                  otherTestScores: {
                    ...state.language.otherTestScores,
                    writing: e.target.value
                  }
                }
              }))}>
              <option value="badvalue" label="Select...">Select...</option>
              <option selected={test.language.otherTestScores.writing === "A"} value="A">393 - 450</option>
              <option selected={test.language.otherTestScores.writing === "B"} value="B">371 - 392</option>
              <option selected={test.language.otherTestScores.writing === "C"} value="C">349 - 370</option>
              <option selected={test.language.otherTestScores.writing === "D"} value="D">310 - 348</option>
              <option selected={test.language.otherTestScores.writing === "E"} value="E">271 - 309</option>
              <option selected={test.language.otherTestScores.writing === "F"} value="F">226 - 270</option>
              <option selected={test.language.otherTestScores.writing === "G"} value="G">181 - 225</option>
              <option selected={test.language.otherTestScores.writing === "H"} value="H">0 - 180</option>
            </select>
          </div>
        }
      </div>
    </>
  )
}