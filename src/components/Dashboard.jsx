import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./styles/Dashboard.css";
import { ImAidKit } from "react-icons/im";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GiCorkedTube } from "react-icons/gi";
import { entry, data02, COLORS } from "../assets/Chartdata";
import { Chart } from "../assets/Data2";
const Dashboard = () => {
  return (
    <>
      <div className="dash-11">
        <div className="box-86">
          {Chart.map((elem) => {
            return (
              <>
                <div className="chart-11">
                  <div className="part-7 font">
                    <h2
                      className="head-14 mid-1"
                      style={{ marginBottom: "-2vh" }}
                    >
                      {elem.head} <span className="small">{elem.subhead}</span>
                    </h2>
                    <h1 className="head-15 center-1 ">{elem.num}</h1>
                    <h2 className="head-16 mid-1">{elem.time}</h2>
                  </div>
                  <div className="part-8">
                    <img src={elem.app} alt="" className="icon" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="box-87">
          <div className="chart-22">
            <ResponsiveContainer
              width="69%"
              height={255}
              className="chart-2 font"
            >
              <h1 className="head-r">Patients By Lab Test</h1>
              <BarChart data={entry}>
                <XAxis dataKey="name" stroke="black" />
                <YAxis stroke="black" />
                <Tooltip
                  wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
                />
                <Legend
                  width={100}
                  wrapperStyle={{
                    top: 40,
                    right: 20,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "40px",
                  }}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="count" fill="#002D62" barSize={35} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-33">
            <ResponsiveContainer
              width="30%"
              height={431}
              className="chart-5 font"
            >
              <h1 className="head-r">Patients Feedback</h1>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={data02}
                  cx="50%"
                  cy="22%"
                  innerRadius={65}
                  outerRadius={95}
                >
                  {" "}
                  {data02.map((entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
