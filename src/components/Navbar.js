import CardWidget from "./CardWidget";

export default function Navbar() {
    return (
        <header className="header">
            <div className="logo">Logo</div>
            <ul className="links">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Mi perfil</li>
            </ul>
            <CardWidget count={50}/>
        </header>
    );
}