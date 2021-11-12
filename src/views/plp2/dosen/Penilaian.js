import React, { useEffect, useState } from "react";
import axios from "axios";
import Preload from "../../../components/Preload";
import { NavLink } from "react-router-dom";
import StatusPercent from "../../../components/StatusPercent";

function PenilaianDosen2() {
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAssessments = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/progress/assessments/2021/2/lectures`
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
                Rekap Penilaian PLP 2 by DPL
                <NavLink to="/" className="btn btn-sm btn-light float-end">
                  HOME
                </NavLink>
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
                        <th>Mapel</th>
                        <th className="text-end">N2.2</th>
                        <th className="text-end">N6</th>
                        <th className="text-end">N7</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assessments
                        .sort((a, b) =>
                          a.lecture_name > b.lecture_name ? -1 : 1
                        )
                        .sort((a, b) => (a.subject_id > b.subject_id ? 1 : -1))
                        .map((assessment, index) => {
                          return (
                            <tr
                              key={index}
                              className={
                                assessment.n2_status === 100 &&
                                assessment.n6_status === 100 &&
                                assessment.n7_status === 100
                                  ? ""
                                  : "bg-warning"
                              }
                            >
                              <td>{index + 1}</td>
                              <td>{assessment.lecture_name}</td>
                              <td>{assessment.lecture_subject}</td>
                              <td className="text-end">
                                <StatusPercent status={assessment.n2_status} />
                              </td>
                              <td className="text-end">
                                <StatusPercent status={assessment.n6_status} />
                              </td>
                              <td className="text-end">
                                <StatusPercent status={assessment.n7_status} />
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

export default PenilaianDosen2;
