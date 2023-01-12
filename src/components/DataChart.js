import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Line2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

const DataChart = (props) => {
  const { id, isRegion, isDetailed } = props;
  let dataSource;

  if (isRegion) {
    dataSource = useSelector((state) => state.regions).find((region) => region.code === id);
  } else {
    dataSource = useSelector((state) => state.countries).find((country) => country.code === id);
  }

  let chartLabels = [
    {
      label: 'No Data',
    },
  ];
  let chartData = [
    {
      value: '0',
    },
  ];

  if (dataSource) {
    chartData = dataSource.gdp.map((element) => (
      {
        value: element.value.toString() ?? '0',
      }
    )).reverse();
    chartLabels = dataSource.gdp.map((element) => (
      {
        label: element.date,
      }
    )).reverse();
  }

  const chartConfigs = {
    type: 'scrollline2d', // The chart type
    width: '300', // Width of the chart
    height: '250', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        // Set the chart caption
        caption: dataSource ? dataSource.name : 'No Data',
        // Set the chart subcaption
        subCaption: 'Millions of USD$',
        // Set the x-axis name
        xAxisName: 'Years',
        // Set the y-axis name
        yAxisName: 'GDP in Millons of USD',
        // Set the theme for your chart
        theme: 'candy',
        lineThickness: 3,
        flatScrollBars: 1,
        scrollheight: 10,
        numVisiblePlot: isDetailed ? 20 : 6,
        scrollToEnd: true,
        scrollPosition: 'bottom',
      },
      // Chart Data
      categories: [
        {
          category: chartLabels,
        },
      ],
      dataset: [
        {
          data: chartData,
        },
      ],
    },
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ReactFC {...chartConfigs} />
  );
};

DataChart.propTypes = {
  id: PropTypes.string.isRequired,
  isRegion: PropTypes.bool,
  isDetailed: PropTypes.bool,
};

DataChart.defaultProps = {
  isRegion: false,
  isDetailed: false,
};

export default DataChart;
