import { useState } from 'react'

import s from './pagination.module.scss'

import { PagLogic } from '@/components/ui/pagination/pagLogic.tsx'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

type PropsType = {
  elements: any[]
  perPage?: number
  children: any
}

export const Pagination = (props: PropsType) => {
  const { elements, perPage = 10 } = props
  const [currentPage, setCurrentPage] = useState(1)
  const lastElementIndex = currentPage * perPage
  const firstElementIndex = lastElementIndex - perPage
  // элементы которые будут отображаться на каждой странице currentElement необходимо передавать в компоненты которых необходимо пагинировать
  const currentElement = elements.slice(firstElementIndex, lastElementIndex)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className={s.root}>
      <PagLogic
        elements={elements}
        elementsPerPage={perPage}
        totalElements={elements.length}
        onChange={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Typography variant="body2" className={s.selectContainer}>
        Показать
        <Select options={[10, 20, 30, 50, 100]} defaultValue={10} />
        на странице
      </Typography>
    </div>
  )
}

// const Countries = ({ countries }: any) => {
//   return countries.map((country: { name: string }, i: any) => <div key={i}>{country.name}</div>)
// }
