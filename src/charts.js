import {
  alluvialdiagram,
  arcdiagram,
  barchart,
  barchartmultiset,
  barchartstacked,
  beeswarm,
  boxplot,
  bubblechart,
  bumpchart,
  circlepacking,
  circularDendrogram,
  contourPlot,
  convexHull,
  dendrogram,
  ganttChart,
  hexagonalBinning,
  horizongraph,
  linechart,
  matrixplot,
  parallelcoordinates,
  radarchart,
  sankeydiagram,
  slopechart,
  streamgraph,
  sunburst,
  treemap,
  violinplot,
  voronoidiagram,
} from '@rawgraphs/rawgraphs-charts'

// New charts, not included into first release.
// Comment at necessity.
let charts = [
  alluvialdiagram,
  arcdiagram,
  barchart,
  barchartmultiset,
  barchartstacked,
  beeswarm,
  boxplot,
  bubblechart,
  bumpchart,
  circlepacking,
  circularDendrogram,
  contourPlot,
  convexHull,
  dendrogram,
  ganttChart,
  hexagonalBinning,
  horizongraph,
  linechart,
  matrixplot,
  parallelcoordinates,
  radarchart,
  sankeydiagram,
  slopechart,
  streamgraph,
  sunburst,
  treemap,
  violinplot,
  voronoidiagram,
]

// 日本語説明文の翻訳
const chartDescriptions = {
  'rawgraphs.alluvialdiagram': 'カテゴリカル次元間の相関関係をフローとして表示し、共有アイテムを持つカテゴリを視覚的にリンクします。'
}

// チャートの説明文のみを日本語に上書き（名前は変更しない）
charts = charts.map(chart => {
  const description = chartDescriptions[chart.metadata.id]
  if (description) {
    return {
      ...chart,
      metadata: {
        ...chart.metadata,
        description: description
      }
    }
  }
  return chart
})

export default charts
