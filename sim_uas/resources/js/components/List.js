import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import ArticleAdmin from './ArticleAdmin'
import ArticleCreate from './ArticleCreate'
import ArticleShow from './ArticleShow'
import ArticleEdit from './ArticleEdit'
 
class List extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <HeaderAdmin />
                    <Switch>
                    <Route exact path='/list' component={ArticleAdmin}/>
                    <Route exact path='/list/create' component={ArticleCreate} />
                    <Route path='/list/article/edit/:id' component={ArticleEdit} />
                    <Route path='/list/article/:id' component={ArticleShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<List />, document.getElementById('list'))