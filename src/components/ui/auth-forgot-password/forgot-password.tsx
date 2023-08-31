import s from './forgot-password.module.scss'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'

export const ForgotPassword = () => {
  return (
    <div>
      <Card className={s.container}>
        <Typography variant="large" component="div">
          Forgot your password?
        </Typography>
        <div className={s.inputContainer}>
          <TextField inputType="email" inputIsSearch={false} inputName="Email" />
          <Typography className={`${s.text} ${s.textContainer}`} variant="body2">
            Enter your email address and we will send you further instructions
          </Typography>
        </div>
        <Button className={s.button} variant={'primary'}>
          <Typography variant={'subtitle2'}>Send Instructions</Typography>
        </Button>
        <Typography className={`${s.text} ${s.text2Container}`} variant="body2">
          Did you remember your password?
        </Typography>
        <a>
          <Typography className={s.link} variant={'h3'}>
            Try logging in
          </Typography>
        </a>
      </Card>
    </div>
  )
}
