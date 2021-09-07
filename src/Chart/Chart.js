import React, { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

const Chart = () => {
  const [changeNo, setChangeNo] = useState(0);
  const [changeYes, setChangeYes] = useState(0);

  // const []

  const addNo = () => {
    setChangeNo(changeNo + 1);
  };

  const addYes = () => {
    setChangeYes(changeYes + 1);
  };

  const options = {
    indexAxis: "y",
    animation: true,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Student's Performance Index",
      },
    },
  };

  return (
    <div
      style={{
        color: "white",
        marginTop: "100px",
        marginBotton: "100px",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div>This is the Chart</div>
      <div>This is the Chart</div>

      <Bar
        data={{
          labels: ["No", "Yes"],
          datasets: [
            {
              label: "Key Result",
              data: [changeNo, changeYes],
              // data: [3, 5],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        options={options}
      />

      <div
        style={{
          width: "80%",
          justifyContent: "space-around",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <button
          onClick={() => {
            addNo();
            console.log(changeNo);
          }}
        >
          No
        </button>
        <button
          onClick={() => {
            addYes();
            console.log(changeYes);
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Chart;
