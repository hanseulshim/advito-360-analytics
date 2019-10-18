import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Button, Select } from 'antd'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { UPDATE_USER, TIME_ZONE_LIST, DATE_FORMAT_LIST, USER } from 'api'
import ErrorMessage from 'components/common/ErrorMessage'
import SuccessMessage from 'components/common/SuccessMessage'
import Loader from 'components/common/Loader'
import { getUser, updateUserName } from 'helper'
import UpdatePasswordModal from './UpdatePasswordModal'

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
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`

const UserProfile = ({ form }) => {
  const { getFieldDecorator } = form
  const { id } = getUser()
  const [visible, setVisible] = useState(false)
  const { loading: userLoading, data: userData, error: userError } = useQuery(
    USER,
    {
      variables: { id }
    }
  )
  const { data: timeZoneData, error: timeZoneError } = useQuery(TIME_ZONE_LIST)
  const { data: dateFormatData, error: dateFormatError } = useQuery(
    DATE_FORMAT_LIST
  )
  const timeZoneList = timeZoneData ? timeZoneData.timeZoneList : []
  const dateFormatList = dateFormatData ? dateFormatData.dateFormatList : []

  const [
    updateUser,
    { loading: updateLoading, error: updateError, data: updateData }
  ] = useMutation(UPDATE_USER)

  useEffect(() => {
    if (userData && !updateLoading) {
      const user = userData.user
      form.setFieldsValue({
        username: user.username,
        nameFirst: user.nameFirst,
        nameLast: user.nameLast,
        phone: user.phone,
        address: user.address,
        defaultDateFormat: user.defaultDateFormat,
        defaultTimezone: user.defaultTimezone
      })
    }
  }, [userData])

  if (updateData) {
    updateUserName(updateData.updateUser.fullName)
  }

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields(async (err, values) => {
      if (!err) {
        try {
          await updateUser({
            variables: { id, ...values }
          })
        } catch (e) {
          console.error('Error in update user form: ', e)
        }
      }
    })
  }
  return (
    <>
      <Form onSubmit={handleSubmit} layout="vertical">
        {userLoading ? (
          <Loader />
        ) : (
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
              <Item label="DATE/TIME FORMAT">
                {getFieldDecorator('defaultDateFormat')(
                  <Select showSearch>
                    {dateFormatList.map(date => (
                      <Option key={date} value={date}>
                        {date}
                      </Option>
                    ))}
                  </Select>
                )}
              </Item>
              <Item label="TIMEZONE">
                {getFieldDecorator('defaultTimezone')(
                  <Select showSearch>
                    {timeZoneList.map(zone => (
                      <Option key={zone} value={zone}>
                        {zone}
                      </Option>
                    ))}
                  </Select>
                )}
              </Item>
              <Item label="PHONE">
                {getFieldDecorator('phone')(<Input placeholder="Phone" />)}
              </Item>
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
                <Button type="danger" ghost onClick={() => setVisible(true)}>
                  CHANGE
                </Button>
              </Item>
              <Item label="ADDRESS">
                {getFieldDecorator('address')(<Input placeholder="Address" />)}
              </Item>
            </Column>
          </ColumnContainer>
        )}
        {updateLoading ? (
          <Loader />
        ) : (
          <Form.Item>
            <ButtonRow>
              <Button type="danger" ghost htmlType="submit">
                SAVE
              </Button>
            </ButtonRow>
            {updateError && <ErrorMessage error={updateError} />}
            {userError && <ErrorMessage error={userError} />}
            {timeZoneError && <ErrorMessage error={timeZoneError} />}
            {dateFormatError && <ErrorMessage error={dateFormatError} />}
            {updateData && <SuccessMessage message={'Profile Updated'} />}
          </Form.Item>
        )}
      </Form>
      <UpdatePasswordModal visible={visible} setVisible={setVisible} />
    </>
  )
}

const UserProfileForm = Form.create({ name: 'userProfile' })(UserProfile)

UserProfile.propTypes = {
  form: PropTypes.object.isRequired
}

export default UserProfileForm
