import React, { useContext } from 'react';
import { TestContext } from './TestContext';

export default function Certificate() {
  const [test, setTest] = useContext(TestContext);

  return (
    <div id="q7-certificate">
      <label for="q7">7)	Do you have a certificate of qualification from a Canadian province, territory or federal body?</label>
      <p><strong>Note: </strong>A certificate of qualification lets people work in some skilled trades in Canada. Only the provinces, territories and a federal body can issue these certificates. To get one, a person must have them assess their training, trade experience and skills to and then pass a certification exam.</p>
      <p> People usually have to go to the province or territory to be assessed. They may also need experience and training from an employer in Canada. </p>
      <p>This isn’t the same as a nomination from a province or territory.</p>
      <select 
        id="q7" 
        name="q7" 
        className="form-control mrgn-bttm-md"
        value={test.certificate}
        onChange={e => setTest(state => ({
            ...state, 
            certificate: e.target.value
          }
        ))}>
        <option value="badvalue" label="Select...">Select...</option>
        <option value="A">No</option>
        <option value="B">Yes</option>
      </select>
    </div>
  );
}

