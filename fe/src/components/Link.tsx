import React, { HTMLAttributes } from 'react';
import type { Component } from 'react';

interface LinkProps extends HTMLAnchorElement {}

const Link = ({ children, ...restProps }: LinkProps) => {
  return <a {...restProps}>{children as any}</a>;
};

export default Link;
