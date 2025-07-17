
"use client";

import { Bold } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadialChart = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#18181B",
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.5
          }
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.7
          }
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "white",
            fontSize: "17px"
          },
          value: {
            formatter: (val: number) => `${Math.round(val)}%`,
            color: "#10B981",
            fontSize: "36px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    tooltip: {
  enabled: true,
  theme: "dark", // ou "light"
  style: {
    fontSize: '14px',
    fontFamily: 'Arial',
  },
  y: {
    formatter: (val: number) => `${val.toFixed(2)}%`, // ou `${val.toLocaleString()} reais`
    title: {
      formatter: () => "Progresso"
    }
  }
},
    labels: ["Progresso"]
  };

  const series = [75];

  return <Chart options={options} series={series} type="radialBar" height={350} />;
};

export default RadialChart;
