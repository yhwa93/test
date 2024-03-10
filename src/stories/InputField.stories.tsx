import type { Meta, StoryObj } from '@storybook/react'
import { useForm, FormProvider } from 'react-hook-form'
import { InputField } from './InputField'

const meta: Meta<typeof InputField> = {
  title: 'Molecules/InputField',
  component: InputField,
  decorators: [
    (Story) => (
      <FormProvider {...useForm()}>
        <Story />
      </FormProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputField>

export const Default: Story = {
  args: {
    type: 'text',
    name: 'name',
    label: '이름 : ',
    placeholder: '이름을 입력하세요',
  },
  parameters: {
    componentSubtitle: 'label과 input field입니다. useForm validation text를 포함합니다.',
    layout: 'centered',
    backgrounds: {
      default: 'green',
      values: [
        { name: 'green', value: '#ECF5E8' },
        { name: 'blue', value: '#1A344C' },
        { name: 'yellow', value: '#FFF8EB' },
        { name: 'modal', value: 'rgba(0, 0, 0, 0.70)' },
      ],
    },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const TextInputSetValue: Story = {
  args: {
    ...Default.args,
    value: '김두콩',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'type이 text인 inputField입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const PasswordInputSetValue: Story = {
  args: {
    ...Default.args,
    label: '비밀번호 :',
    type: 'password',
    value: '1234qwer',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'type이 password인 inputField입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const ValidationError: Story = {
  args: {
    ...Default.args,
    value: '김  두콩',
    validationtext: '띄어쓰기를 제외하고 이름을 입력해주세요.',
    autoFocus: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'useForm의 유효성 에러가 발생했을때의 inputField입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const Focused: Story = {
  args: {
    ...Default.args,
    autoFocus: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'focus된 상태의 inputField입니다. focus가 되어야만 label이 노출됩니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    value: '김두콩',
    disabled: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'value가 있는 상태에서 disabled된 inputField입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}
