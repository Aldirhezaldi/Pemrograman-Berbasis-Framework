import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Abouts() {
    // `path` untuk membuat jalur <Route> yang terhadap rute induk,
    //sedangkan` url` untuk membuat link.
    let { path, url } = useRouteMatch();
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Barbatos Shop</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/home" class="nav-item nav-link active">Home</Link>
              <Link to="/listproduk" class="nav-item nav-link active">List Produk</Link>
              <Link to="/keranjang" class="nav-item nav-link active">Keranjang</Link>
              <Link to="/topics" class="nav-item nav-link active">Abouts</Link>
            </div>
          </div>
        </nav>
        <img src="https://solutech.id/wp-content/uploads/2019/07/Untitled-1.jpg" class="img-fluid"></img>
        <hr />
        <h2>Abouts</h2>
        <br />
        <br />
        <img src="https://avatars.githubusercontent.com/u/56921668?s=400&u=6635bf0c6f9329d24565307d5b37b50361f16f0b&v=4" class="rounded mx-auto d-block"></img>
        <br />
        <br />
        <br />
        <ul>
        <li>
            <Link to={`${url}/Rhezaldi Irnantyo Irawan`}>Nama</Link>
          </li>
          <li>
            <Link to={`${url}/TI-3E`}>Kelas</Link>
          </li>
          <li>
            <Link to={`${url}/1841720164`}>NIM</Link>
          </li>
          <li>
            <Link to={`${url}/Teknologi Informasi`}>Jurusan</Link>
          </li>
          <li>
            <Link to={`${url}/D4 Teknik Informatika`}>Program Studi</Link>
          </li>
          <li>
            <Link to={`${url}/rhezaldiirnantyo339g@gmail.com`}>Email</Link>
          </li>
          <li>
            <Link to={`${url}/@aldirhezaldi_`}>Instagram</Link>
          </li>
          <li>
            <Link to={`${url}/Aldirhezaldi`}>GitHub</Link>
          </li>
          <li>
            <Link to={`${url}/085850336940`}>Nomor HP</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
            <br />
        <br />
        <br />
        <br />
        <br />
        <br />
          </Route>
          <Route path={`${path}/:topicId`}>
            <About />
          </Route>
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }

  function About() {
    let { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }

  export default Abouts;