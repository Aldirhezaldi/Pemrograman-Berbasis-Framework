import React, {Component} from "react";
import Produk from "../../Component/BlogPost/Produk";
import './BlogPost.css';

class listProduk extends Component{
    state = {
        listProduk:[],
        insertArtikel: {
            userId: 1,
            id: 1,
            namaproduk: "",
            harga: "",
            gambar: "",
            stok:""
        }
    }
    handleBuyProduct = (data) => {
        fetch(`http://localhost:3002/produk/${data}`)
          .then((response) => response.json()) // ubah response data dari URL API menjadi sebuah data JSON
          .then((ambilDataDariServerAPI) => {
            // data JSON hasil ambil dari API kita masukkan ke dalam listArtikel pada state
            this.setState({
                insertArtikel: ambilDataDariServerAPI,
            });
          })
          // .then(this.updateStock)
          // .then(this.updateStockCatalog(data))
          .then(this.handleAddtoBasket);
        // .then(() => {
        //   this.ambilDataDariServerAPIBasket();
        // });
      };
    
      handleAddtoBasket = () => {
        fetch("http://localhost:3003/keranjang", {
          method: "POST",
          body: JSON.stringify({
            id: this.state.insertArtikel["id"],
            namaproduk: this.state.insertArtikel["namaproduk"],
            harga: this.state.insertArtikel["harga"],
            gambar: this.state.insertArtikel["gambar"],
            stok: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
      };
    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/produk?_sort=id&_order=desc')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                listProduk: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }



    handleTombolSimpan = () => {
        fetch('http://localhost:3002/produk',{
            method: 'post',
            headers: {
                'Accept': 'applicarion/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
        .then((Response) => {
            this.ambilDataDariServerAPI();
        });
    }
    

    render(){
        return(
            <div className="post-artikel">
                
                <h2>Daftar Produk</h2>
                {
                    this.state.listProduk.map(artikel => {
                        return <Produk key={artikel.id} namaproduk={artikel.namaproduk} harga={artikel.harga} stok={artikel.stok} gambar={artikel.gambar} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel} tambah={this.handleBuyProduct}/>
                    })
                }
                <br/>
                <br />
                <br />
            </div>
        )
    }
}

export default listProduk;