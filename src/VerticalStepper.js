import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import Chip from '@material-ui/core/Chip';
import clsx from 'clsx';

/**
 * Stepper Style has been defined
 * Started Here
 */

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#fda328',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    idle: {
        color: '#d2cef3'
    },
    pending: {
        color: '#fda328'
    },
    failed: {
        color: '#fc495c'
    },
    success: {
        color: '#38d377'
    },
    circle: {
        width: 8,
        height: 8,
        marginLeft: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    }
});

const useChipStyles = makeStyles({
    root: {
        color: '#fff',
        fontSize: 11,
        height: 22,
        alignItems: 'center',

    },
    idleRoot: {
        fontSize: 12,
        color: '#4b41ba'
    },
    subText: {
        marginLeft: 5,
        color: '#bbbbbb',
        fontSize: 11
    },
    idle: {
        background: '#d2cef3'
    },
    pending: {
        background: '#fda328'
    },
    failed: {
        background: '#fc495c'
    },
    success: {
        background: '#38d377'
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
/**
 * End Here
 */


/**
 * Render the circle based on status
 */
const QontoStepIcon = (props) => {
    const classes = useQontoStepIconStyles();
    const { status } = props;
    return (
        <div
            className={clsx(classes.root, {
                [classes.idle]: status === 'IDLE',
                [classes.pending]: status === 'PENDING',
                [classes.failed]: status === 'FAILED',
                [classes.success]: status === 'SUCCESS'
            })}
        >
            <div className={classes.circle} />
        </div>
    );
}

/**
 * Render the pills based on status
 * @param {*} props 
 */
const ContentEle = (props) => {
    const chipClasses = useChipStyles();
    const { status, title, annotation } = props;
    const ChipElement = ({
        label = 'pending'
    }) => {
        return (
            <div>
                <Chip className={clsx(chipClasses.root, {
                    [chipClasses[label]]: true
                })} label={label.toUpperCase()} />
                <span className={chipClasses.subText}>{title}</span>
                {annotation(props)}
            </div>
        )
    }
    switch (status) {
        case 'PENDING':
            return <ChipElement label={'pending'} title={title} />
        case 'FAILED':
            return <ChipElement label={'failed'} title={title} />
        case 'SUCCESS':
            return <ChipElement label={'success'} title={title} />
        default:
            return <span className={clsx(chipClasses.idleRoot)}>{title}</span>
    }
}


export default function VerticalStepper({
    steps = [],
    activeStep = 0
}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel style={{ alignItems: 'baseline' }} StepIconComponent={(props) => {
                            return <QontoStepIcon {...step} />
                        }}><ContentEle {...step} /></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}