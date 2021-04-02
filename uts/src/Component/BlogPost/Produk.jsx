import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Produk = (props) => {
  return(
      <div className="artikel">
                  
      <div class="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
        <p className="gambar-artikel img"><img src = {props.gambar}/></p>
          <div className="card-body">
            <h5 className="card-title">Nama Produk : {props.namaproduk}</h5>
            <p className="card-text">Harga : Rp.{props.harga}</p>
            <p className="card-text">Stock : {props.stok}</p>
            <button className="btn btn-sm btn-primary" onClick={() =>props.tambah(props.idArtikel)}>beli</button>
          </div>
        </div>
      </div>
    </div>
              </div>
  )
}


export default Produk;
