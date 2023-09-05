import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './pagination.tsx'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    elements: {
      control: Array<any>,
    },
    perPage: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const countryNames = [
  { name: 'Russia' },
  { name: 'Belarusia' },
  { name: 'Ukraine' },
  { name: 'USA' },
  { name: 'Uganda' },
  { name: 'Uruguay' },
  { name: 'Chili' },
  { name: 'Canada' },
  { name: 'France' },
  { name: 'Litva' },
  { name: 'Dagestan' },
  { name: 'Myau' },
  { name: 'Myau' },
  { name: 'Myau' },
  { name: 'Myau' },
  { name: 'France' },
  { name: 'Litva' },
  { name: 'Dagestan' },
  { name: 'Myau' },
  { name: 'Myau' },
  { name: 'Bali' },
  { name: 'Balya' },
  { name: 'Balya' },
  { name: 'USA' },
  { name: 'Uganda' },
  { name: 'Uruguay' },
  { name: 'Chili' },
  { name: 'USA' },
  { name: 'Uganda' },
  { name: 'Uruguay' },
  { name: 'Chili' },
  { name: 'Russia' },
  { name: 'Belarusia' },
  { name: 'Ukraine' },
  { name: 'USA' },
  { name: 'Uganda' },
  { name: 'Uruguay' },
  { name: 'Chili' },
  { name: 'Canada' },
  { name: 'France' },
  { name: 'Litva' },
  { name: 'Dagestan' },
  { name: 'Myau' },
  { name: 'Myau' },
  { name: 'Myau' },
  { name: 'Myau' },
  { name: 'France' },
  { name: 'Litva' },
  { name: 'Dagestan' },
  { name: 'Myau' },
  { name: 'Myau' },
  { name: 'Bali' },
  { name: 'Balya' },
  { name: 'Balya' },
  { name: 'USA' },
  { name: 'Uganda' },
  { name: 'Uruguay' },
  { name: 'Chili' },
  { name: 'USA' },
  { name: 'Uganda' },
  { name: 'Uruguay' },
  { name: 'Chili' },
]

export const Default: Story = {
  args: {
    elements: countryNames,
    perPage: 10,
  },
}
