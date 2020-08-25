import React, { useEffect, useState, useRef } from "react";
import { Col, Card, CardBody, CardTitle, CardHeader } from "reactstrap";
import { Line } from "react-chartjs-2";

import AreaChart from "../../../components/Charts/AreaChart";

import WorkerService from "../../../services/WorkerServices";
import worker from "../../../workers/worker";

const CPUUtilizationChart = (props) => {
  const chartRef = useRef(null);
  console.log("rendering");
  const workers = new WorkerService(worker);
  const onRefresh = (chart) => {
    workers.postMessage({ action: "Test" });
  };
  console.log(chartRef);
  workers.addEventListener("message", (event) => {
    const x1 = Date.now()
    const chart = chartRef.current.chartInstance;
    chart.config.data.datasets.forEach(function (dataset) {
      dataset.data.push({
        x: x1,
        y: event.data.randomNumber,
      });
    });
  });

  const chartData = {
    datasets: [
      {
        label: "CPU Activity",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        fill: true,
        cubicInterpolationMode: "monotone",
        data: [],
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    // events: {
    //   onClick: (e) => e.stopPropagation(),
    //   onHover: (e) => e.stopPropagation()
    // },
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    tooltips: {
      display: false,
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      enabled: false,
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a",
          },
        },
      ],
      xAxes: [
        {
          // begin
          type: "realtime",
          realtime: {
            duration: 20000,
            refresh: 1000,
            delay: 5000,
            onRefresh: onRefresh,
          },
          display: false,
          // end
          barPercentage: 1.6,
          gridLines: {
            display: true,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent",
          },
          // ticks: {
          //   padding: 20,
          //   fontColor: "#9a9a9a",
          // },
        },
      ],
    },
  };

  return (
    <>
      <AreaChart
        cRef={chartRef}
        width={props.width}
        header="CPU"
        title="CPU Utilization"
        chartData={chartData}
        chartOptions={chartOptions}
      />
    </>
  );
};

export default CPUUtilizationChart;
