import type { Meta, StoryObj } from '@storybook/react'
import { useForm, FormProvider } from 'react-hook-form'
import { SelectBoxField } from './SelectBoxField'

const meta: Meta<typeof SelectBoxField> = {
  title: 'Molecules/SelectBoxField',
  component: SelectBoxField,
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
type Story = StoryObj<typeof SelectBoxField>

export const Default: Story = {
  args: {
    name: 'gender',
    placeholder: '성별을 선택하세요',
    options: ['여자', '남자'],
    label: '성별',
  },
  parameters: {
    componentSubtitle:
      'label과 selectbox 조합입니다. useForm의 유효성검사 text를 포함합니다. useForm의 register 메소드를 props로 넘기면 useForm 라이브러리를 사용할 수 있습니다.',
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

export const SelectedOption: Story = {
  args: {
    ...Default.args,
    selectedOption: '여자',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: '특정 option값이 선택되어있는 inputField입니다.',
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
    validationtext: '성별을 선택하세요.',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: 'useForm의 유효성 에러가 발생했을때의 selectboxField입니다.',
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
        story: 'focus된 상태의 selectField입니다. focus가 되어야만 label이 노출됩니다.',
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
        story: 'option이 선택되어 있는 상태에서 disabled된 selectboxField입니다.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
}
