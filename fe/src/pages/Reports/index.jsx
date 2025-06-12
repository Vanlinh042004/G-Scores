import { useEffect, useState } from "react";
import { getStatsService } from "../../services/studentService";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Reports() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  const mapSubjectToName = (key) => {
    const dict = {
      toan: "Toán",
      ngu_van: "Ngữ văn",
      ngoai_ngu: "Ngoại ngữ",
      vat_li: "Vật lí",
      hoa_hoc: "Hóa học",
      sinh_hoc: "Sinh học",
      lich_su: "Lịch sử",
      dia_li: "Địa lí",
      gdcd: "GDCD",
    };
    return dict[key] || key;
  };
  const fontSize = Math.max(window.innerWidth * 0.013, 12);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const res = await getStatsService();
        const raw = res;
        const transformed = [];
        const allLevels = new Set();

        for (const subject in raw) {
          const displaySubject = mapSubjectToName(subject);
          const entry = { subject: displaySubject };
          for (const level in raw[subject]) {
            entry[level] = raw[subject][level];
            allLevels.add(level);
          }
          transformed.push(entry);
        }
        setData(transformed);
        setKeys(Array.from(allLevels));
      } catch (err) {
        console.error("Error loading stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const colors = [
    "#4ade80",
    "#60a5fa",
    "#facc15",
    "#f87171",
    "#a78bfa",
    "#f472b6",
  ];

  return (
    <div className="p-4 container mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Stats by Subject
      </h2>
      <div className="w-full" style={{ height: 800 }}>
        {loading ? (
          <div className="flex justify-center items-center h-full text-center">
            <span className="text-lg ">Loading...</span>
          </div>
        ) : (
          <ResponsiveContainer width="100%" aspect={4 / 3}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 110 }}
              barCategoryGap={30}
              barGap={5}
            >
              <XAxis
                dataKey="subject"
                tick={{ fontSize, dy: 65 }}
                angle={-90}
                margin={{ top: 20 }}
              />
              <YAxis tick={{ fontSize }} />
              <Tooltip />
              <Legend
                verticalAlign="top"
                align="center"
                wrapperStyle={{ fontSize }}
              />
              {keys.map((key, idx) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[idx % colors.length]}
                  name={` ${key}`}
                  barSize={30}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
