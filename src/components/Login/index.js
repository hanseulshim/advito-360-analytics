import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Icon, Input, Button } from 'antd'
import advitoLogo from 'assets/advitoLogo.png'
import Footer from './Footer'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme.jungleMist};
`

const Logo = styled.img`
  margin: 3em 0 0 5em;
  max-width: 200px;
  width: 100%;
  align-self: flex-start;
`

const FormContainer = styled.div`
  padding: 2em 4em;
  width: 30%;
`

const Title = styled.div`
  font-size: 4em;
  text-align: center;
  margin: 2.5em 0 0.5em 0;
  color: ${props => props.theme.white};
`

const NormalLoginForm = ({ form }) => {
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  const { getFieldDecorator } = form
  return (
    <Container>
      <Logo src={advitoLogo} />
      <Title>360 Analytics</Title>
      <FormContainer>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="danger"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </FormContainer>
      <Footer />
    </Container>
  )
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
)

NormalLoginForm.propTypes = {
  form: PropTypes.object.isRequired
}

export default WrappedNormalLoginForm
