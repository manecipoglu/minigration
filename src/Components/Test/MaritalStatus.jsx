import React from 'react';
import { connect } from "react-redux";
import * as testActions from "../../redux/actions/testActions";



function MaritalStatus({ maritalStatus, ...props}) {
  
  return (
    <div id="q1-marital-status" className="form-group">
      <label htmlFor="q1">1)	What is your marital status?</label>
      <select 
        id="q1" 
        name="q1" 
        className="form-control mrgn-bttm-md"
        value={maritalStatus} 
        onChange={e => props.dispatch(testActions.setMaritalStatus(e.target.value))}>
        <option value="badvalue" label="Select...">Select...</option>
        <option value="A">Annulled Marriage</option>
        <option value="B">Common-Law</option>
        <option value="C">Divorced / Separated</option>
        <option value="D">Legally Separated</option>
        <option value="E">Married</option>
        <option value="F">Never Married / Single</option>
        <option value="G">Widowed</option>
      </select>
      <h1>{maritalStatus}</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    maritalStatus: state.testReducer.maritalStatus
  }
}

export default connect(mapStateToProps)(MaritalStatus);

