import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import SeparatorSelector from './SeparatorSelector'
import ThousandsSeparatorSelector from './ThousandsSeparatorSelector'
import DecimalsSeparatorSelector from './DecimalsSeparatorSelector'
import DateLocaleSelector from './DateLocaleSelector'
import StackSelector from './StackSelector'

import styles from './ParsingOptions.module.scss'
import { BsArrowRepeat } from 'react-icons/bs'
import { get } from 'lodash'
import { fetchData as fetchDataFromUrl } from '../DataLoader/loaders/UrlFetch'
import { fetchData as fetchDataFromSparql } from '../DataLoader/loaders/SparqlFetch'

const dataRefreshWorkers = {
  "url": fetchDataFromUrl,
  "sparql": fetchDataFromSparql
}

const dataRefreshCaptions = {
  "url": "Refresh data from url",
  "sparql": "Refresh data from query"
}

export default function ParsingOptions(props) {
  const refreshData = async () => {
    const dataRefreshImpl = dataRefreshWorkers[get(props.dataSource, "type", "")]
    const data = await dataRefreshImpl(props.dataSource)
    props.onDataRefreshed(data)
  }

  return (
    <Row>
      <Col className={styles.parsingOptions}>
        <b>データの解釈</b>

        {props.userDataType === 'csv' && (
          <SeparatorSelector
            title="ファイル形式としての区切り記号"
            value={props.separator}
            onChange={(nextSeparator) => props.setSeparator(nextSeparator)}
          />
        )}
        <ThousandsSeparatorSelector
          title="3桁ごとの区切り記号"
          value={props.thousandsSeparator}
          onChange={(nextSeparator) =>
            props.setThousandsSeparator(nextSeparator)
          }
        />
        <DecimalsSeparatorSelector
          title="小数点以下の区切り記号"
          value={props.decimalsSeparator}
          onChange={(nextSeparator) =>
            props.setDecimalsSeparator(nextSeparator)
          }
        />

        <DateLocaleSelector
          title="日付時刻のロケール"
          value={props.locale}
          onChange={(nextLocale) => props.setLocale(nextLocale)}
        />

        {get(dataRefreshWorkers, get(props.dataSource, 'type', ''), null) && (
          <Button
            color="primary"
            className={styles['refresh-button']}
            onClick={() => refreshData()}
          >
            <BsArrowRepeat className="mr-2" />
            {get(dataRefreshCaptions, get(props.dataSource, 'type', ''), "Refresh data")}
          </Button>
        )}

        <div className="divider mb-3 mt-0" />

        <b>データの変換</b>

        <StackSelector
          title="スタック"
          value={props.stackDimension}
          list={props.dimensions}
          onChange={(nextStackDimension) =>
            props.setStackDimension(nextStackDimension)
          }
        />
      </Col>
    </Row>
  )
}
