import React from "react";
import Navbar from "../../components/layout/navbar";
import TestCarousel from "../../assets/testcarousel1.jpg";
export const Home = () => {
  return (
    <>
      <div>
        <div className='carousel bg-[#D9D9D9]'>
          <img src={TestCarousel} className='max-h-[92vh] w-screen' alt='kontol' />
        </div>
        <Navbar />
        <div className='my-16 mx-16'>
          <fieldset className='border-t border-[#000000] mb-5'>
            <legend className='mx-auto px-5'>ForEats</legend>
          </fieldset>
          <div className='mx-16 flex my-16 shadow-xl p-5 rounded-[10px]'>
            <div className='me-12'>
              <img src={TestCarousel} className='max-w-screen-sm h-[70vh]' alt='logo ForEats' />
            </div>
            <div>
              <h1 className='mb-16'>For Eats</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
