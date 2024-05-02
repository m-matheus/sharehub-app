import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React from 'react';

import { client } from '../client';
import { useNavigate } from 'react-router-dom';


const logo = require('../assets/logowhite.png');
const video = require('../assets/sharehub.mp4');

const Login = () => {
    const navigate = useNavigate();

    const responseGoogle = async (response: any) => {
        const decoded: { name: string, picture: string, sub: string} = jwtDecode(response.credential);

        const { name, picture, sub } = decoded;

        const user = {
            _id: sub,
            _type: 'user',
            userName: name,
            image: picture
        }

        localStorage.setItem('user', JSON.stringify(user));

        await client.createIfNotExists(user).then(() => {
            navigate('/');
        });
        
    }

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN || ''}>
            <div className='flex justify-start items-center flex-col h-screen'>
                <div className='relative w-full h-full'>
                    <video
                        src={ video }
                        typeof='video/mp4'
                        loop
                        controls={false}
                        muted
                        autoPlay
                        className='w-full h-full object-cover'
                    />
                    <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                        <div className='p-5'>
                            <img src={ logo } width="180px" alt="logo" />
                        </div>
                        <div className='shadow-2x1'>
                        <GoogleLogin 
                                    onSuccess={responseGoogle}
                                    onError={() => console.log('error')}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    )
}

export default Login