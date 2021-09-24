import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Preload from "../../../components/Preload";

function YudisiumMapel1(props) {
  let { mapelId } = useParams();
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAssessments = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/progress/yudisium/2021/1/${mapelId}`
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
  }, [mapelId]);

  return (
    <div className="p-4">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Rekap Status Penilaian PLP 1 By Mahasiswa
                <Link
                  to="/plp1/yudisium"
                  className="btn btn-sm btn-light float-end"
                >
                  HOME
                </Link>
              </div>
              <div className="card-body">
                {loading ? (
                  <Preload />
                ) : (
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nama</th>
                        <th className="text-end">N2</th>
                        <th className="text-end">N8</th>
                        <th className="text-end">Nilai PLP1</th>
                        <th>Huruf</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assessments
                        .sort((a, b) =>
                          a.student_name > b.student_name ? 1 : -1
                        )
                        .map((assessment, index) => {
                          return (
                            <tr
                              key={index}
                              className={
                                assessment.skor <= 76
                                  ? "bg-danger text-white"
                                  : assessment.skor < 86
                                  ? "bg-secondary text-white"
                                  : ""
                              }
                            >
                              <td>{index + 1}</td>
                              <td>
                                {assessment.student_name}
                                <br />
                                <div className="badge bg-dark">
                                  <div className="badge bg-primary">DPL</div>{" "}
                                  {assessment.lecture_name}
                                </div>
                              </td>
                              <td className="text-end">
                                {assessment.n2_grade}
                              </td>
                              <td className="text-end">
                                {assessment.n8_grade}
                              </td>
                              <td className="text-end">{assessment.skor}</td>
                              <td>{assessment.huruf}</td>
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

export default YudisiumMapel1;
