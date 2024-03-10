'use client'

import { useForm } from 'react-hook-form'
import { InputField } from '@/src/stories/InputField'
import { Input } from '@/src/stories/Input'
import { FC, useState } from 'react'
import { SelectBoxField } from '@/src/stories/SelectBoxField'
import { SelectBox } from '@/src/stories/SelectBox'

interface FormValue {
  name: string
  gender: string
}

const Home: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    mode: 'onChange',
  })

  const onSubmit = (data: FormValue) => {
    //submit logic
    console.log(data)
  }

  const [setFocus, setOnFocus] = useState(false)

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          {...register('name', { required: '이름을 입력하세요' })}
          type="text"
          name="name"
          label="name"
          placeholder="이름을 입력하세요"
          autoFocus={true}
          validationtext={errors.name?.message}
        />

        <SelectBoxField
          {...register('gender', { required: '성별을 선택하세요' })}
          name="gender"
          options={['남자', '여자']}
          label="성별"
          placeholder="성별을 입력하세요"
          autoFocus={true}
          validationtext={errors.gender?.message}
        />

        <button>submit</button>
      </form>
    </main>
  )
}

export default Home
