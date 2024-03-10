import type { Meta, StoryObj } from '@storybook/react'
import { useForm, FormProvider } from 'react-hook-form'
import { SelectBox } from './SelectBox'

const meta: Meta<typeof SelectBox> = {
  title: 'Atoms/SelectBox',
  component: SelectBox,
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
type Story = StoryObj<typeof SelectBox>

export const Default: Story = {
  args: {
    name: 'gender',
    options: ['남자', '여자'],
    placeholder: '성별을 선택하세요.',
  },
  parameters: {
    componentSubtitle: '기본 select box입니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.',
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
        story: 'value 선택전, select box입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const SelectBoxSetValue: Story = {
  args: {
    ...Default.args,
    selectedOption: '여자',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'value 선택 후, select box입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const ValidationError: Story = {
  args: {
    ...Default.args,
    selectedOption: '',
    validationtext: '성별을 선택해주세요.',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'useForm의 유효성 에러가 발생했을때의 selectbox입니다.',
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
        story: 'focus된 상태의 select box입니다. (autoFocus props를 이용하여 자동 포커스)',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    selectedOption: '여자',
    disabled: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'value가 선택된 상태에서 disabled된 select box입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}
