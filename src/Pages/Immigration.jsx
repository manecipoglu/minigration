import React from 'react';
import CrsStepper from "../Components/Test/CrsStepper";
import { TestProvider } from '../Components/Test/TestContext';

function Immigration() {
  return (
    <section style={{margin: "0 10vw"}}>
        <TestProvider>
            <CrsStepper />
        </TestProvider>
    </section>
  );
}
export default Immigration;