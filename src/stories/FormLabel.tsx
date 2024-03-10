import styled from 'styled-components'
import React from 'react'

const LabelWrapper = styled.label<{ $validationtext?: boolean }>`
  color: ${(props) => (props.$validationtext ? '#ff7d59' : '#7dc387')};
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.374px;
`

interface IFormLabelProps {
  /** htmlFor 값(태그 속성 name, id, useForm register name의값과 htmlFor은 동일합니다.) */
  name: string
  /** [useForm 사용시] input value의 유효성 검사 텍스트 */
  validationtext?: string
  /** label 태그 내부의 내용 */
  children: React.ReactNode
}
export const FormLabel = ({ children, ...props }: IFormLabelProps) => {
  return (
    <LabelWrapper $validationtext={Boolean(props.validationtext !== undefined)} htmlFor={props.name}>
      {children}
    </LabelWrapper>
  )
}
