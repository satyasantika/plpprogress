import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="p-4">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Progress kegiatan PLP 2021
              </div>
              <div className="card-body">
                <h1>PLP 1</h1>
                <hr />
                <Link
                  to="/plp1/mahasiswa/observasi"
                  className="btn btn-sm btn-primary m-1"
                >
                  Observasi Mahasiswa
                </Link>
                <br />
                <Link
                  to="/plp1/mahasiswa/dinilai"
                  className="btn btn-sm btn-primary m-1"
                >
                  Penilaian By Mahasiswa
                </Link>
                <Link
                  to="/plp1/dosen/penilaian"
                  className="btn btn-sm btn-primary m-1"
                >
                  Penilaian By DPL
                </Link>
                <hr />
                <h1>PLP 2</h1>
                <hr />
                <Link
                  to="/plp2/mahasiswa/dinilai"
                  className="btn btn-sm btn-primary m-1"
                >
                  Penilaian By Mahasiswa
                </Link>
                <Link
                  to="/plp2/dosen/penilaian"
                  className="btn btn-sm btn-primary m-1"
                >
                  Penilaian By DPL
                </Link>
                <Link
                  to="/plp2/guru/penilaian"
                  className="btn btn-sm btn-primary m-1"
                >
                  Penilaian By GP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
