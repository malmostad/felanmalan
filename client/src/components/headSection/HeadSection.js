import React from 'react'
import {
  StyledHeadSection,
  StyledHeadInner,
} from '../container/style/Container'
import { StyledHeading } from '../Typography/styles/Typography'

export const HeadSection = ({ children, ...restProps }) => (
  <StyledHeadSection {...restProps}>{children}</StyledHeadSection>
)

HeadSection.Inner = ({ children, ...restProps }) => (
  <StyledHeadInner {...restProps}>{children}</StyledHeadInner>
)

HeadSection.Title = ({ children, ...restProps }) => (
  <StyledHeading {...restProps}>{children}</StyledHeading>
)
