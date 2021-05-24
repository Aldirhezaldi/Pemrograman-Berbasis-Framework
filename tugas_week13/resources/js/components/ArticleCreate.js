import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class ArticleCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            nama: '',
            kelas: '',
            alamat: '',
            mapel: '',
            alasan: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewArticle = this.handleCreateNewArticle.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Sukses Mendaftar!!!
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewArticle (event) {
        event.preventDefault()
        const article = {
          nama: this.state.nama,
          kelas: this.state.kelas,
          alamat: this.state.alamat,
          mapel: this.state.mapel,
          alasan: this.state.alasan
        }
        axios.post('/api/article/store', article).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Pendaftaran Murid Baru</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewArticle}>
                      <div className='form-group'>
                        <label htmlFor='nama'>Nama</label>
                        <input
                          id='nama'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nama') ? 'is-invalid' : ''}`}
                          name='nama'
                          value={this.state.nama}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nama')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='kelas'>Kelas</label>
                        <input
                          id='kelas'
                          type='text'
                          className={`form-control ${this.hasErrorFor('kelas') ? 'is-invalid' : ''}`}
                          name='kelas'
                          value={this.state.kelas}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('kelas')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='alamat'>Alamat</label>
                        <input
                          id='alamat'
                          type='text'
                          className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                          name='alamat'
                          value={this.state.alamat}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('alamat')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='mapel'>Mata Pelajaran</label>
                        <input
                          id='mapel'
                          type='text'
                          className={`form-control ${this.hasErrorFor('mapel') ? 'is-invalid' : ''}`}
                          name='mapel'
                          value={this.state.mapel}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('mapel')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='alasan'>Alasan</label>
                        <textarea
                          id='alasan'
                          className={`form-control ${this.hasErrorFor('alasan') ? 'is-invalid' : ''}`}
                          name='alasan'
                          rows='10'
                          value={this.state.alasan}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('alasan')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default ArticleCreate