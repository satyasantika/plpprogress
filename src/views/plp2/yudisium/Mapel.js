import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Preload from "../../../components/Preload";

function YudisiumMapel2(props) {
  let { mapelId } = useParams();
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAssessments = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/progress/yudisium/2021/2/${mapelId}`
        // `https://plp.fkip.unsil.ac.id/api/progress/yudisium/2021/2/${mapelId}`
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
                Rekap Status Penilaian PLP 2 By Mahasiswa
                <Link
                  to="/plp2/yudisium"
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
                        <th className="text-end">Skor dari GP</th>
                        <th className="text-end">Skor dari DPL</th>
                        <th className="text-end">Nilai PLP2</th>
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
                              </td>
                              <td className="text-end">
                                {/* <div className="badge bg-success">GP</div>{" "} */}
                                {assessment.teacher_name}{" "} 
                                <div className="badge bg-success">{assessment.skor_guru}</div>
                                <br />
                                  N1: {assessment.n1_grade}{" | "}
                                  N3: {assessment.n3_grade}{" | "}
                                  N4: {assessment.n4_grade}{" | "}
                                  N5: {assessment.n5_grade}{" | "}
                                  N6: {assessment.n6guru_grade}{" | "}
                                  N7: {assessment.n7guru_grade}
                              </td>
                              <td className="text-end">
                                  {/* <div className="badge bg-primary">DPL</div>{" "} */}
                                  {assessment.lecture_name}{" "}
                                  <div className="badge bg-primary">{assessment.skor_dosen}</div>
                                  <br />
                                  N2: {assessment.n2_grade}{" | "}
                                  N6: {assessment.n6dosen_grade}{" | "}
                                  N7: {assessment.n7dosen_grade}
                              </td>
                              <td className="text-end">
                                {assessment.skor}
                              </td>
                              <td>
                                ({assessment.huruf})
                              </td>
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

export default YudisiumMapel2;
