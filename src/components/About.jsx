import MissionIcon from '../otherassets/target.png';
import SupportIcon from '../otherassets/support.png';
import TransparencyIcon from '../otherassets/transparency.png';

const About = () => {
  return (
    <section className='position-relative overflow-hidden custom-gradient-bg py-5 mt-5' id='section2'>
      <div className='container position-relative py-5  px-5 px-lg-2'>
        <div className='row pb-2 gap-3 text-md-start text-center'>
          <div className='col-md d-flex align-items-center'>
            <h4 className='fw-bold display-5 text-white'>Mortgage Made Easy: Empowering Your Future</h4>
          </div>
          <div className='col-md d-flex align-items-center'>
            <p className='text-white  fs-5'>
              Our user-friendly interface simplifies the complex world of mortgages, empowering you with the necessary
              knowledge and tools to make well-informed decisions that effortlessly shape your financial future and
              bring you peace of mind.
            </p>
          </div>
        </div>

        <div className='mx-auto text-lg-start text-center'>
          <div className='row  mb-n6 pt-5 gap-5 gap-lg-0'>
            <div className='col-12  col-lg-4 '>
              <div className='d-flex flex-column h-100 p-6 '>
                <img
                  src={SupportIcon}
                  className='img-fluid icon smaller-icon py-3 mx-auto mx-lg-0'
                  alt='Support Icon'
                />

                <h5 className='mb-0 fw-semibold text-white ms-1 pb-2'>Support</h5>

                <p className='pb-6 mb-auto text-white ms-1'>
                  If you have any questions, feedback, or need assistance, please reach out to our friendly customer
                  support team at mortgagelytics@support.com.
                </p>
              </div>
            </div>

            <div className='col-12  col-lg-4 '>
              <div className='d-flex flex-column h-100 p-6'>
                <img src={MissionIcon} className='img-fluid icon smaller-icon py-3 mx-auto mx-lg-0' alt='Target Icon' />

                <h5 className='mb-0 fw-semibold text-white ms-1 pb-2'>Mission</h5>

                <p className='pb-6 mb-auto text-white ms-1'>
                  We believe in simplifying the complex world of mortgage calculations and guiding our users towards
                  financial success.
                </p>
              </div>
            </div>
            <div className='col-12  col-lg-4 '>
              <div className='d-flex flex-column h-100 p-6'>
                <img
                  src={TransparencyIcon}
                  className='img-fluid icon smaller-icon py-3 mx-auto mx-lg-0'
                  alt='Transparency Icon'
                />

                <h5 className='mb-0 fw-semibold text-white ms-1 pb-2'>Transparency</h5>

                <p className='pb-6 mb-auto text-white ms-1'>
                  From interest rates to repayment terms, we believe in providing you with complete information,
                  empowering you to make informed decisions with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
