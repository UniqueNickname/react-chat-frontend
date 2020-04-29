import React from 'react'
import classNames from "classnames"
import { Button as BaseButton } from 'antd'

import './Button.scss'

type ButtonPropsTypes = {
  className?  : string,
  size?       : string,
  type?       : string,
  children    : React.ReactNode
}

const Button : React.FC<ButtonPropsTypes> = ({children, type, size, className}) => (
  <BaseButton
    type={type}
    children={children}
    className={classNames('button', className, {
      "button--large": size === "large"
    })}
  />
)

export default Button
