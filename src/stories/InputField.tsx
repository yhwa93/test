import React, { useEffect, useState } from 'react'
import { Input } from '../stories/Input'
import { FormLabel } from '../stories/FormLabel'

export interface IFormFieldProps {
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
  ({ autoFocus = false, validationtext = undefined, ...props }: IFormFieldProps, ref: React.ForwardedRef<any>) => {
    const [onFocus, setOnFocus] = useState<boolean>(autoFocus)

    return (
      <fieldset>
        {onFocus ? (
          <FormLabel name={props.name} validationtext={validationtext}>
            {props.label}
          </FormLabel>
        ) : (
          props.disabled && <FormLabel name={props.name}>{props.label}</FormLabel>
        )}

        <Input
          register={props}
          inputRef={ref}
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          autoFocus={autoFocus}
          disabled={props.disabled}
          validationtext={validationtext}
          setOnFocus={setOnFocus}
        />
        {validationtext && <p>{validationtext}</p>}
      </fieldset>
    )
  },
)
