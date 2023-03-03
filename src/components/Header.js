import Logo from '../assets/logo.png';

const Header = () => {
    return ( 
        <header>
            <img src={ Logo } alt="Logo icon" />
            <h1>My Shop</h1>
            <h2>Product list</h2>
        </header>
    );
}

export default Header;