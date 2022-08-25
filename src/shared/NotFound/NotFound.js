import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="center">
                <div className="error mt-8">
                    <div className="number">4</div>
                    <div className="illustration">
                        <div className="circle"></div>
                        <div className="clip">
                            <div className="paper">
                                <div className="face">
                                    <div className="eyes">
                                        <div className="eye eye-left"></div>
                                        <div className="eye eye-right"></div>
                                    </div>
                                    <div className="rosyCheeks rosyCheeks-left"></div>
                                    <div className="rosyCheeks rosyCheeks-right"></div>
                                    <div className="mouth"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="number">4</div>
                </div>
                <div className="text font-medium">Oops. The page you're looking for doesn't exist.</div>
                <p onClick={() => navigate("/home")} className="notFoundButton">Back Home</p>
            </div>
        </div>
    );
};

export default NotFound;