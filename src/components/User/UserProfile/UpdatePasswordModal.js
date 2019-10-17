import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { Modal, Form, Input, Button, Icon } from 'antd'
import { UPDATE_USER_PASSWORD } from 'api'
import ErrorMessage from 'components/common/ErrorMessage'
import SuccessMessage from 'components/common/SuccessMessage'
import Loader from 'components/common/Loader'
import { getUser } from 'helper'

const Text = styled.div`
  white-space: pre-line;
  font-style: italic;
`

const SubText = styled(Text)`
  margin: 1em;
`

const UpdatePasswordModal = ({ form, visible, setVisible }) => {
  const [updateUserPassword, { loading, error, data }] = useMutation(
    UPDATE_USER_PASSWORD
  )
  const { id } = getUser()

  const handleSubmit = event => {
    event.preventDefault()
    form.validateFields(async (err, { password, confirmPassword }) => {
      if (!err) {
        try {
          await updateUserPassword({
            variables: { id, password, confirmPassword }
          })
        } catch (e) {
          console.error('Error in update password form: ', e)
        }
      }
    })
  }
  const { getFieldDecorator } = form

  return (
    <>
      <Modal
        title="Change Password"
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
      >
        <Form onSubmit={handleSubmit}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your password!' }
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
                {getFieldDecorator('confirmPassword', {
                  rules: [
                    { required: true, message: 'Please input your password!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Confirm Password"
                  />
                )}
              </Form.Item>
            </>
          )}
          <Text>
            {`Passwords must be a minimum of eight (8) characters
          and include the following criteria:
          `}
          </Text>
          <SubText>
            {`- Lowercase character
          - Uppercase character
          - Number
          `}
          </SubText>
          <Form.Item>
            <Button type="danger" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          {error && <ErrorMessage error={error} />}
          {data && <SuccessMessage message={data.updateUserPassword} />}
        </Form>
      </Modal>
    </>
  )
}

const WrappedUpdatePasswordModal = Form.create({ name: 'update_password' })(
  UpdatePasswordModal
)

UpdatePasswordModal.propTypes = {
  form: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
}

export default WrappedUpdatePasswordModal
