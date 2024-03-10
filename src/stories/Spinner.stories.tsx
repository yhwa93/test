import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  decorators: [
    (Story) => (
      <div style={{ background: '#000000', padding: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    componentSubtitle: 'Form Spinner',
    docs: {
      description: {
        component: `Form 태그 안에서 사용하는 Spinner입니다.`,
      },
    },
  },
  tags: ['autodocs'], //자동 docs 옵션
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
  },
}
