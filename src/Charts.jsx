import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const MyChartComponent = () => {
  useEffect(() => {
    const data = [
      {
        name: "Seri 1",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#aa56ff",
      },
      {
        name: "Seri 2",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#aa56ff",
      },
      {
        name: "Seri 3",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#5fbf00",
      },
      {
        name: "Seri 4",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#5fbf00",
      },
      {
        name: "Seri 5",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#5fbf00",
      },
      {
        name: "Seri 6",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#ff7f00",
      },
      {
        name: "Seri 7",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#ff7f00",
      },
      {
        name: "Seri 8",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#ff0000",
      },
      {
        name: "Seri 9",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#ff0000",
      },
      {
        name: "Seri 10",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#ff0000",
      },
      {
        name: "Seri 11",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#ff0000",
      },
      {
        name: "Seri 12",
        data: [
          { x: "10:00", y: 8 },
          { x: "10:30", y: 8 },
          { x: "11:00", y: 8 },
          { x: "11:30", y: 8 },
          { x: "12:00", y: 8 },
          { x: "12:30", y: 8 },
        ],
        // color: "#ff0000",
      },
    ];

    const colors = ["#aa56ff", "#5fbf00", "#ff7f00", "#ff0000"];
      
    const options = {
      series: data,
      chart: {
        height: 450,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      colors: colors,
      xaxis: {
        type: "category",
        categories: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"],
      },
      title: {
        text: "HeatMap Chart (Different color shades for each series)",
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" />;
};

export default MyChartComponent;
