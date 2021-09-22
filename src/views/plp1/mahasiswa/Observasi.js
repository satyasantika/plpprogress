import React, { useEffect, useState } from "react";
import axios from "axios";

const RadioInput = ({ label, value, checked, setter }) => {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        id={`option${value}`}
        name="identifier"
        value="21"
        onChange={() => setter(value)}
        checked={checked === value}
      />
      <label className="btn btn-outline-success" htmlFor={`option${value}`}>
        {label}
      </label>
    </>
  );
};

function Observasi() {
  const [identifier, setIdentifier] = useState(53);
  const [observations, setObservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const getObservations = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `http://localhost/plp-data/api/progress/observations/2021/1/${identifier}`
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
              </div>
              <div className="card-body">
                <RadioInput
                  label="B.Indonesia"
                  value="21"
                  checked={identifier}
                  setter={setIdentifier}
                />
                <RadioInput
                  label="B.Inggris"
                  value="22"
                  checked={identifier}
                  setter={setIdentifier}
                />
                <RadioInput
                  label="Matematika"
                  value="51"
                  checked={identifier}
                  setter={setIdentifier}
                />
                <RadioInput
                  label="Fisika"
                  value="53"
                  checked={identifier}
                  setter={setIdentifier}
                />
                <RadioInput
                  label="Biologi"
                  value="53"
                  checked={identifier}
                  setter={setIdentifier}
                />
                <RadioInput
                  label="Ekonomi"
                  value="65"
                  checked={identifier}
                  setter={setIdentifier}
                />
                <RadioInput
                  label="Geografi"
                  value="70"
                  checked={identifier}
                  setter={setIdentifier}
                />
                <RadioInput
                  label="Sejarah"
                  value="71"
                  checked={identifier}
                  setter={setIdentifier}
                />
                <RadioInput
                  label="Penjas"
                  value="91"
                  checked={identifier}
                  setter={setIdentifier}
                />
                {loading ? (
                  <div className="alert alert-info">Loading . . .</div>
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
                                {observation.kultur_status ? (
                                  <div className="text-success">OK</div>
                                ) : (
                                  <div className="text-danger">Belum</div>
                                )}
                              </td>
                              <td>
                                {observation.sotk_status ? (
                                  <div className="text-success">OK</div>
                                ) : (
                                  <div className="text-danger">Belum</div>
                                )}
                              </td>
                              <td>
                                {observation.kurikuler_status ? (
                                  <div className="text-success">OK</div>
                                ) : (
                                  <div className="text-danger">Belum</div>
                                )}
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
