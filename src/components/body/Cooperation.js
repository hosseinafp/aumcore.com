import React,{useEffect} from 'react';
//animations
import AOS from 'aos';

const Cooperation = () => {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div data-aos="fade-up" className='container my-5'>
            <p className='text-center h5'>
            Want Aumcore to help with your next project?
            </p>
            <form className='row justify-content-center text-center'>
                <div className='col-12 col-md-6'>
                    <input className='form-control my-3' />
                    <input className='form-control my-3' />
                    <input className='form-control py-5 my-3' />
                <span className='text-center py-1 col-12 col-md-6'>
                    By submitting this form, you accept our 
                <span className='text-danger'>
                    privacy policy
                </span>
                    .
                </span>
                <p className='text-center col-12'>
                    <input type='checkbox' className='form-check-input' />
                    Subscribe to our newsletter for the latest update, market insights and thought leadership.
                </p>
                <button className='btn btn-outline-dark'>Send It To Us</button>
                </div>
            </form>
        </div>
    );
};

export default Cooperation;