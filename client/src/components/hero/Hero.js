import React from 'react';
import { Container, Content, Title } from './style/Hero';

export const Hero = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Hero.Content = ({ children, ...restProps }) => (
  <Content {...restProps}>{children}</Content>
);

Hero.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
