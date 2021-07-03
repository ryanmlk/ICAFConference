import React from 'react';
import ContactUsForm from '../components/views/util/ContactUsForm';
import Heading1 from '../components/views/util/Heading1';
import NavBar from '../components/views/util/NavBar';
import ParagraphWithBackground from '../components/views/util/ParagraphWithBackground';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      fontFamily: "Roboto",
      backgroundImage: "url(https://wallpaper.dog/large/10733975.jpg)",
      backgroundRepeat: "repeat",
      backgroundAttachment: "fixed",
      padding: "20px",
      marginTop: "65px"
  }
}));

function News() {
  const classes = useStyles();
  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <div>
      <NavBar/>
      <div className = {classes.root}>
        <Heading1 data={{heading:"Contact Us"}} />
        <ParagraphWithBackground text={paragraph}/>
        <ContactUsForm/>
      </div>
    </div>
    
  );
}

export default News;
