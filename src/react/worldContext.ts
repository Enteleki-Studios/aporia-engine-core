import { createContext } from 'react'

import { type World } from '..'

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-redundant-type-constituents -- Required for lib code
export const WorldContext = createContext<World<any> | undefined>(undefined)
