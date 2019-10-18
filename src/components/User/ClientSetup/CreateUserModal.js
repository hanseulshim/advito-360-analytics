import React from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/react-hooks'
import { Modal, Form, Input, Button } from 'antd'
import { CREATE_USER, IA_GENERAL_ROLE, USER_LIST } from 'api'
import ErrorMessage from 'components/common/ErrorMessage'
import SuccessMessage from 'components/common/SuccessMessage'
import Loader from 'components/common/Loader'

const CreateUserModal = ({ clientId, form, visible, setVisible }) => {
  const [createUser, { loading, error, data }] = useMutation(CREATE_USER)

  const handleSubmit = event => {
    event.preventDefault()
    form.validateFields(
      async (err, { username, nameFirst, nameLast, phone, address }) => {
        if (!err) {
          try {
            await createUser({
              variables: {
                clientId,
                username,
                nameFirst,
                nameLast,
                isEnabled: true,
                phone,
                address,
                password: 'Password1',
                confirmPassword: 'Password1',
                roleIds: [IA_GENERAL_ROLE]
              },
              refetchQueries: () => [
                {
                  query: USER_LIST,
                  variables: { clientId }
                }
              ]
            })
          } catch (e) {
            console.error('Error in create user form: ', e)
          }
        }
      }
    )
  }
  const { getFieldDecorator } = form

  const closeModal = () => {
    setVisible(false)
    form.resetFields()
  }

  return (
    <>
      <Modal
        title="Create User"
        visible={visible}
        footer={null}
        onCancel={() => closeModal()}
      >
        <Form onSubmit={handleSubmit}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Form.Item label="USERNAME/EMAIL">
                {getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'Please input your username!' },
                    {
                      type: 'email',
                      message: 'The input is not a valid email!'
                    }
                  ]
                })(<Input placeholder="Username" />)}
              </Form.Item>
              <Form.Item label="FIRST NAME">
                {getFieldDecorator('nameFirst', {
                  rules: [
                    { required: true, message: 'Please input your first name!' }
                  ]
                })(<Input placeholder="First Name" />)}
              </Form.Item>
              <Form.Item label="LAST NAME">
                {getFieldDecorator('nameLast', {
                  rules: [
                    { required: true, message: 'Please input your last name!' }
                  ]
                })(<Input placeholder="Last Name" />)}
              </Form.Item>
              <Form.Item label="PHONE">
                {getFieldDecorator('phone')(<Input placeholder="Phone" />)}
              </Form.Item>
              <Form.Item label="ADDRESS">
                {getFieldDecorator('address')(<Input placeholder="Address" />)}
              </Form.Item>
              <Form.Item>
                <Button type="danger" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </>
          )}
          {error && <ErrorMessage error={error} />}
          {data && <SuccessMessage message={'User created'} />}
        </Form>
      </Modal>
    </>
  )
}

const WrappedCreateUserModal = Form.create({ name: 'create_user' })(
  CreateUserModal
)

CreateUserModal.propTypes = {
  clientId: PropTypes.number,
  form: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
}

export default WrappedCreateUserModal
