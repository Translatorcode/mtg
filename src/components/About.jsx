import MissionIcon from '../otherassets/target.png';
import SupportIcon from '../otherassets/support.png';
import TransparencyIcon from '../otherassets/transparency.png';

const About = () => {
  return (
    <section class='py-12 py-sm-24 pb-md-32 position-relative overflow-hidden custom-gradient-bg'>
      <div class='container position-relative py-5'>
        <div className='row pb-5 gap-3'>
          <div className='col-md d-flex align-items-center'>
            <h5 className='fw-bold display-5 text-white'>Mortgage Made Easy: Empowering Your Future</h5>
          </div>
          <div className='col-md d-flex align-items-center'>
            <p className='text-white fs-5'>
              Our user-friendly interface simplifies the complex world of mortgages, empowering you with the necessary
              knowledge and tools to make well-informed decisions that effortlessly shape your financial future and
              bring you peace of mind.
            </p>
          </div>
        </div>

        <div class='mw-7xl mx-auto'>
          <div class='row mb-n6 pt-5'>
            <div class='col-12  col-lg-4 mb-6'>
              <div class='d-flex flex-column h-100 p-6'>
                <img src={SupportIcon} className='img-fluid icon smaller-icon py-3' alt='Support Icon' />

                <h6 class='mb-0 fw-semibold text-white ms-1 pb-2'>Support</h6>

                <p class='mw-md pb-6 mb-auto text-white ms-1'>
                  If you have any questions, feedback, or need assistance, please reach out to our friendly customer
                  support team at mortgagelytics@support.com.
                </p>
              </div>
            </div>

            <div class='col-12  col-lg-4 mb-6'>
              <div class='d-flex flex-column h-100 p-6'>
                <img src={MissionIcon} className='img-fluid icon smaller-icon py-3' alt='Support Icon' />

                <h6 class='mb-0 fw-semibold text-white ms-1 pb-2'>Mission</h6>

                <p class='mw-md pb-6 mb-auto text-white ms-1'>
                  We believe in simplifying the complex world of mortgage calculations and guiding our users towards
                  financial success.
                </p>
              </div>
            </div>
            <div class='col-12  col-lg-4 mb-6'>
              <div class='d-flex flex-column h-100 p-6'>
                <img src={TransparencyIcon} className='img-fluid icon smaller-icon py-3' alt='Support Icon' />

                <h6 class='mb-0 fw-semibold text-white ms-1 pb-2'>Transparency</h6>

                <p class='mw-md pb-6 mb-auto text-white ms-1'>
                  Estimate with confidence using our mortgage calculator. For personalized advice, consult financial
                  professionals to account for individual circumstances and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className='custom-gradient-bg'>
    //   <div className='container p-3 pt-5 pb-5'>
    //     <div className='row mb-5'>
    //       <div className='col'>
    //         <h5 className='fs-1 text-left fw-bold text-white'>
    //           Unlocking Homeownership: We're Here for You Every Step of the Way
    //         </h5>
    //       </div>
    //       <div className='col text-left text-white d-flex align-items-center'>
    //         <p className='fs-5 '>
    //           Our user-friendly interface simplifies mortgages, empowering you to make informed decisions that shape
    //           your financial future effortlessly.
    //         </p>
    //       </div>
    //     </div>
    //     <div className='row  gap-3'>
    //       <div className='col-md-6 col-lg '>
    //         <img src={SupportIcon} className='img-fluid icon smaller-icon' alt='Support Icon' />
    //         <p className='text-white'>
    //           <h6 className='fw-semibold fs-5'>Support</h6>If you have any questions, feedback, or need assistance,
    //           please reach out to our friendly customer support team at mortgagelytics@support.com.
    //         </p>
    //       </div>
    //       <div className='col-md-6 col-lg'>
    //         <img src={MissionIcon} className='img-fluid icon smaller-icon' alt='Target Icon' />
    //         <p className='text-white'>
    //           <h6 className='fw-semibold fs-5'>Mission</h6>
    //           We believe in simplifying the complex world of mortgage calculations and guiding our users towards
    //           financial success.
    //         </p>
    //       </div>
    //       <div className='col-md-6 col-lg'>
    //         <img src={TransparencyIcon} className='img-fluid icon smaller-icon' alt='Transparency Icon' />
    //         <p className='text-white'>
    //           <h6 className='fw-semibold fs-5'> Transparency</h6>
    //           Estimate with confidence using our mortgage calculator. For personalized advice, consult financial
    //           professionals to account for individual circumstances and market conditions.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;

// Support/Contact Information: At MortgageLytics, we are dedicated to providing exceptional support to our users. If you have any questions, feedback, or need assistance, please reach out to our friendly customer support team at [Contact Email] or call us at [Contact Phone Number].

// Branding/Mission: At [Your Company Name], our mission is to empower individuals with the knowledge and tools to make informed decisions about their mortgages. We believe in simplifying the complex world of mortgage calculations, providing accurate and reliable information, and guiding our users towards financial success.

// Transparency and Assumptions: Our mortgage calculator is designed to provide estimates based on commonly used industry calculations. However, please note that the results may vary based on individual circumstances and market conditions. We strive to be transparent about our assumptions and encourage users to consult with financial professionals for personalized advice tailored to their specific needs.
