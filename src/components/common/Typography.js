import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

const { Title: TitleComponent } = Typography

export const Title = ({ level = 1, message }) => (
  <TitleComponent level={level}>{message}</TitleComponent>
)

Title.propTypes = {
  level: PropTypes.number,
  message: PropTypes.string
}

export default Title
