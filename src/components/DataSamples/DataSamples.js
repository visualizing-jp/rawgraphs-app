import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import styles from './DataSamples.module.scss'

const samplesList = [
  {
    name: 'ニューヨークでのヘイト犯罪',
    category: 'Alluvial Diagram',
    url: './sample-datasets/Alluvial diagram - Hate crimes in New York.tsv',
    delimiter: '\t',
    sourceName: 'NYC Open Data',
    sourceURL:
      'https://data.cityofnewyork.us/Public-Safety/NYPD-Hate-Crimes/bqiq-cu78',
  },
  {
    name: 'ラニスター対スタルクの関係',
    category: 'Arc diagrams',
    url:
      './sample-datasets/Arc diagrams - Lannister vs Starck relationships.tsv',
    delimiter: '\t',
    sourceName: 'T. Breid via Kaggle',
    sourceURL: 'https://www.kaggle.com/theobreid/got-data',
  },
  {
    name: 'EU 消費者物価指数',
    category: 'Horizon Graph',
    url: './sample-datasets/Horizon Graph - EU Index of consumer prices.tsv',
    delimiter: '\t',
    sourceName: 'Eurostat',
    sourceURL:
      'https://ec.europa.eu/eurostat/databrowser/bookmark/d84c6140-ed7e-443e-baf9-918679862d58?lang=en',
  },

  {
    name: 'ニューヨークの職業別平均賃金',
    category: 'Beeswarm plot',
    url: './sample-datasets/Beeswarm plot - NY mean wages.tsv',
    delimiter: '\t',
    sourceName: 'NYC Open Data',
    sourceURL:
      'https://data.ny.gov/w/gkgz-nw24/caer-yrtv?cur=S3JXBWlXCbs&from=SAa8_R9mOdD',
  },

  {
    name: '第二次世界大戦中のパリの気温',
    category: 'Contour plot',
    url:
      './sample-datasets/Contour plot - Mean temperature in Paris 1944-1945.tsv',
    delimiter: '\t',
    sourceName: 'NOAA',
    sourceURL:
      'https://www.ncdc.noaa.gov/data-access/land-based-station-data/land-based-datasets/world-war-ii-era-data',
  },

  {
    name: '史上最高の興行収入を記録した映画',
    category: 'Bubble chart',
    url: './sample-datasets/Bubble Chart - TOP 50 Groossing Movies.tsv',
    delimiter: '\t',
    sourceName: 'Wikipedia',
    sourceURL:
      'https://en.wikipedia.org/w/index.php?title=List_of_highest-grossing_films&oldid=1023491946',
  },

  {
    name: 'ミラノに住む外国人',
    category: 'Bumpchart',
    url: './sample-datasets/Bump chart - Foreign residents in Milan.tsv',
    delimiter: '\t',
    sourceName: 'Comune di Milano',
    sourceURL:
      'https://dati.comune.milano.it/dataset/ds74-popolazione-residenti-stranieri-cittadinanza',
  },

  {
    name: '大陸ごとの最も人口の多い都市',
    category: 'Circle packing',
    url: './sample-datasets/Circle Packing - Most populated cities.tsv',
    delimiter: '\t',
    sourceName: 'Wikidata',
    sourceURL:
      'https://query.wikidata.org/#SELECT%20%3Fitem%20%3FitemLabel%20%3Fpopulation%20%3Fcountry%20%3FcountryLabel%20%3Fcontinent%20%3FcontinentLabel%0AWHERE%20%7B%0A%20%20%3Fitem%20wdt%3AP31%20wd%3AQ1637706%20.%20%23%20get%20things%20that%20are%20bands%0A%20%20%3Fitem%20wdt%3AP1082%20%3Fpopulation%20.%0A%20%20%23%3Fitems%20wdt%3AP571%20%3Fdate%20.%20%23%20get%20the%20date%20when%20the%20band%20was%20founded%0A%20%20%3Fitem%20wdt%3AP17%20%3Fcountry%20.%0A%20%20%3Fcountry%20wdt%3AP30%20%3Fcontinent%20.%0A%20%20%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%7D%0A',
  },

  {
    name: 'コービー・ブライアントのシュート',
    category: 'Hexagonal Binning, Voronoi diagram',
    url: './sample-datasets/Hexbin - basketball shots.tsv',
    delimiter: '\t',
    sourceName: 'Kaggle',
    sourceURL: 'https://www.kaggle.com/c/kobe-bryant-shot-selection/',
  },

  {
    name: '楽器別オーケストレーション',
    category: 'Treemap',
    url: './sample-datasets/Treemap - Orchestra.tsv',
    delimiter: '\t',
    sourceName: 'Wikipedia',
    sourceURL:
      'https://en.wikipedia.org/w/index.php?title=Orchestra&oldid=1022472978',
  },

  {
    name: 'イタリアの首相と大統領',
    category: 'Gantt chart',
    url: './sample-datasets/Gantt chart - Italian PMs and presidents.tsv',
    delimiter: '\t',
    sourceName: 'Wikidata',
    sourceURL:
      'https://query.wikidata.org/#%23Primi%20ministri%0ASELECT%20%3Fitem%20%3FitemLabel%20%3Fstart%20%3Fend%0AWHERE%20%0A%7B%0A%20%20%3Fitem%20p%3AP39%20%3Fposition.%0A%20%20%3Fposition%20ps%3AP39%20wd%3AQ332711%3B%0A%20%20%20%20%20%20%20%20pq%3AP580%20%3Fstart%3B%0A%20%20%20%20%20%20%20%20pq%3AP582%20%3Fend%0A%20%20%23%3Fstart%20wdt%3AP580%20%3Fitem.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%7D',
  },

  {
    name: '音楽フォーマットごとの収益',
    category: 'Line chart',
    url: './sample-datasets/Line chart - RIAA Music format revenues.tsv',
    delimiter: '\t',
    sourceName: 'RIAA',
    sourceURL: 'https://www.riaa.com/u-s-sales-database/',
  },

  {
    name: '英国のエネルギーフロー（2050年）',
    category: 'Sankey diagram',
    url: './sample-datasets/Sankey diagram - Energy flows.tsv',
    delimiter: '\t',
    sourceName: 'gov.uk',
    sourceURL:
      'https://www.gov.uk/government/publications/2050-pathways-calculator-with-costs',
  },

  {
    name: 'ワインの香りと周波数',
    category: 'Sunburst Diagram',
    url: './sample-datasets/Sunburst - Wine Aromas.tsv',
    delimiter: '\t',
    sourceName: 'Own work',
    sourceURL: '',
  },

  {
    name: '幸福度指数',
    category: 'Multiset Barchart',
    url: './sample-datasets/Multiset Barchart - Happiness Index.tsv',
    delimiter: '\t',
    sourceName: 'World Happiness Report',
    sourceURL: 'https://worldhappiness.report/',
  },

  {
    name: 'GDPの部門別構成',
    category: 'Stacked barchart',
    url: './sample-datasets/Stacked barchart - GDP sector composition.tsv',
    delimiter: '\t',
    sourceName: 'Wikipedia',
    sourceURL:
      'https://en.wikipedia.org/w/index.php?title=List_of_countries_by_GDP_sector_composition&oldid=1022131842',
  },

  {
    name: 'ネコ科の分類（ネコとその仲間たち）',
    category: 'Dendrogram, Circular dendrogram',
    url: './sample-datasets/Dendrogram - Felidae classification.tsv',
    delimiter: '\t',
    sourceName: 'Special thanks to interns',
    sourceURL: '',
  },

  {
    name: 'アヤメの花',
    category: 'Convex hull, Parallel Coordinates',
    url: './sample-datasets/Convex hull - Iris flowers.tsv',
    delimiter: '\t',
    sourceName: 'R. Fisher',
    sourceURL: 'https://en.wikipedia.org/wiki/Iris_flower_data_set',
  },

  {
    name: '言語別の文字の頻度',
    category: 'Matrix plot (Heatmap)',
    url: './sample-datasets/Matrix Plot - Letters frequencies by language.tsv',
    delimiter: '\t',
    sourceName: 'Wikipedia',
    sourceURL: 'https://en.wikipedia.org/wiki/Letter_frequency',
  },

  {
    name: 'FIFA選手統計',
    category: 'Radar Chart',
    url: './sample-datasets/Radar Chart - Fifa players.tsv',
    delimiter: '\t',
    sourceName: 'K. Gadiya via Kaggle',
    sourceURL: 'https://www.kaggle.com/karangadiya/fifa19',
  },

  {
    name: 'オリンピック メダル',
    category: 'Streamgraph',
    url: './sample-datasets/Streamgraph - Olympics Medals.tsv',
    delimiter: '\t',
    sourceName: 'D. Agrawal via Kaggle',
    sourceURL: 'https://www.kaggle.com/divyansh22/summer-olympics-medals',
  },

  {
    name: 'ニューヨークの天気（2012-2015年）',
    category: 'Violin plot, Boxplot',
    url: './sample-datasets/Violin plot - Weather in New York.tsv',
    delimiter: '\t',
    sourceName: 'NOAA via Vega Dataset',
    sourceURL:
      'https://github.com/vega/vega-datasets/blob/master/SOURCES.md#seattle-weathercsv',
  },

  {
    name: 'Netflixオリジナルシリーズ2013/2017年',
    category: 'Bar chart',
    url: './sample-datasets/Bar chart - Netflix Original Series.tsv',
    delimiter: '\t',
    sourceName: 'M. Schroyer via Data World',
    sourceURL: 'https://data.world/mattschroyer/netflix-original-series',
  },

  // {
  //   name: '',
  //   category: '',
  //   url: './sample-datasets/',
  //   delimiter: '\t',
  //   sourceName: '',
  //   sourceURL: '',
  // },
]
export default function DataSamples({ onSampleReady, setLoadingError }) {
  const select = async (sample) => {
    const { delimiter, url } = sample
    let response
    try {
      response = await fetch(url)
    } catch (e) {
      setLoadingError('Loading error. ' + e.message)
      return
    }
    const text = await response.text()
    onSampleReady(text, delimiter)
    setLoadingError(null)
  }
  return (
    <Row>
      {samplesList
        // sort by category name
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((d, i) => {
          return (
            <Col xs={6} lg={4} xl={3} key={i} style={{ marginBottom: 15 }}>
              <Card className="cursor-pointer h-100">
                <Card.Body
                  onClick={() => {
                    select(d)
                  }}
                  className="d-flex flex-column"
                >
                  <Card.Title className="">
                    <h2 className="">{d.name}</h2>
                    <h4 className="m-0">{d.category}</h4>
                  </Card.Title>
                </Card.Body>
                <a
                  href={d.sourceURL}
                  className={[styles['dataset-source']].join(' ')}
                >
                  Source: {d.sourceName}
                </a>
              </Card>
            </Col>
          )
        })}
    </Row>
  )
}
