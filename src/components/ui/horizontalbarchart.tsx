"use client";

import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const HorizontalBarChart = () => {
  const options = {
    chart: {
    type: "bar",
    height: 100,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: "end",
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["Meta Mensal"],
  },
  tooltip: {
    theme: "dark", 
    style: {
      fontSize: '14px',
      fontFamily: 'Arial',
    },
    fillSeriesColor: false,
    marker: {
      show: true,
    },
    y: {
      formatter: (val: number) => `R$ ${val.toLocaleString("pt-BR")}`,
      title: {
        formatter: () => "Valor:"
      }
    }
  }
} as const;

  const series = [
    {
      data: [5000],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={100} />;
};

export default HorizontalBarChart;