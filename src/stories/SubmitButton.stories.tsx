import type { Meta, StoryObj } from '@storybook/react'
import { SubmitButton } from './SubmitButton'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof SubmitButton> = {
  title: 'Atoms/SubmitButton',
  component: SubmitButton,
  args: {
    onSubmit: action('on-submit'),
  },
  argTypes: {
    iconType: {
      options: ['Logo', 'LeftArrow', 'RightArrow', 'None'],
      control: { type: 'select' },
    },
    backgroundColor: {
      options: ['#000000', '#7DC387'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    componentSubtitle: 'Form Submit Button',
    docs: {
      description: {
        component: `Form 태그 안에서 사용하는 Button입니다. (onSubmit)`,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SubmitButton>

export const Primary: Story = {
  args: {
    size: 'default',
    innerText: '검사 시작하기',
    backgroundColor: '#000000',
    submitting: false,
  },
  parameters: {
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

export const Submitting: Story = {
  args: {
    ...Primary.args,
    backgroundColor: '#000000',
    submitting: true,
  },
  parameters: {
    ...Primary.parameters,
  },
}

export const CreatingPDF: Story = {
  args: {
    ...Primary.args,
    innerText: 'PDF 생성중...',
    backgroundColor: '#000000',
    submittingWithText: true,
  },
  parameters: {
    ...Primary.parameters,
  },
}

export const WithLogoIcon: Story = {
  args: {
    ...Primary.args,
    innerText: '로그인',
    backgroundColor: '#7DC387',
    iconType: 'Logo',
  },
  parameters: {
    ...Primary.parameters,
  },
}

export const WithLeftArrowIcon: Story = {
  args: {
    ...Primary.args,
    innerText: '이전',
    backgroundColor: '#000000',
    iconType: 'LeftArrow',
  },
  parameters: {
    ...Primary.parameters,
  },
}

export const WithRightArrowIcon: Story = {
  args: {
    ...Primary.args,
    innerText: '다음',
    backgroundColor: '#000000',
    iconType: 'RightArrow',
  },
  parameters: {
    ...Primary.parameters,
  },
}
