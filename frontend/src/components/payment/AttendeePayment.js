import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useDispatch, useSelector } from 'react-redux';
import { regEndUser } from '../../redux/actions/EndUser.action';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: 20, 
        height:'70vh', 
        width:'80%', 
        margin:"20px auto",
        backgroundColor: 'rgba(255,245,248,0.7)',
        borderRadius: "15px"
    },
    iconStyle: {
        backgroundColor: '#FFF',
        color: '#ff3366'
    },
    textStyle: {
        color: '#333'
    },
    fieldStyle: {
        margin:"10px auto",
        color: '#000'   
    },
    margin: {
        margin: theme.spacing(1),
    }
}));


function AttendeePayment () {
    const classes = useStyles();
    const dispatch = useDispatch();
    let history = useHistory();
    const globalState = useSelector((state) => state);

    //Event handlers
    const handleFinish = () => {
        regEndUser({
            email: globalState.enduser.enduser.email, 
            type: "researcher", 
            contact: globalState.enduser.enduser.contact, 
            name: globalState.enduser.enduser.fName + " " + globalState.enduser.enduser.lName,
            institution: globalState.enduser.enduser.institution},dispatch);
        history.push('/');            
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return(
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <h2 className={classes.textStyle}><AssignmentIcon fontSize="large"/> Research Paper Upload</h2>
                <TextField name="cardNo" label="Card Number" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
                <h4 className={classes.textStyle}>Expiry</h4>
                <TextField name="expMon" label="Month" onChange={handleChange} required className={classes.fieldStyle}/>
                <TextField name="expYear" label="Year" onChange={handleChange} required className={classes.fieldStyle}/>
                <TextField name="paperTopic" label="Security Code" onChange={handleChange} fullWidth required className={classes.fieldStyle}/>
            </Paper>
            <Button
                variant="contained"
                color="primary"
                onClick={handleFinish}
                className={classes.margin}
              >
                Finish
            </Button>
        </Grid>
    );
}

export default AttendeePayment;