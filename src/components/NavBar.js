import Brand from "./Brand";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <>
        <header>

            <div className="Marca">
                <Brand />
            </div>

            <nav className="navDisplay">
                <ul className="ulDisplay">
                    <li className="liDisplay">Carniceria</li>
                    <li className="liDisplay">Fruteria</li>
                    <li className="liDisplay">Verduleria</li>
                </ul>
            </nav>

            <div className="Cart">
                <CartWidget />
            </div>

        </header>
    </>
    )
}

export default NavBar;