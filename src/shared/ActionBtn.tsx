import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
    children: React.ReactNode
    setSelectedPage : (value :SelectedPage) => void;
}
const ActionBtn = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:transition duration-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.contactUs)}
      href={`#${SelectedPage.contactUs}`}
    >
      {children}
    </AnchorLink>
  )
}
export default ActionBtn