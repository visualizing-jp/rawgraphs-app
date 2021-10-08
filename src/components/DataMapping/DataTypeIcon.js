import React from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { dataTypeIcons } from '../../constants'
import styles from './DataMapping.module.scss'

function DataTypeIcon({ type }) {
  const DataTypeIcon = dataTypeIcons[type]
  return (
    <span>
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-top`}>
            {type}s 適用可能
          </Tooltip>
        }
      >
        <DataTypeIcon className={styles['accepted-type-icon']} />
      </OverlayTrigger>
    </span>
  )
}

export default DataTypeIcon
