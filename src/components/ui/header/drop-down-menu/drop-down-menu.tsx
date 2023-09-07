import { useState } from 'react'

import s from './drop-down-menu.module.scss'

import avatarTest from '@/assets/images/avatar.svg'
import logOut from '@/assets/images/log-out.svg'
import myProfIcon from '@/assets/images/My-profile-icon.svg'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type Props = {
  avatar?: string
  name?: string
  email?: string
}
export const DropDownMenu = (props: Props) => {
  const { name, email } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <img src={avatarTest} onClick={toggleMenu} className={s.avatar} />
      {isMenuOpen && (
        <ul className={s.menuContainer}>
          <li className={s.infoContainer}>
            <img src={avatarTest} onClick={toggleMenu} />
            <div className={s.nameAndEmailContainer}>
              <Typography variant={'subtitle2'}>{name}</Typography>
              <Typography className={s.email} variant={'caption'}>
                {email}
              </Typography>
            </div>
          </li>
          <li>
            <Button as={'a'} className={s.button} variant="secondary" img={myProfIcon}>
              <Typography variant={'caption'}>My Profile</Typography>
            </Button>
          </li>
          <li>
            <Button as={'a'} className={s.button} variant="secondary" img={logOut}>
              <Typography variant={'caption'}>Sign Out</Typography>
            </Button>
          </li>
        </ul>
      )}
    </div>
  )
}
