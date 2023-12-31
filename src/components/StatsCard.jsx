import React, { useEffect, useRef } from "react";
import '../index.css';
import Chart from 'chart.js/auto';

export default function StatsCard() {
    // const chartRef = useRef(null);
    // const chartInstance = useRef(null);

    // useEffect(() => {
    //     if (chartInstance.current) {
    //         chartInstance.current.destroy();
    //     }

    //     const myChartRef = chartRef.current.getContext('2d');

    //     chartInstance.current = new Chart(myChartRef, {
    //         type: 'line',
    //         data: {
    //             labels: ["July", "August", "Semptember", "October", "November"],
    //             datasets: [
    //                 {
    //                     label: 'Your money',
    //                     data: [7900, 2400, 3900, 6300, 7100],
    //                     backgroundColor: '#FFFFFF',
    //                     borderColor: '#FFFFFF',
    //                     borderWidth: 3,
    //                 },
    //             ]
    //         },
    //         options: {
    //             responsive: true,
    //             maintainAspectRatio: false,
    //             scales: {
    //                 x: {
    //                     title: {
    //                         display: false,
    //                         text: 'money amount'
    //                     }
    //                 },
    //                 y: {
    //                     beginAtZero: true,
    //                     title: {
    //                         display: false,
    //                         text: 'months list'
    //                     }
    //                 }
    //             },
    //         },
    //     });

    // }, []);

    return (
        <section className="bg-blue-300 h-72 w-3/5 rounded-3xl font-Tsukimi p-5 md:w-full md:h-64">
            <div className="h-5/6 flex items-center">
                <h2 className="text-5xl md:text-3xl"> NO STATS... </h2>
            </div>         
        </section>
    )
}

// <canvas ref={chartRef} width="400" height="200" />