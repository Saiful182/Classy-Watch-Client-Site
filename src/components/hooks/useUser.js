import { useEffect, useState } from 'react';

const useUser = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://radiant-temple-68689.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    return {
        users, setUsers
    }
}
export default useUser;