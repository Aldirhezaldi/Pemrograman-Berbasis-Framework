import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const Cart = (porps) => {
    return (
        <table class="table table-bordered">
		<tbody>
			<tr>
                <td>{porps.idArtikel}</td>
                <td className="gambar-artikel img"><img src = {porps.gambar}/></td>
				<td>{porps.namaproduk}</td>
				<td>{porps.stok}</td>
				<td>Rp. {porps.harga}</td>
			</tr>
		</tbody>
        <button className="btn btn-sm btn-danger" onClick={() =>porps.hapusArtikel(porps.idArtikel)}>Hapus</button>
	</table>
    );
}

export default Cart;