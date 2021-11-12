import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preload from "../../../components/Preload";

function Yudisium2(props) {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAssessments = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/progress/assessments/2021/2/subjects`
      );
      setAssessments(response.data.data);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAssessments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-4">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Yudisium PLP2 tahun 2021
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  Silakan pilih sesuai jurusan
                </div>
                <Link
                  to="/plp2/yudisium/21"
                  className="btn btn-sm btn-primary m-1"
                >
                  B. Indonesia
                </Link>
                <Link
                  to="/plp2/yudisium/22"
                  className="btn btn-sm btn-primary m-1"
                >
                  B. Inggris
                </Link>
                <Link
                  to="/plp2/yudisium/51"
                  className="btn btn-sm btn-primary m-1"
                >
                  Matematika
                </Link>
                <Link
                  to="/plp2/yudisium/53"
                  className="btn btn-sm btn-primary m-1"
                >
                  Fisika
                </Link>
                <Link
                  to="/plp2/yudisium/54"
                  className="btn btn-sm btn-primary m-1"
                >
                  Biologi
                </Link>
                <Link
                  to="/plp2/yudisium/65"
                  className="btn btn-sm btn-primary m-1"
                >
                  Ekonomi
                </Link>
                <Link
                  to="/plp2/yudisium/70"
                  className="btn btn-sm btn-primary m-1"
                >
                  Geografi
                </Link>
                <Link
                  to="/plp2/yudisium/71"
                  className="btn btn-sm btn-primary m-1"
                >
                  Sejarah
                </Link>
                <Link
                  to="/plp2/yudisium/91"
                  className="btn btn-sm btn-primary m-1"
                >
                  Penjas
                </Link>
                <hr />
                {loading ? (
                  <Preload />
                ) : (
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Mapel</th>
                        <th className="text-end">A</th>
                        <th className="text-end">B</th>
                        <th className="text-end">C</th>
                        <th className="text-end">D</th>
                        <th className="text-end">E</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assessments
                        .sort((a, b) => (a.subjectId > b.subjectId ? 1 : -1))
                        .map((assessment, index) => {
                          return (
                            <tr key={index}>
                              <td>{assessment.mapel}</td>
                              <td className="text-end">{assessment.hurufA}</td>
                              <td className="text-end">{assessment.hurufB}</td>
                              <td className="text-end">{assessment.hurufC}</td>
                              <td className="text-end">{assessment.hurufD}</td>
                              <td className="text-end">{assessment.hurufE}</td>
                              <td className="text-end">{assessment.total}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yudisium2;
