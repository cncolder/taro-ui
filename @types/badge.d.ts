import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtBadgeProps extends AtComponent{
  dot?: boolean

  value?: string | number

  maxValue?: number

  className?: string | Array<string>

  customStyle?: object | string
}

declare const AtBadge: ComponentClass<AtBadgeProps>

export default AtBadge
