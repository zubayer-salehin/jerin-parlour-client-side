import { useEffect, useState } from 'react';

const useToken = (user) => {

    const [token, setToken] = useState("");

    useEffect(() => {

        const name = user?.user?.displayName;
        const email = user?._tokenResponse?.email;
        const currentUser = { name: name, email: email };

        if (email) {
            fetch(`https://morning-brushlands-93158.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken);
                    setToken(accessToken);
                })
        }
    }, [user])

    return [token];
};

export default useToken;