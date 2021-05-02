import React from 'react';
import CrsStepper from "../Components/Test/CrsStepper";
import { TestProvider, Points } from '../Components/Test/TestContext';

import configureStore from "../redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

function Immigration() {
  return (
    <section style={{margin: "0 10vw"}}>
        <ReduxProvider store={store}>
          <TestProvider>
              <CrsStepper />
              <Points />
          </TestProvider>
        </ReduxProvider>
    </section>
  );
}
export default Immigration;