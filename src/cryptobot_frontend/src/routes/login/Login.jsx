import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap"
import "./login.scss"
import { useNavigate } from "react-router-dom"
import { AuthClient } from '@dfinity/auth-client';


const Login = () => {
    const navigate = useNavigate();
    const [authClient, setAuthClient] = useState();
    const [userIdentity, setUserIdentity] = useState();

    useEffect(() => {
        (async () => {
            const authClient = await AuthClient.create();
            setAuthClient(authClient);

            if (await authClient.isAuthenticated()) {
                handleAuthenticated(authClient);
            }
        })();
    }, []);

    const handleLogin = async () => {
        if (!authClient) return;

        // Redirect to Internet Identity and request an identity
        await authClient.login({
            identityProvider: 'https://identity.ic0.app',
            // identityProvider: 'http://127.0.0.1:8000/?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai',//'http://localhost:54487?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai',
            onSuccess: () => {
                handleAuthenticated(authClient);
            },
        });
    };

    const handleLogout = async () => {
        if (!authClient) return;

        // Sign out of Internet Identity
        await authClient.logout();
        setUserIdentity(null);
    };

    const handleAuthenticated = async (authClient) => {
        const identity = authClient.getIdentity();
        setUserIdentity(identity);
        console.log('Authenticated!');
        console.log(identity);
        console.log(`Authenticated with ID: ${identity.getPrincipal().toString()}`);
        // You can now use this identity to interact with canisters
    };

    if (!authClient) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="login w-100 vh-100 d-grid justify-content-center align-content-around bg-gradient">
                {userIdentity ? (
                    <div>
                        <div className="fw mt-4" style={{ fontSize: "14px" }}>Hi, {userIdentity.getPrincipal().toString()}</div>
                        <Button className="w-50 rounded-5 mt-4" style={{ fontSize: "14px" }} onClick={() => navigate("/dashboard")}>Continue to Dashboard</Button>
                        <Button className="w-50 rounded-5 mt-4" style={{ fontSize: "14px" }} onClick={handleLogout}>Logout</Button>
                    </div>
                ) : (
                    <div className="inner1 text-center bg-white p-3">
                        <section className="mb-2 fw-bold">Welcome!</section>
                        <div className="fw mt-4" style={{ fontSize: "14px" }}>Welcome to Crypto Trading Bot! Elevate your trading experience with a powerful trading bot and stay on top of your portfolio effortlessly. Happy trading!</div>
                        <Button className="w-75 rounded-5 mt-4" style={{ fontSize: "14px" }} onClick={handleLogin}>Sign in with ICP</Button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Login
