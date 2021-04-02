import React, {Component} from "react";
import Post from "../../Component/BlogPost/Post";
import './BlogPost.css';

class BlogPost extends Component{
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
    
    render(){
        return(
            <div className="post-artikel">
                
                <h2>Daftar Produk</h2>
                {
                    this.state.listProduk.map(artikel => {
                        return <Post key={artikel.id} namaproduk={artikel.namaproduk} harga={artikel.harga} stok={artikel.stok} gambar={artikel.gambar} idArtikel={artikel.id}/>
                    })
                }
                <br/>
                <br />
                <br />
                
            </div>
        )
    }
}

export default BlogPost;