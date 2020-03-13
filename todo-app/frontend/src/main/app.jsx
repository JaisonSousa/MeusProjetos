import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Todo from '../main/routes'
import Routes from '../main/routes'

export default props => (
    <div className='container'>
        <Menu/>
        {/* rotas da paginas */}
        <Routes/>
        
    </div>
)