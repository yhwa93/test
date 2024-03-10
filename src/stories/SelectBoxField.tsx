import React, { useState } from 'react'
import { SelectBox } from './SelectBox'
import { FormLabel } from './FormLabel'
import { ValidationText } from './ValidationText'

export interface IFormFieldProps {
  /** select 태그의 attribute name값으로 select의 id, useForm의 name 또한 동일한 값으로 설정됩니다. */
  name: string
  /** selectbox 첫번째 option(value="") 텍스트*/
  placeholder: string
  /** selectbox 내부의 options 배열 */
  options: string[]
  /** selectbox의 title label입니다. */
  label: string
  /** 선택된 옵션이 있을 경우 사용 (기본값: "" 는 placeholder option의 value입니다.) */
  selectedOption?: string
  /** [useForm 사용시] useForm 유효성검사 텍스트 */
  validationtext?: string
  /** 자동 포커스 기능 사용 여부 */
  autoFocus?: boolean
  /** selectbox의 disabled 설정 여부 */
  disabled?: boolean
}

export const SelectBoxField = React.forwardRef(
  (
    { options = [], autoFocus = false, disabled = false, selectedOption = '', validationtext = undefined, ...props }: IFormFieldProps,
    ref: React.ForwardedRef<any>,
  ) => {
    const [onFocus, setOnFocus] = useState<boolean>(autoFocus)

    return (
      <fieldset>
        {onFocus ? (
          <FormLabel name={props.name} validationtext={validationtext}>
            {props.label}
          </FormLabel>
        ) : (
          disabled && <FormLabel name={props.name}>{props.label}</FormLabel>
        )}
        <SelectBox
          register={props}
          selectRef={ref}
          name={props.name}
          options={options}
          placeholder={props.placeholder}
          selectedOption={selectedOption}
          autoFocus={autoFocus}
          disabled={disabled}
          validationtext={validationtext}
          setOnFocus={setOnFocus}
        />
        {validationtext && <ValidationText>{validationtext}</ValidationText>}
      </fieldset>
    )
  },
)
