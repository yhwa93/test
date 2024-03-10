import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input<{ $validationtext: boolean }>`
  border: ${(props) => (props.$validationtext ? '2px solid red!important' : '1px solid gray')};
  color: ${(props) => (props.$validationtext ? 'red!important' : 'black')};
  background-color: pink;
  outline: none;
  &:focus {
    border: 2px solid blue;
  }
  &:disabled {
    color: gray;
    border: 1px solid gray;
  }
`

interface InputProps {
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

export const Input = ({ autoFocus = true, disabled = false, validationtext = undefined, setOnFocus = undefined, ...props }: InputProps) => {
  return (
    <InputWrapper
      {...props.register}
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
