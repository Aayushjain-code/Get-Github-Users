// STEP 1 - Include Dependencies
// Include react
import React from "react";

import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, chart, FusionTheme);

// STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations


const chartComponent = ({ data }) => {
  const chartConfigs = {
    type: "Pie3D", // The chart type
    width: "400", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: '55%',


      },
      // Chart Data
      data: data,
    }
  };
  return (<ReactFC {...chartConfigs} />);
}

export default chartComponent;
