import React from 'react';
import type { Component } from 'react';

interface LinkProps extends Component {
  children: React.ReactNode;
}
const Link = ({ children, ...restProps }: LinkProps) => {
  return <a {...restProps}>{children}</a>;
};

export default Link;
