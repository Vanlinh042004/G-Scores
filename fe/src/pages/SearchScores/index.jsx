import { useState } from "react";
import { getStudentService } from "../../services/studentService";
import swal from "sweetalert";
export default function SearchScore() {
  const [regNumber, setRegNumber] = useState("");
  const [scores, setScores] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(regNumber);
    if (!regNumber) {
      swal("Error", "Please enter a registration number!", "error");
      return;
    }
    try {
      const response = await getStudentService(regNumber);
      console.log(response);
      setScores(response);
    } catch (error) {
      //console.error("Error fetching scores:", error.response.data.error);
      swal("Error", error.response.data.error, "error");
    }
    setRegNumber("");
  };

  return (
    <div className="container py-4" style={{ minHeight: "100vh" }}>
      <div className="mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-3 fw-bold">User Registration</h2>
            <form
              className="row g-3 align-items-center"
              onSubmit={handleSubmit}
            >
              <div className="col-auto">
                <label htmlFor="regNumber" className="col-form-label fw-medium">
                  Registration Number:
                </label>
              </div>
              <div className="col-auto flex-grow-1" style={{ minWidth: 250 }}>
                <input
                  type="text"
                  className="form-control"
                  id="regNumber"
                  placeholder="Enter registration number"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-dark px-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-2 fw-bold">Detailed Scores</h2>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {scores && Object.keys(scores).length > 0 ? (
                    [
                      { label: "Toán", key: "toan" },
                      { label: "Ngữ văn", key: "ngu_van" },
                      { label: "Ngoại ngữ", key: "ngoai_ngu" },
                      { label: "Hóa học", key: "hoa_hoc" },
                      { label: "Sinh học", key: "sinh_hoc" },
                      { label: "Vật lí", key: "vat_li" },
                    ].map((subject) =>
                      scores[subject.key] !== undefined ? (
                        <tr key={subject.key}>
                          <td>{subject.label}</td>
                          <td>{scores[subject.key]}</td>
                        </tr>
                      ) : null
                    )
                  ) : (
                    <tr>
                      <td colSpan="2" className="text-center">
                        No scores available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
