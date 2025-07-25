import React, { useState, useMemo, useCallback } from 'react'
import classNames from 'classnames'
import { Row, Col, Card, Dropdown } from 'react-bootstrap'
import { BsLink } from 'react-icons/bs'
import uniq from 'lodash/uniq'
import { CHART_CATEGORY_LABELS } from '../../constants'
import styles from './ChartSelector.module.scss'

function filterCharts(charts, filter) {
  return filter === '全てのチャート'
    ? charts
    : charts.filter((d) => d.metadata.categories.indexOf(filter) !== -1)
}

function ChartSelector({ availableCharts, currentChart, setCurrentChart }) {
  const [filter, setFilter] = useState('全てのチャート')

  const charts = useMemo(() => {
    return filterCharts(availableCharts, filter)
  }, [availableCharts, filter])

  const handleFilterChange = useCallback(
    (nextFilter) => {
      setFilter(nextFilter)
      const nextCharts = filterCharts(availableCharts, nextFilter)
      if (nextCharts.indexOf(currentChart) === -1) {
        setCurrentChart(nextCharts[0])
      }
    },
    [availableCharts, currentChart, setCurrentChart]
  )

  return (
    <>
      <Row>
        <Col className="text-right">
          絞り込む
          <Dropdown className="d-inline-block ml-2 raw-dropdown">
            <Dropdown.Toggle variant="white" className="pr-5">
              {CHART_CATEGORY_LABELS[filter] || filter}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                key={'全てのチャート'}
                onClick={() => handleFilterChange('全てのチャート')}
              >
                全てのチャート
              </Dropdown.Item>
              {uniq(
                availableCharts.map((d) => d.metadata.categories).flat()
              ).map((d) => {
                return (
                  <Dropdown.Item key={d} onClick={() => handleFilterChange(d)}>
                    {CHART_CATEGORY_LABELS[d] || d.charAt(0).toUpperCase() + d.slice(1)}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className="pt-3">
          {currentChart && (
            <Card className={styles.currentChart}>
              <Card.Img variant="top" src={currentChart.metadata.thumbnail} />
              <Card.Body>
                <Card.Title className="m-0">
                  <h2 className="m-0">{currentChart.metadata.name}</h2>
                </Card.Title>
                <Card.Subtitle className="m-0">
                  <h4 className="mb-2">{currentChart.metadata.category}</h4>
                </Card.Subtitle>
                <Card.Text>{currentChart.metadata.description}</Card.Text>
                <Card.Link
                  className={classNames({
                    [styles.disabled]: !currentChart.metadata.code,
                    underlined: true,
                  })}
                  href={currentChart.metadata.code}
                  target="_blank"
                >
                  <BsLink color="black" /> Code
                </Card.Link>
                <Card.Link
                  className={classNames({
                    [styles.disabled]: !currentChart.metadata.tutorial,
                    underlined: true,
                  })}
                  href={currentChart.metadata.tutorial}
                  target="_blank"
                >
                  <BsLink color="black" /> Tutorial
                </Card.Link>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col>
          <Row>
            {charts.map((d, i) => {
              return (
                <Col xs={4} key={'chart-' + i} className={`p-3`}>
                  <Card
                    onClick={() => {
                      setCurrentChart(d)
                    }}
                    className={`flex-row h-100 cursor-pointer ${
                      d === currentChart ? 'active' : ''
                    }`}
                  >
                    <div
                      className={`h-100 w-25 ${styles.thumbnail}`}
                      style={{ backgroundImage: `url("${d.metadata.icon}")` }}
                    ></div>
                    <Card.Body className="w-75 px-2 py-3">
                      <Card.Title className="m-0">
                        <h2 className="m-0" style={{ whiteSpace: 'nowrap' }}>
                          {d.metadata.name}
                        </h2>
                      </Card.Title>
                      <Card.Subtitle className="m-0">
                        <h4 className="m-0">
                          {d.metadata.categories
                            .map((cat) => CHART_CATEGORY_LABELS[cat] || cat.charAt(0).toUpperCase() + cat.slice(1))
                            .join(', ')}
                        </h4>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(ChartSelector)
