import {useState} from 'react'

import Layer2 from '../src/assets/images/Layer 2.svg'

import s from './components/ui/button/button.module.scss'
import {Checkbox} from './components/ui/checkbox'

import {Button} from '@/components/ui/button'
import {Typography} from '@/components/ui/typography'
import {Slider} from "@/components/ui/slider";
import TabSwitcher from "@/components/ui/tab-switcher/tab-switcher";
import ComponentWithSvg from "@/components/ComponentWithSVG";

export function App() {
    const [checked, setChecked] = useState(false)
    const switches = [{id: 1, switchTitle: "first", disabled: false},
        {id: 2, switchTitle: "second", disabled: false},
        {id: 3, switchTitle: "third", disabled: true}]
    return (
        <div>
            <Checkbox checked={checked} onChange={setChecked} disabled={false}/>
            <Typography variant="body2" component={'h3'}>
                Subheading
            </Typography>
            <Checkbox checked={checked} onChange={setChecked} text={'check-box'} disabled={false}/>
            Hello
            <div>
                <Button className={s.button}>
                    {' '}
                    <ComponentWithSvg svg={Layer2}/>
                    Hello
                </Button>
                <Button className={s.button} variant="tertiary">
                    <ComponentWithSvg svg={Layer2}/> qweWeW
                </Button>
                <Button className={s.button} variant="tertiary">
                    qweWeW
                </Button>
                <Button className={s.button} variant="tertiary" disabled>
                    qweWeW
                </Button>

                <Button className={s.button} as={'a'} href={'/link'} variant="link">
                    as link
                </Button>
                <TabSwitcher switches={switches}/>

            </div>
        </div>
    )
}
