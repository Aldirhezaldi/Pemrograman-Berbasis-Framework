import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Abouts from './Component/Abouts';
import BlogPost from "./Container/BlogPost/BlogPost";
import ListProduct from "./Container/BlogPost/ListProduk";
import ListCart from "./Container/BlogPost/ListCart";
import Total from "./Container/BlogPost/ListCart";
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

export default function Tugas() {
  return (
    <Router>
      <Switch>
        <ListProdukRoute path="/listproduk">
          <AuthButton />
          <ListProdukPage />
        </ListProdukRoute>
        <ListProdukRoute path="/keranjang">
          <AuthButton />
          <KeranjangPage />
        </ListProdukRoute>
        <Route path="/login">
          <AuthButton />
          <LoginPage />
        </Route>
        <Route path="/home">
          <AuthButton />
          <HomePage />
        </Route>
        <Route path="/about">
          <Abouts />
        </Route>
      </Switch>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Barbatos Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/home" class="nav-item nav-link active">Home</Link>
            <Link to="/listproduk" class="nav-item nav-link active">List Produk</Link>
            <Link to="/keranjang" class="nav-item nav-link active" >Keranjang</Link>
            <Link to="/about" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>

    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button type="button" class="btn btn-danger"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
      <p>You are not Logged in.</p>
    );
}

function ListProdukRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function ListProdukPage() {
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
            <Link to="/about" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <img src="https://solutech.id/wp-content/uploads/2019/07/Untitled-1.jpg" class="img-fluid"></img>
      <hr />
      <h1 class="text-center">Welcome to Barbatos Shop</h1>

      <br />
      <br />
      <br />
      <ListProduct />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function HomePage() {
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
            <Link to="/listproduk" class="nav-item nav-link active">Keranjang</Link>
            <Link to="/about" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <img src="https://solutech.id/wp-content/uploads/2019/07/Untitled-1.jpg" class="img-fluid"></img>
      <hr />
      <h1 class="text-center">Welcome to Barbatos Shop</h1>
      <br />
      <br />
      <br />
      {/* <h3 class="text-start">Beberapa Barang Yang dijual disini: </h3> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <BlogPost />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function KeranjangPage() {
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
            <Link to="/about" class="nav-item nav-link active">Abouts</Link>
          </div>
        </div>
      </nav>
      <img src="https://solutech.id/wp-content/uploads/2019/07/Untitled-1.jpg" class="img-fluid"></img>
      <hr />
      <h1 class="text-center">Keranjang</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ListCart />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}


function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type="button" class="btn btn-primary" onClick={login}>Log in</button>
    </div>
  );
}