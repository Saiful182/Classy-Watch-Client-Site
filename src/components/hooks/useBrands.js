import { useEffect, useState } from "react";

const useBrands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://radiant-temple-68689.herokuapp.com/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return {
        brands
    }
}
export default useBrands;