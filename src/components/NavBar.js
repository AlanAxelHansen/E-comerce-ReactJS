import Brand from "./Brand";
import ItemList from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <>
        <header>

            <div className="Marca">
                <Brand />
            </div>

            <nav className="Items">
                <ItemList
                    itemUno = "Verduleria"
                    itemDos = "Fruteria"
                    itemTres = "Carniceria"
                />
            </nav>

            <div className="Cart">
                <CartWidget />
            </div>

        </header>
    </>
    )
}

export default NavBar;