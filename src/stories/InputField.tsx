import React, { useEffect, useState } from 'react'
import { Input } from '../stories/Input'
import { FormLabel } from '../stories/FormLabel'
import { ValidationText } from '../stories/ValidationText'

export interface IFormFieldProps {
  size: 'default' | 'full'
  type: 'text' | 'email' | 'number' | 'password'
  name: string
  value?: string
  label: string
  placeholder: string
  autoFocus?: boolean
  disabled?: boolean
  validationtext?: string
}

export const InputField = React.forwardRef(
  (
    { size = 'default', autoFocus = false, disabled = false, validationtext = undefined, ...props }: IFormFieldProps,
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

        <Input
          size={size}
          register={props}
          inputRef={ref}
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
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
