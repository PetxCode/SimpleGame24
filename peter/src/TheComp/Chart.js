import React, { useEffect, useState } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { app } from "../base";
import firebase from "firebase";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from "victory";
import BarChart from "react-race-chart";

const Chart = () => {
  const [theChart, setTheChart] = useState({});
  const [data, setData] = useState([]);
  const [data1, setData1] = useState(12);
  const [data2, setData2] = useState(36);
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  const theNo = () => {
    setNoCount(noCount + 1);
  };

  const theYes = () => {
    setYesCount(yesCount + 1);
  };

  const addYES = async (id) => {
    await app.firestore().collection("vote").doc(id).update({
      // time: firebase.firestore.FieldValue.serverTimestamp(),
      Yes: yesCount,
    });
  };
  const addNO = async (id) => {
    await app.firestore().collection("vote").doc(id).update({
      // time: firebase.firestore.FieldValue.serverTimestamp(),
      No: noCount,
    });
  };

  const getData = async () => {
    await app
      .firestore()
      .collection("vote")
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setData(r);
      });
  };

  const myChart = () => {
    setTheChart({
      labels: ["No", "Yes"],

      datasets: [
        {
          label: "# of Votes",
          data: [data1, data2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    myChart();
    getData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <div>Peter</div>

        {data.map((props) => (
          <>
            <Bar
              type="horizontal"
              width={1000}
              height={500}
              data={{
                // type: "horizontalBar",
                animation: false,
                labels: ["No", "Yes"],

                datasets: [
                  {
                    label: "# of Votes",
                    data: [props.No, props.Yes],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 4,
                  },
                ],
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "20px",
                }}
              >
                <div>Cast for NO</div>
                <button
                  onClick={() => {
                    theNo();
                    addNO(props.id);
                    console.log(noCount);
                  }}
                >
                  NO
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "20px",
                }}
              >
                <div>Cast for YES</div>
                <button
                  onClick={() => {
                    theYes();
                    addYES(props.id);
                    console.log(yesCount);
                  }}
                >
                  YES
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Chart;
