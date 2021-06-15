import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeaderSiswa from './HeaderSiswa'
import ArticleIndex from './ArticleIndex'
import ArticleCreate from './ArticleCreate'
import ArticleShow from './ArticleShow'
import ArticleEdit from './ArticleEdit'
 
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <HeaderSiswa />
                    <Switch>
                    <Route exact path='/pendaftaran' component={ArticleIndex}/>
                    <Route exact path='/pendaftaran/create' component={ArticleCreate} />
                    <Route path='/pendaftaran/article/edit/:id' component={ArticleEdit} />
                    <Route path='/pendaftaran/article/:id' component={ArticleShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))