import React, { useContext, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: '𝐉𝐞𝐰𝐞𝐥𝐥𝐞𝐫𝐲',
        imgPath:
            'https://cdn.shopify.com/s/files/1/0023/9193/3039/files/35816_1.jpg?v=1588629457',
    },
    {
        label: '𝐑𝐢𝐧𝐠 𝐬𝐞𝐭',
        imgPath:
            'https://i.shgcdn.com/404ebab1-9c16-4826-9f78-6d78c07c2dbc/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
        label: '𝐄𝐚𝐫𝐫𝐢𝐧𝐠𝐬',
        imgPath:
            'https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/020221115620/billboard/sustainable-jewellery-brands.jpg',
    },
    {
        label: '𝐒𝐞𝐚𝐬𝐨𝐧`𝐬 𝐭𝐫𝐞𝐧𝐝𝐬',
        imgPath:
            'https://www.shoppingschool.ru/netcat_files/147/274/Shablon_870_159.jpg',
    },
    {
        label: '𝐌𝐮𝐥𝐭𝐢𝐥𝐚𝐲𝐞𝐫 𝐩𝐞𝐧𝐝𝐚𝐧𝐭𝐬',
        imgPath:
            'http://v.img.com.ua/b/orig/2/ee/dda6730421baf28183f1a394a4be5ee2.png',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        flexGrow: 1,
        marginLeft: 131,
        marginRight: 131,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 500,
        display: 'block',
        maxWidth: 1000,
        overflow: 'hidden',
        width: '100%',
    },
}));

function Slide() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const history = useHistory()
    const { getProducts } = useContext(productContext)
    const [type, setType] = useState(getType())
    const [price, setprice] = useState(getPrice())

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };



    function getPrice() {
        const search = new URLSearchParams(history.location.search)
        return search.get('price_lte')
    }

    function getType() {
        const search = new URLSearchParams(history.location.search)
        return search.get('type')
    }

    const handleChangePrice = (event, value) => {
        const search = new URLSearchParams(history.location.search)
        search.set('price_lte', value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setprice(value)
    }

    const handleChangeType = (event) => {
        if (event.target.value === 'all') {
            history.push(`${history.location.pathname.replace('type')}`)
            getProducts(history)
            setType(event.target.value)
            return
        }
        const search = new URLSearchParams(history.location.search)
        search.set('type', event.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(history)
        setType(event.target.value)
    }

    const handleDrop = () => {
        history.push(`${history.location.pathname.replace('type')}`)
        history.push(`${history.location.pathname.replace('price_lte')}`)
        getProducts(history)
        setType(getType())
        setprice(getPrice())
    }



    return (
        <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
                <Typography color="inherit">{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 1 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                variant="dots"
                steps={5}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </div>
    );
}

export default Slide;
