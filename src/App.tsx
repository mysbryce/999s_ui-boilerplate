import { cn } from '@/utils/cn'
import { useState } from 'react'
import { useEvent } from './utils/useEvent'

interface Property {
  firstname: string
  lastname: string
}

export default function App() {
  const [show, setShow] = useState(false)
  const [property, setProperty] = useState<Property>({ firstname: '', lastname: '' })

  /**
   * Call to this by
    SendNUIMessage({
      type = 'set-show',
      data = true | false
    })
   */
  useEvent<boolean>('set-show', (show) => setShow(show))

  /**
   * Call to this by
    SendNUIMessage({
      type = 'set-property',
      data = {
        firstname = 'target-first-name',
        lastname = 'target-last-name'
      }
    })
   */
  useEvent<Property>('set-property', (property) => setProperty(property))

  return (
    <div
      className={cn('bg-black p-4 transition-all duration-200', {
        '!opacity-0': !show,
      })}
    >
      {property.firstname}
      {property.lastname}
    </div>
  )
}
