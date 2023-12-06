import { Drawer, Button, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const links = [
  ['/', 'Home'],
  ['/signup', 'SignUp'],
  ['/signin', 'SignIn'],
]

export default function Menu() {
  const [isToggled, setToggle] = useState(false)

  const toggle = 
    (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setToggle(prev => !prev)
  }

  return (
    <>
    <Button onClick={toggle}>
      <MenuIcon/>
    </Button>
    <Drawer
      anchor='left'
      open={isToggled}
      onClose={toggle}
    ></Drawer> 
      {
        links.map(link => (
          <Link href={link[0]}> { link[1] } </Link>
        ))
      }
    </>
  )
}