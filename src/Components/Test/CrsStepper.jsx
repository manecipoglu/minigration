import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import MaritalStatus from './MaritalStatus';
import Partner from './Partner';
import Age from './Age';
import Education from './Education';
import Language from './Language';
import WorkExperience from './WorkExperience';
import Certificate from './Certificate';
import JobOffer from './JobOffer';
import Nomination from './Nomination';
import Sibling from './Sibling';
import Spouse from './Spouse';

import { TestContext } from './TestContext';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    'Marital Status', 
    'Partner', 
    'Age', 
    'Education', 
    'Languages', 
    'Work Experience',
    'Certificate of Qualification', 
    'Job Offer', 
    'Nomination', 
    'Sibling', 
    'Spouse'
  ];
}

function getStepContent(stepIndex) {

  switch (stepIndex) {
    case 0:
      return <MaritalStatus />;
    case 1:
      return <Partner />;
    case 2:
      return <Age />;
    case 3:
      return <Education />;
    case 4:
      return <Language />;
    case 5:
      return <WorkExperience />;
    case 6:
      return <Certificate />;
    case 7:
      return <JobOffer />;
    case 8:
      return <Nomination />;
    case 9:
      return <Sibling />;
    case 10:
      return <Spouse />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function CrsStepper() {
  const [test, setTest] = useContext(TestContext);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if((activeStep === 0 || activeStep === 9) && test.maritalStatus !== "B" && test.maritalStatus !== "E") {
      setActiveStep(prevActiveStep => prevActiveStep + 2);
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if(activeStep === 2 && test.maritalStatus !== "B" && test.maritalStatus !== "E") {
      setActiveStep(prevActiveStep => prevActiveStep - 2);
    } else {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            <Typography>{getStepContent(index)}</Typography>
            <div className={classes.actionsContainer}>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          </StepContent>
        </Step>
      ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
