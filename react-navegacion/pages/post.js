import {withRouter} from 'next/router'
import Principal from '../componentes/principal'

const Post = (props)=>(
    <Principal>
        <h1>{props.router.query.title}</h1>
        <p>Este es el contenido de la pagina post</p>
    </Principal>
);
export default withRouter(Post)