import React, { Component } from "react";
import Cart from "../../Component/BlogPost/Cart";
import "./BlogPost.css";

class ListCart extends Component {
  state = {
    listKeranjang: [],
    insertCart: {
      userId: 1,
      id: "",
      namaproduk: "",
      harga: "",
      stok: "",
    },
    sum: 0,
  };

  ambilDataDariServerAPI = async () => {
    await fetch("http://localhost:3003/keranjang?_sort=id&_order=desc")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listKeranjang: jsonHasilAmbilDariAPI,
        });
      });
    this.totalharga();
  };

  totalharga() {
    var sum2 = 0;
    console.log(this.state.listKeranjang);
    this.state.listKeranjang.forEach((obj) => {
      const map = new Map(Object.entries(obj));
      console.log(map.get("harga"));
      sum2 += parseInt(map.get("harga"));
    });

    this.setState({ sum: sum2 });
  }

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleHapusArtikel = (data) => {
    fetch(`http://localhost:3003/keranjang/${data}`, { method: "DELETE" }).then(
      (res) => {
        this.ambilDataDariServerAPI();
      }
    );
  };

  render() {
    return (
      <div className="post-artikel">
        <h2>Daftar Keranjang</h2>
        {this.state.listKeranjang.map((keranjang) => {
          return (
            <Cart
              key={keranjang.id}
              namaproduk={keranjang.namaproduk}
              gambar={keranjang.gambar}
              harga={keranjang.harga}
              stok={keranjang.stok}
              idArtikel={keranjang.id}
              hapusArtikel={this.handleHapusArtikel}
              tambah={this.handleBuyProduct}
              total1={this.ambilDataDariServerAPI}
            />
          );
        })}
        <br />
        <table class="table">
          <tbody>
            
            <tr>
              <th scope="row"></th>
              <td colspan="2" class="table-active">
                TOTAL HARGA KERANJANG :
              </td>
              <td>Rp. {this.state.sum}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </div>
    );
  }
}

export default ListCart;
