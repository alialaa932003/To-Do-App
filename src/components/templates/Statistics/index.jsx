import React, { useRef, useContext } from "react";
import Chart from "react-apexcharts";
import "./style.css";
import { SideBarContext } from "../../../App";

const Statistics = () => {
    const theme = useContext(SideBarContext);

    let series = [
        {
            name: "series1",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: "series2",
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ];
    let options = {
        chart: {
            foreColor: `${theme.themeState == "dark" ? "#fff" : "#31394d"}`,
        },
        colors: ["rgb(59, 203, 237)", "rgba(120, 109, 241)"],
        fill: {
            colors: ["rgba(59, 203, 237,0)", "rgba(120, 109, 241, 0)"],
        },

        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2023-05-19T00:00:00.000Z",
                "2023-06-19T01:30:00.000Z",
                "2023-07-19T02:30:00.000Z",
                "2023-08-19T03:30:00.000Z",
                "2023-09-19T04:30:00.000Z",
                "2023-10-19T05:30:00.000Z",
                "2023-11-19T06:30:00.000Z",
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    return (
        <div className="animated fadeInDown statistics">
            <div className="chartParent">
                <h3 className="barChartHead">total tasks</h3>
                <Chart
                    style={{ width: "100%" }}
                    options={options}
                    type="area"
                    series={series}
                    height={250}
                />
            </div>
        </div>
    );
};

export default Statistics;
