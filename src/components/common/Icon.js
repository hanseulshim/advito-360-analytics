import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconStyled = styled.i`
  color: ${props => props.info && props.theme.treePoppy};
  border: ${props => props.info && `2px solid ${props.theme.treePoppy}`};
  padding: ${props => props.info && '0.25em .6em'};
  border-radius: ${props => props.info && '100%'};
  font-size: ${props => props.info && '80%'};
  margin-left: ${props => props.info && '1em'};
`

const Icon = ({ className, ...style }) => {
  return <IconStyled className={className} {...style} />
}

Icon.propTypes = {
  className: PropTypes.string
}

export default Icon
