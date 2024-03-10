import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input<{ $validationtext: boolean; $size: string }>`
  border: ${(props) => (props.$validationtext ? '1px solid #ff7d59!important' : '1px solid #e0e0e0')};
  color: #8e8e8e;
  outline: none;
  display: block;
  padding: 0 1.6rem;
  letter-spacing: 0.374px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 300;
  min-width: ${(props) => (props.$size === 'default' ? '37.8rem' : '100%')};
  height: 4.8rem;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.$validationtext ? '#fff7ef' : '#ffffff')};
  &:focus {
    border-color: #7dc387;
    color: #000000;
  }
  &:disabled {
    border-color: #e0e0e0;
    background-color: #f5f5f5;
    color: #8e8e8e;
  }

  &::placeholder {
    color: #8e8e8e;
  }
`

interface InputProps {
  /** input 사이즈 */
  size: 'full' | 'default'
  /** [useForm 사용시] register 메소드 */
  register?: object
  /** [useForm 사용시] input의 ref(DOM 객체)  */
  inputRef?: React.ForwardedRef<any>
  /** input의 type */
  type: 'text' | 'email' | 'number' | 'password'
  /** input 태그의 attribute name값으로 input의 id, useForm의 name 또한 동일한 값으로 설정됩니다. */
  name: string
  /** input 태그의 value */
  value?: string
  /** [useForm 사용시] input value의 유효성 검사 텍스트 */
  validationtext?: string
  /** input의 placeholder */
  placeholder: string
  /** 자동 포커스 기능 사용 여부 */
  autoFocus?: boolean
  /** input의 disabled 설정 여부 */
  disabled?: boolean
  /** setOnFocus 함수 */
  setOnFocus?: React.Dispatch<React.SetStateAction<boolean>>
}

export const Input = ({
  size = 'default',
  autoFocus = true,
  disabled = false,
  validationtext = undefined,
  setOnFocus = undefined,
  ...props
}: InputProps) => {
  return (
    <InputWrapper
      {...props.register}
      $size={size}
      type={props.type}
      name={props.name}
      id={props.name}
      value={props.value}
      ref={props.inputRef}
      placeholder={props.placeholder}
      autoFocus={autoFocus}
      disabled={disabled}
      $validationtext={Boolean(validationtext !== undefined)}
      onFocus={setOnFocus !== undefined ? () => setOnFocus(true) : undefined}
      onBlur={setOnFocus !== undefined ? () => setOnFocus(false) : undefined}
    />
  )
}
