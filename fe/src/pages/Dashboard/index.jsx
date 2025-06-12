import { useState, useEffect } from "react";
import { getStudentsTop10Service } from "../../services/studentService";

export default function Dashboard() {
  const [topStudents, setTopStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStudentsTop10Service()
      .then((res) => {
        setTopStudents(res || []);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {" "}
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Top 10 Students</h2>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>SBD</th>
                  <th>Toán</th>
                  <th>Ngữ Văn</th>
                  <th>Ngoại Ngữ</th>
                  <th>Vật Lí</th>
                  <th>Hóa Học</th>
                  <th>Sinh Học</th>
                  <th>Mã Ngoại Ngữ</th>
                  <th>Điểm TB</th>
                </tr>
              </thead>
              <tbody>
                {topStudents.map((student, idx) => (
                  <tr key={student.sbd}>
                    <td>{idx + 1}</td>
                    <td>{student.sbd}</td>
                    <td>{student.toan}</td>
                    <td>{student.ngu_van}</td>
                    <td>{student.ngoai_ngu}</td>
                    <td>{student.vat_li}</td>
                    <td>{student.hoa_hoc}</td>
                    <td>{student.sinh_hoc}</td>
                    <td>{student.ma_ngoai_ngu}</td>
                    <td>{Number(student.average).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
