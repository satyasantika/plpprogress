import React, { useEffect, useState } from "react";
import axios from "axios";
import Preload from "../../../components/Preload";
import RadioInput from "../../../components/RadioInput";
import StatusCheck from "../../../components/StatusCheck";
import { NavLink } from "react-router-dom";

function Dinilai2() {
  const [identifier, setIdentifier] = useState(21);
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAssessments = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/progress/assessments/2021/2/student/${identifier}`
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
  }, [identifier]);

  return (
    <div className="p-4">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Rekap Status Penilaian PLP 2 By Mahasiswa
                <NavLink to="/" className="btn btn-sm btn-light float-end">
                  HOME
                </NavLink>
              </div>
              <div className="card-body">
                <div className="form-check form-check-inline">
                  <RadioInput
                    name="jurusan"
                    label="B.Indonesia"
                    value="21"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                  <RadioInput
                    name="jurusan"
                    label="B.Inggris"
                    value="22"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                  <RadioInput
                    name="jurusan"
                    label="Matematika"
                    value="51"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                  <RadioInput
                    name="jurusan"
                    label="Fisika"
                    value="53"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                  <RadioInput
                    name="jurusan"
                    label="Biologi"
                    value="54"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                  <RadioInput
                    name="jurusan"
                    label="Ekonomi"
                    value="65"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                  <RadioInput
                    name="jurusan"
                    label="Geografi"
                    value="70"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                  <RadioInput
                    name="jurusan"
                    label="Sejarah"
                    value="71"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                  <RadioInput
                    name="jurusan"
                    label="Penjas"
                    value="91"
                    checked={identifier}
                    setter={setIdentifier}
                  />
                </div>
                <hr />
                {loading ? (
                  <Preload />
                ) : (
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nama</th>
                        <th>DPL</th>
                        <th>Guru Pamong</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assessments
                        .sort((a, b) =>
                          a.student_name > b.student_name ? 1 : -1
                        )
                        .map((assessment, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{assessment.student_name}</td>
                              <td>
                                <div className="badge bg-dark">
                                  <div className="badge bg-primary">DPL</div>{" "}
                                  {assessment.lecture_name}
                                </div>
                                <StatusCheck
                                  status={assessment.n2_status}
                                  form="N2.2"
                                />
                                <StatusCheck
                                  status={assessment.n6_status}
                                  form="N6"
                                />
                                <StatusCheck
                                  status={assessment.n7_status}
                                  form="N7"
                                />
                              </td>
                              <td>
                                <div className="badge bg-dark">
                                  <div className="badge bg-success">GP</div>{" "}
                                  {assessment.teacher_name}
                                </div>
                                <StatusCheck
                                  status={assessment.n1_status}
                                  form="N1"
                                />
                                <StatusCheck
                                  status={assessment.n3_status}
                                  form="N3"
                                />
                                <StatusCheck
                                  status={assessment.n4_status}
                                  form="N4"
                                />
                                <StatusCheck
                                  status={assessment.n5_status}
                                  form="N5"
                                />
                                <StatusCheck
                                  status={assessment.n6_status}
                                  form="N6"
                                />
                                <StatusCheck
                                  status={assessment.n7_status}
                                  form="N7"
                                />
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

export default Dinilai2;
