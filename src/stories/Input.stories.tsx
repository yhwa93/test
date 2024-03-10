import type { Meta, StoryObj } from '@storybook/react'
import { useForm, FormProvider } from 'react-hook-form'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
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
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    name: 'name',
    type: 'text',
    placeholder: '이름을 입력하세요',
    autoFocus: false,
  },
  parameters: {
    componentSubtitle: '기본 input 입니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.',
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
      description: {
        story: 'value 입력전, placeholder를 가진 input입니다.',
      },
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
        story: 'value에 값이 입력된 input(type="text")입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const PasswordInputSetValue: Story = {
  args: {
    ...Default.args,
    type: 'password',
    value: '1234qwer',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'value에 값이 입력된 input(type="password")입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const ValidationError: Story = {
  args: {
    ...Default.args,
    type: 'text',
    value: '김  두콩',
    validationtext: '띄어쓰기를 제외하고 이름을 입력해주세요.',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'input의 value에 useForm의 유효성 에러가 발생했을때의 input입니다.',
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
        story: 'focus된 상태의 input입니다. (autoFocus props를 이용하여 자동 포커스)',
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
        story: 'disabled 상태의 input입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}
