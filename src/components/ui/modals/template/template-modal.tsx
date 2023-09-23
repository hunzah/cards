import { clsx } from 'clsx'

import s from './template-modal.module.scss'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type TemplateModalProps = {
  className: string
  title: string
  children: React.ReactNode
  buttonName: string
  closeModalCallback: (isOpen: boolean) => void
  mainActionCallback: () => void
  value?: string
}

export const TemplateModal = (props: TemplateModalProps) => {
  const { className, title, children, buttonName, closeModalCallback, mainActionCallback } = props
  const classNames = {
    root: clsx(s.root, className),
  }
  const closeModalHandler = () => closeModalCallback(false)
  const onClickHandler = () => {
    mainActionCallback()
  }

  return (
    <div className={classNames.root}>
      <div className={s.titleContainer}>
        <Typography variant={'h2'}>{title}</Typography>
      </div>
      <div>{children}</div>
      <div className={s.btnsContainer}>
        <Button variant="secondary" className={s.footBtn} onClick={closeModalHandler}>
          <Typography variant="subtitle2">Cancel</Typography>
        </Button>
        <Button className={s.footBtn} onClick={onClickHandler}>
          <Typography variant="subtitle2">{buttonName}</Typography>
        </Button>
      </div>
    </div>
  )
}
