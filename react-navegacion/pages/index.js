import Principal from '../componentes/principal';
import Link from 'next/link';

const PostLink = (props)=>{
    return (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    );
}
const Contenido = ()=>(
    <Principal>
        <p>Hello Next.js</p>
        <p>Cognos v.1.0</p>
        <ul>
            <PostLink title="Hello Next.js"/>
            <PostLink title="Aprendiendo con Next.js"/>
            <PostLink title="Subiendo aplicaciones"/>
            
        </ul>
    </Principal>
);

export default Contenido;