import Link from 'next/Link';
const linkStyle = {
    marginRight: 15
}
const Cabecera = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Inicio</a>
        </Link>
        <Link href="/acercade">
            <a style={linkStyle}>Acerca de</a>
        </Link> 
    </div>
);
export default Cabecera;