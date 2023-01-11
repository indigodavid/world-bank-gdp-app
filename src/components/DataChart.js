import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Line2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

const DataChart = (props) => {
  const { id, isRegion } = props;
  let dataSource;

  if (isRegion) {
    dataSource = useSelector((state) => state.regions).find((region) => region.code === id);
  } else {
    dataSource = useSelector((state) => state.countries).find((country) => country.code === id);
  }

  let chartData = [
    {
      label: 'No Data',
      value: '0',
    },
  ];

  console.log(dataSource);
  if (dataSource && dataSource.gdp.length > 1) {
    chartData = dataSource.gdp.map((element) => (
      {
        label: element.date,
        value: element.value.toString() ?? '0',
      }
    )).reverse();
  }

  const chartConfigs = {
    type: 'line', // The chart type
    width: '320', // Width of the chart
    height: '320', // Height of the chart
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
        theme: 'fusion',
        scrollPosition: 'bottom',
      },
      // Chart Data
      data: chartData,
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
};

DataChart.defaultProps = {
  isRegion: false,
};

export default DataChart;