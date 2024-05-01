import React from 'react';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';


const logo = require('../assets/logowhite.png');
const video = require('../assets/sharehub.mp4');


const Login = () => {

    const responseGoogle = (response: any) => {
        console.log(response);
    }

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='relative w-full h-full'>
                <video 
                    src={video}
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
                            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN || ''}
                            render={(renderProps) => (
                                <button 
                                    type='button'
                                    className='bg-mainColor flex justify-center items-center p-2 rounded-lg focus:outline-none cursor-pointer text-xs'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className='mr-4'/> Sign in with Google
                                </button>    
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy='single_host_origin'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login