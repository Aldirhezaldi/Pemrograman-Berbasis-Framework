import React from 'react';
import ReactDOM from 'react-dom';

function HeaderSiswa() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">Bimbel IT</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/siswa">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pendaftaran">Pendaftaran</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderSiswa;

// DOM element
if (document.getElementById('headersiswa')) {
    ReactDOM.render(<HeaderSiswa />, document.getElementById('headersiswa'));
}