import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  headSpan: {
    width: "55px",
    height: "4px",
    margin: "8px auto 0",
    display: "block",
    backgroundColor: " #ff3366",
    zIndex:1
  }
}));

function ImageTileDisplay(props) {
    const classes = useStyles();

  const images = [
    {
      url:
        'https://static.sliit.lk/wp-content/uploads/2019/12/10111842/The-2019-International-Conference-on-Advancements-in-Computing-ICAC-2019-concluded-successfully-7.jpg',
      width: '40%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFe2aFdhz-37fUh8bUAmoMtFyrb6kAkOypg&usqp=CAU',
      width: '20%',
    },
    {
      url:
        'https://static.sliit.lk/wp-content/uploads/2020/03/12024221/The-preliminary-rounds-of-SLIIT-Softskills-2020-was-successfully-held-at-Baddulla-5.jpg',
      width: '40%',
    },
    {
      url:
        'https://static.sliit.lk/wp-content/uploads/2018/11/05120551/2.jpg',
      width: '38%',
    },
    {
      url:
        'https://www.sliit.lk/wp-content/uploads/2017/11/SLIIT-August-Convocation-2016-05.jpg',
      width: '38%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBhhbKkp0DH1Hy2NFf4WSwty2zOeI8lredA&usqp=CAU',
      width: '24%',
    },
    {
      url:
        'https://static.sliit.lk/wp-content/uploads/2018/11/16061114/DSC0885.jpg',
      width: '40%',
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffKlqnmihknrBmODjZ0SVp1tIN82l-uGDAg&usqp=CAU',
      width: '20%',
    },
    {
      url:
        'https://site.ieee.org/r10-htc-2018/files/2018/07/sliit.jpg',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Past Conferences
      </Typography>
      <span className={classes.headSpan} />
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}



export default ImageTileDisplay;