import { Grid } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './OfferSlider.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://i.ibb.co/YfCQgqp/s-light1.jpg',
  },
  {
    imgPath:
      'https://i.ibb.co/02crwpt/s-light2.jpg',
  },
  {
    imgPath:
      'https://i.ibb.co/KbDSfFq/s-light3.jpg',
  },
 
];

const OfferSlider = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    return (
        <div>
            <h1>50% diacount going</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img  sx={{mx:"auto",}} style={{ maxWidth:'100%'}} src="https://i.ibb.co/PGZMDN4/50-discount.jpg" alt="" />
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className="slider">
                   <Box sx={{flexGrow: 1 }}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        // height: 50,
                        // ps:4,
                        bgcolor: 'background.default',
                        }}
                    >
                        <Typography>{images[activeStep].label}</Typography>
                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                height: 1,
                                // display: 'block',
                                maxWidth: 600,
                                overflow: 'hidden',
                                width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                            ) : null}
                        </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button>
                        }
                        backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                            ) : (
                            <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                        }
                    />
                    </Box>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default OfferSlider;