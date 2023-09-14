import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DeckTableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { useAppDispatch, useAppSelector } from '@/hooks.ts'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks'
import { decksSlice } from '@/services/decks/decks.slice.ts'

type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export const Decks = () => {
  const currentPage = useAppSelector(state => state.decks)
  const dispatch = useAppDispatch()

  // const updateCurrentPage = (page: number) => dispatch(decksSlice.actions.updateCurrentPage(page))
  const [sort, setSort] = useState<Sort>(null)
  const decks = useGetDecksQuery({
    orderBy: sort === null ? null : `${sort?.key}-${sort?.direction}`,
  })
  const [createDeck] = useCreateDeckMutation()
  const isLoading = useGetDecksQuery()
  const [deleteDeck, a = { isLoading }] = useDeleteDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  if (decks.isLoading) {
    return <div>Loading....</div>
  }

  const onclickHandler = (key: string) => {
    if (sort && sort.key === key) {
      setSort(sort.direction === 'asc' ? { key, direction: 'desc' } : null)
    } else {
      setSort({
        key,
        direction: 'asc',
      })
    }
  }

  const deleteDeckHandler = ({ id }) => {
    deleteDeck({ id })
  }
  const updateDeckHandler = ({ id, params }) => {
    updateDeck({ id: { id }, params: { params } })
  }

  return (
    <div>
      {a.isLoading ? <div>DELETING</div> : ''}
      <Button onClick={() => createDeck({ name: 'deckname' })}> crearte deck</Button>
      <DeckTableContainer headCells={decks.data?.items} />
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell onClick={() => onclickHandler('name')}>Name</TableHeadCell>
            <TableHeadCell onClick={() => onclickHandler('cardsCount')}>Cards</TableHeadCell>
            <TableHeadCell onClick={() => onclickHandler('updated')}>Updated</TableHeadCell>
            <TableHeadCell onClick={() => onclickHandler('createdBy')}>created by</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {decks.data?.items.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell>{deck.name}</TableCell>
                <TableCell>{deck.cardsCount}</TableCell>
                <TableCell>{deck.updated}</TableCell>
                <TableCell>{deck.author.name}</TableCell>
                <TableCell>
                  <Button
                    disabled={!!a.isLoading}
                    onClick={() => deleteDeckHandler({ id: deck.id })}
                  >
                    delete
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      updateDeckHandler({
                        id: deck.id,
                        params: { name: 'NEW1NAME' },
                      })
                    }
                  >
                    edit
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <Button key={index} onClick={() => dispatch(updateCurrentPage(index + 1))}>
          {item}
        </Button>
      ))}
      {/* <Table>
            <TableHead>
                <TableRow><TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Cards</TableHeadCell>
                    <TableHeadCell>Updated</TableHeadCell>
                    <TableHeadCell>created by</TableHeadCell></TableRow>
            </TableHead>
            <TableBody>{decks.data?.items.map(deck => {
                return (
                    <TableRow key={deck.id}>
                        <TableCell>{deck.name}</TableCell>
                        <TableCell>{deck.cardsCount}</TableCell>
                        <TableCell>{deck.updated}</TableCell>
                        <TableCell>{deck.author.name}</TableCell>
                    </TableRow>)
            })}</TableBody>
        </Table>*/}
    </div>
  )
}

//TODO : Table must have static style
