import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EndUserRegForm from '../components/user/EndUserRegForm';
import WorkshopPropUpload from '../components/workshopRegistration/WorkshopPropUpload';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../redux/constants/action-types';
import NavBar from '../components/views/util/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto",
    backgroundImage: "url(https://wallpaper.dog/large/10733975.jpg)",
    backgroundRepeat: "repeat",
    backgroundAttachment: "fixed",
    padding: "20px",
    marginTop: "65px"
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    background: "rgba(255,255,255,0.0)"
  }
}));

function getSteps() {
  return ['Register Researcher', 'Upload Workshop Proposal'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <EndUserRegForm/>;
    case 1:
        return <WorkshopPropUpload/>;
    default:
      return 'Unknown step';
  }
}

export default function WorkshopRegister() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  if(globalState.enduser.next){
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch({
      type: ActionTypes.ENDUSER_REGISTER_NEXT,
      payload: ""
    });
  }

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <NavBar/>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {getStepContent(activeStep)}
        </div>
      </div>
    </div>
  );
}
