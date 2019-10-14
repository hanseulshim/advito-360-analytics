import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Button, Select } from 'antd'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { RESET_PASSWORD, TIMEZONE_LIST } from 'api'
import ErrorMessage from 'components/common/ErrorMessage'
import SuccessMessage from 'components/common/SuccessMessage'
import Loader from 'components/common/Loader'

const { Option } = Select

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`

const Link = styled.div`
  color: ${props => props.theme.white};
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`

const UserProfile = ({ form }) => {
  const [resetPassword, { loading, error, data: resetSuccess }] = useMutation(
    RESET_PASSWORD
  )
  const { loading: timezoneLoading, data } = useQuery(TIMEZONE_LIST)
  const timezoneList = data ? data.timezoneList : []

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields(async (err, { password, confirmPassword }) => {
      if (!err) {
        try {
          await resetPassword({
            variables: { password, confirmPassword }
          })
        } catch (e) {
          console.error('Error in reset password form: ', e)
        }
      }
    })
  }

  const { getFieldDecorator } = form
  return (
    <Form onSubmit={handleSubmit} layout="vertical">
      <Form.Item label="USERNAME/EMAIL">
        {getFieldDecorator('confirmPassword', {
          rules: [{ required: true, message: 'Please input your password!' }]
        })(<Input type="password" placeholder="Confirm Password" />)}
      </Form.Item>
      {timezoneLoading ? (
        <Loader />
      ) : (
        <Form.Item label="Timezone">
          {getFieldDecorator('defaultTimezone', {
            initialValue: 'EST'
          })(
            <Select showSearch>
              {timezoneList.map(zone => (
                <Option key={zone} value={zone}>
                  {zone}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
      )}
      <Form.Item>
        <ButtonRow>
          <Button type="danger" htmlType="submit">
            Reset Password
          </Button>
        </ButtonRow>
        {error && <ErrorMessage error={error} />}
        {resetSuccess && <SuccessMessage message={'Password has been reset'} />}
      </Form.Item>
    </Form>
  )
}

const UserProfileForm = Form.create({ name: 'userProfile' })(UserProfile)

UserProfile.propTypes = {
  form: PropTypes.object.isRequired
}

export default UserProfileForm
