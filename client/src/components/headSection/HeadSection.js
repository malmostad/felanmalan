import React from 'react';
import { Container, Content, Title } from './style/HeadSection';

export const HeadSection = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

HeadSection.Content = ({ children, ...restProps }) => (
  <Content {...restProps}>{children}</Content>
);

HeadSection.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
