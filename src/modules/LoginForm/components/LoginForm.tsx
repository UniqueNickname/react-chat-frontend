import React from 'react'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { Link } from "react-router-dom"

import { Block, Button } from 'components'

const LoginForm : React.FC = () => (
  <div>
    <div className="auth__top">
      <h2>Войти в систему</h2>
      <p>Пожалуйста, войдите в свой аккаунт</p>
    </div>
    <Block>
      <Form>
        <Form.Item validateStatus="success" hasFeedback>
          <Input
            prefix={
              <UserOutlined />
            }
            size="large"
            type="text"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item validateStatus="success" hasFeedback>
          <Input
            prefix={
              <LockOutlined />
            }
            size="large"
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large">
            Войти в аккаунт
          </Button>
        </Form.Item>
        <Link className="auth__register-link" to="/register">
          Зарегистрироваться
        </Link>
      </Form>
    </Block>
  </div>
)

export default LoginForm