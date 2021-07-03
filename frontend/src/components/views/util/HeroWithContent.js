import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';
const useStyles = makeStyles((theme) => ({
    par: {
        height: "400px",
        backgroundImage: "url(https://site.ieee.org/r10-htc-2018/files/2018/07/sliit.jpg)",
        backgroundSize: "cover"
    },
    heroh1: {
        color: 'white',
        textAlign: "center",
        fontSize: "50px",
        fontFamily: "system-ui",
        marginTop:"0px"
    },
    outerContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    },
    contentCover: {
        width: "60%",
        height: "300px",
        marginTop: "80px"

    }
}))

function HeroWithContent(props) {
    const classes = useStyles();

    return (
        <Parallax blur={1} className={classes.par} bgImageAlt="the cat" strength={200}>
            <div className={classes.outerContainer}>
                <div className={classes.contentCover}>
                    <h1 className={classes.heroh1}>
                        {props.heading}
                    </h1>
                </div>
            </div>
        </Parallax>
    );
}



export default HeroWithContent;