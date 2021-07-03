import React from 'react';
import Chart from '../components/dashboard/Chart';
import { makeStyles } from '@material-ui/core/styles';
import ResearchChart from '../components/dashboard/ResearchChart';
import AdminNavbar from '../components/views/AdminNavBar';
import Heading1 from '../components/views/util/Heading1';

const useStyles = makeStyles((theme) => ({
    chartCover:{
        width:"45%"
    },
    chartContainer:{
        display:"flex",
        flexDirection:'row',
        justifyContent:"space-around",
        marginTop:"100px"
    }
}));

function Dashboard() {
    const classes = useStyles();

    return (
        <div>
            <AdminNavbar/>
        <div style={{ padding: "20px",marginTop:"10px" }}>
        <div className={classes.chartContainer}>
            <div className={classes.chartCover}>
                <Heading1 data={{heading:"Workshops overview"}}/>
                <Chart/>
            </div>
            <div className={classes.chartCover}>
            <Heading1 data={{heading:"Research overview"}}/>
                <ResearchChart/>
            </div>
        </div>
        </div>
        </div>

    );
}

export default Dashboard;
