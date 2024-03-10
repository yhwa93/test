import React from 'react'
import styled from 'styled-components'

const SelectBoxWrapper = styled.div<{ $validationError?: boolean; $size: string }>`
  & > select {
    min-width: ${(props) => (props.$size === 'default' ? '37.8rem' : '100%')};
    border: ${(props) => (props.$validationError ? '2px solid red!important' : '1px solid gray')};
    color: #8e8e8e;
    outline: none;
    display: block;
    padding: 0 1.6rem;
    letter-spacing: 0.374px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
    height: 4.8rem;
    border-radius: 0.8rem;

    &:focus {
      border: 2px solid blue;
    }

    &:disabled {
      border-color: #e0e0e0;
      background-color: #f5f5f5;
      color: #8e8e8e;
    }
  }
`

interface SelectBoxProps {
  /** selectbox 사이즈 */
  size: 'full' | 'default'
  /** [useForm 사용시] register 메소드 */
  register?: object
  /** [useForm 사용시] select의 ref(DOM 객체)  */
  selectRef?: React.ForwardedRef<any>
  /** select 태그의 attribute name값으로 select의 id, useForm의 name 또한 동일한 값으로 설정됩니다. */
  name: string
  /** options 배열 */
  options: string[]
  /** 선택된 option */
  selectedOption?: string
  /** [useForm 사용시] selectbox의 유효성 여부 */
  validationtext?: string
  /** placeholder로 사용할 option 텍스트 (제일 처음에 나오는 option(value='')) */
  placeholder: string
  /** 자동 포커스 기능 사용 여부 */
  autoFocus?: boolean
  /** disabled 상태의 여부 */
  disabled?: boolean
  /** Focus되면 Label 노출 여부 */
  setOnFocus: React.Dispatch<React.SetStateAction<boolean>>
}

export const SelectBox = ({
  size = 'default',
  options = [],
  selectedOption = undefined,
  validationtext = undefined,
  autoFocus = false,
  disabled = false,
  ...props
}: SelectBoxProps) => {
  return (
    <SelectBoxWrapper $validationError={Boolean(validationtext)} $size={size}>
      <select
        {...props.register}
        ref={props.selectRef}
        id={props.name}
        name={props.name}
        defaultValue={selectedOption}
        autoFocus={autoFocus}
        disabled={disabled}
        onFocus={() => props.setOnFocus(true)}
        onBlur={() => props.setOnFocus(false)}
      >
        {props.placeholder && <option value="">{props.placeholder}</option>}
        {options.map((opt: string, index: number) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </SelectBoxWrapper>
  )
}
