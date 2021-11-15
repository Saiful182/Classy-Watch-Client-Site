import { useEffect, useState } from "react";

const useReview = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('https://radiant-temple-68689.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    return {
        reviews, setReview
    }
}
export default useReview;