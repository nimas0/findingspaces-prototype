/* eslint-disable linebreak-style */
import { Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RUG from 'react-upload-gallery';
import 'react-upload-gallery/dist/style.css';

const PhotoGallery = ({ initial }) => (
  <>
    <RUG initialState={initial} />
    <Typography
      sx={{ mt: 3 }}
      align='center'
      variant="h2"
      color='info'
      component="div"
      gutterBottom
    >Hold Drag and Sort Items
    </Typography>
  </>
);

export default PhotoGallery;

PhotoGallery.propTypes = {
  initial: PropTypes.object
};
