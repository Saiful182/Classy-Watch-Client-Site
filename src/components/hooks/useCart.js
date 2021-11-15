import { useEffect, useState } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://radiant-temple-68689.herokuapp.com/carts')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [cart])
    return {
        cart, setCart
    }
}
export default useCart;