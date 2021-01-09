import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import styles from './{{name}}.styles';
const useStyles = makeStyles(styles);

const {{name}} = ({ prop }) => {
  const classes = useStyles();
  return <span className={classes.{{camelCase}} }>{prop}</span>;
};
{{name}}.defaultProps = {};
{{name}}.propTypes = {
  prop: PropTypes.string,
};

export default {{name}};
