import React, { useState } from 'react'
import styled from 'styled-components'
import { Table, Select, Button } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import { CLIENT_LIST, ANALYTICS_ID, USER_LIST } from 'api'
import Loader from 'components/common/Loader'
import ErrorMessage from 'components/common/ErrorMessage'
import CreateUserModal from './CreateUserModal'
const { Option } = Select

const SelectRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`

const columns = [
  {
    title: 'Name',
    dataIndex: 'fullName',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.fullName.localeCompare(b.fullName)
  },
  {
    title: 'Email',
    dataIndex: 'email',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.email.localeCompare(b.email)
  },
  {
    title: 'Phone',
    dataIndex: 'phone'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const ClientSetup = () => {
  const [clientId, selectClient] = useState(null)
  const [visible, setVisible] = useState(false)
  const { loading, error: clientListError, data } = useQuery(CLIENT_LIST, {
    variables: { applicationId: ANALYTICS_ID }
  })
  const { data: userListData, error: userListError } = useQuery(USER_LIST, {
    variables: { clientId }
  })
  if (loading) return <Loader />
  const clientList = data ? data.clientList : []
  const userList = userListData ? userListData.userList : []
  return (
    <div>
      <SelectRow>
        <Select
          placeholder="Select a client"
          showSearch
          style={{ width: '50%' }}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
          onChange={value => selectClient(value)}
        >
          {clientList.map(({ id, clientName }, i) => (
            <Option key={i} value={id}>
              {clientName}
            </Option>
          ))}
        </Select>
        <Button
          type="danger"
          onClick={() => setVisible(true)}
          disabled={clientId === null || isNaN(clientId)}
        >
          + Create User
        </Button>
      </SelectRow>
      {clientListError && <ErrorMessage error={clientListError} />}
      <Table dataSource={userList} columns={columns} rowKey="id" />
      {userListError && <ErrorMessage error={userListError} />}
      <CreateUserModal
        clientId={clientId}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  )
}

export default ClientSetup
