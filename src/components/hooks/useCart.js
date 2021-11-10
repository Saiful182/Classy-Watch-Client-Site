import { useEffect, useState } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [cart])
    return {
        cart, setCart
    }
}
export default useCart;