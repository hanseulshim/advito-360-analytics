import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Button, Select } from 'antd'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { RESET_PASSWORD, TIME_ZONE_LIST, DATE_FORMAT_LIST } from 'api'
import ErrorMessage from 'components/common/ErrorMessage'
import SuccessMessage from 'components/common/SuccessMessage'
import Loader from 'components/common/Loader'

const { Option } = Select

const ColumnContainer = styled.div`
  display: flex;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1
  margin-right: ${props => props.first && '5em'};
`

const Item = styled(Form.Item)`
  flex: 1;
`

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`

const UserProfile = ({ form }) => {
  const [resetPassword, { loading, error, data: resetSuccess }] = useMutation(
    RESET_PASSWORD
  )
  const { loading: timeZoneLoading, data: timeZoneData } = useQuery(
    TIME_ZONE_LIST
  )
  const { loading: dateFormatLoading, data: dateFormatData } = useQuery(
    DATE_FORMAT_LIST
  )
  const timeZoneList = timeZoneData ? timeZoneData.timeZoneList : []
  const dateFormatList = dateFormatData ? dateFormatData.dateFormatList : []

  const handleSubmit = e => {
    e.preventDefault()
    // form.validateFields(async (err, { password, confirmPassword }) => {
    form.validateFields(async (err, all) => {
      console.log(all)
      if (!err) {
        // try {
        //   await resetPassword({
        //     variables: { password, confirmPassword }
        //   })
        // } catch (e) {
        //   console.error('Error in reset password form: ', e)
        // }
      }
    })
  }

  const { getFieldDecorator } = form
  return (
    <Form onSubmit={handleSubmit} layout="vertical">
      <ColumnContainer>
        <Column first>
          <Item label="USERNAME/EMAIL">
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' },
                {
                  type: 'email',
                  message: 'The input is not a valid email!'
                }
              ]
            })(<Input placeholder="Username" />)}
          </Item>
          {dateFormatLoading ? (
            <Loader />
          ) : (
            <Item label="DATE/TIME FORMAT">
              {getFieldDecorator('defaultDateFormat', {
                initialValue: 'MM/DD/YY'
              })(
                <Select showSearch>
                  {dateFormatList.map(date => (
                    <Option key={date} value={date}>
                      {date}
                    </Option>
                  ))}
                </Select>
              )}
            </Item>
          )}
          {timeZoneLoading ? (
            <Loader />
          ) : (
            <Item label="TIMEZONE">
              {getFieldDecorator('defaultTimezone', {
                initialValue: 'EST'
              })(
                <Select showSearch>
                  {timeZoneList.map(zone => (
                    <Option key={zone} value={zone}>
                      {zone}
                    </Option>
                  ))}
                </Select>
              )}
            </Item>
          )}
        </Column>
        <Column>
          <Item label="FIRST NAME">
            {getFieldDecorator('nameFirst', {
              rules: [
                { required: true, message: 'Please input your first name!' }
              ]
            })(<Input placeholder="First Name" />)}
          </Item>
          <Item label="LAST NAME">
            {getFieldDecorator('nameLast', {
              rules: [
                { required: true, message: 'Please input your last name!' }
              ]
            })(<Input placeholder="Last Name" />)}
          </Item>
          <Item label="PASSWORD">
            <span style={{ marginRight: '5em' }}>**********</span>
            <Button type="danger" ghost>
              Reset Password
            </Button>
          </Item>
        </Column>
      </ColumnContainer>
      <Form.Item>
        <ButtonRow>
          <Button type="danger" ghost htmlType="submit">
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
