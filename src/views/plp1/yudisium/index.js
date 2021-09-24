import React from "react";
import { Link } from "react-router-dom";

function Yudisium1(props) {
  return (
    <div className="p-4">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Yudisium PLP1 tahun 2021
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  Silakan pilih sesuai jurusan
                </div>
                <Link
                  to="/plp1/yudisium/21"
                  className="btn btn-sm btn-primary m-1"
                >
                  B. Indonesia
                </Link>
                <Link
                  to="/plp1/yudisium/22"
                  className="btn btn-sm btn-primary m-1"
                >
                  B. Inggris
                </Link>
                <Link
                  to="/plp1/yudisium/51"
                  className="btn btn-sm btn-primary m-1"
                >
                  Matematika
                </Link>
                <Link
                  to="/plp1/yudisium/53"
                  className="btn btn-sm btn-primary m-1"
                >
                  Fisika
                </Link>
                <Link
                  to="/plp1/yudisium/54"
                  className="btn btn-sm btn-primary m-1"
                >
                  Biologi
                </Link>
                <Link
                  to="/plp1/yudisium/65"
                  className="btn btn-sm btn-primary m-1"
                >
                  Ekonomi
                </Link>
                <Link
                  to="/plp1/yudisium/70"
                  className="btn btn-sm btn-primary m-1"
                >
                  Geografi
                </Link>
                <Link
                  to="/plp1/yudisium/71"
                  className="btn btn-sm btn-primary m-1"
                >
                  Sejarah
                </Link>
                <Link
                  to="/plp1/yudisium/91"
                  className="btn btn-sm btn-primary m-1"
                >
                  Penjas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yudisium1;
