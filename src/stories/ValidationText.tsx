import React from 'react'
import styled from 'styled-components'

const ValidationTextWrapper = styled.p`
  color: #ff7d59;
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 300;
  text-indent: 0.5rem;
`

interface IValidationProps {
  children: React.ReactNode
}

export const ValidationText = ({ children }: IValidationProps) => {
  return <ValidationTextWrapper>{children}</ValidationTextWrapper>
}
