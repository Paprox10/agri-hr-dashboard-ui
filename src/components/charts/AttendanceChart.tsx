
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 45,
    late: 5,
    absent: 2,
  },
  {
    name: "Tue",
    present: 48,
    late: 3,
    absent: 1,
  },
  {
    name: "Wed",
    present: 47,
    late: 4,
    absent: 1,
  },
  {
    name: "Thu",
    present: 44,
    late: 6,
    absent: 2,
  },
  {
    name: "Fri",
    present: 46,
    late: 4,
    absent: 2,
  },
  {
    name: "Sat",
    present: 42,
    late: 3,
    absent: 7,
  },
  {
    name: "Sun",
    present: 0,
    late: 0,
    absent: 0,
  },
];

const AttendanceChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "0.375rem",
            }}
          />
          <Legend />
          <Bar dataKey="present" name="Present" stackId="a" fill="#3F704D" />
          <Bar dataKey="late" name="Late" stackId="a" fill="#FFC107" />
          <Bar dataKey="absent" name="Absent" stackId="a" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
