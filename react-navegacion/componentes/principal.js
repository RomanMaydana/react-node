import Cabecera from './cabecera';

const layoutStyle =  {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = (props) => {
    return (
        <div style={layoutStyle}>
            <Cabecera/>
            {props.children}
        </div>
    )
};

export default Layout;