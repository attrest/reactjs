'use client'

import Dialog, { DialogProps } from '@/components/modals/Dialog'
import React, { createContext, useContext, useState } from 'react'
import ReactDOM from 'react-dom'

interface DialogContextValue {
  //eslint-disable-next-line no-unused-vars
  showDialog: (options: Omit<DialogProps, 'show'>) => void
  closeDialog: () => void
}
interface DialogProviderProps {
  children: React.ReactNode
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined)

export const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog는 DialogProvider와 함께 사용되어야 합니다.')
  }
  return context
}

export const DialogProvider = ({ children }: DialogProviderProps) => {
  const [dialogProps, setDialogProps] = useState<DialogProps>({ show: false })

  const showDialog = (options: Omit<DialogProps, 'show'>) => {
    setDialogProps((prevState) => ({ ...prevState, ...options, show: true }))
  }

  const closeDialog = () => {
    // dialogProps.onClose?.()
    //setDialogProps((prevState) => ({ ...prevState, show: false }))
    setDialogProps({ show: false })
  }

  return (
    <DialogContext.Provider value={{ showDialog, closeDialog }}>
      {children}
      {/*  <Dialog {...dialogProps} onClose={closeDialog} /> */}
      {dialogProps.show &&
        ReactDOM.createPortal(<Dialog onClose={closeDialog} {...dialogProps} />, document.body)}
    </DialogContext.Provider>
  )
}
