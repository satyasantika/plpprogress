import React, { useEffect, useState } from "react";
import axios from "axios";
import Preload from "../../../components/Preload";
import RadioInput from "../../../components/RadioInput";
import StatusCheck from "../../../components/StatusCheck";
import { NavLink } from "react-router-dom";

function Observasi() {
  const [identifier, setIdentifier] = useState(53);
  const [observations, setObservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const getObservations = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/progress/observations/2021/1/${identifier}`
      );
      setObservations(response.data.data);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getObservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identifier]);

  return (
    <div className="p-4">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Hasil Pengamatan mahasiswa
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
                        <th>Kultur</th>
                        <th>SOTK</th>
                        <th>Kurikuler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {observations
                        .sort((a, b) =>
                          a.student_name > b.student_name ? 1 : -1
                        )
                        .map((observation, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{observation.student_name}</td>
                              <td>
                                <StatusCheck
                                  status={observation.kultur_status}
                                />
                              </td>
                              <td>
                                <StatusCheck status={observation.sotk_status} />
                              </td>
                              <td>
                                <StatusCheck
                                  status={observation.kurikuler_status}
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

export default Observasi;
