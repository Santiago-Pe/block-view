import React from "react";
import PropTypes from "prop-types";

const Show = ({ children }) => {
  let when = null;
  let otherwise = null;

  React.Children.forEach(children, (child) => {
    if (child.props.isTrue && !when) {
      when = child;
    } else if (!child.props.isTrue && !when) {
      otherwise = child;
    } else {
      return null;
    }
  });

  return when || otherwise || null;
};

Show.propTypes = {
  children: PropTypes.node.isRequired,
};

const When = ({ isTrue, children }) => (isTrue ? children : null);
const Else = ({ children }) => children;

When.propTypes = {
  isTrue: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Else.propTypes = {
  children: PropTypes.node.isRequired,
};

Show.When = When;
Show.Else = Else;

export default Show;
