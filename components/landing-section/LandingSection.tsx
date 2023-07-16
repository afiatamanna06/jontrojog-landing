'use client'
import Image from 'next/image'
import Carousel from 'nuka-carousel'
import { landingImages } from './LandingSectionImages'
import LandingSectionBg from './LandingSectionBg'

function LandingSection() {
  return (
    <section className="w-full relative">
      <LandingSectionBg />
      <div className="w-full landing-gradient bg-gradient-to-t from-[#ffffffff] from-40% via-[#ffffffff] via-20% to-[#ffffffaf] to-90% dark:from-[#000000ff] dark:from-40% dark:via-[#000000ff] dark:via-20% dark:to-[#000000af] dark:to-90% relative z-1 flex justify-center min-h-[100vh]">
        <div className="flex flex-col lg:flex-row w-[100%] lg:justify-between items-center max-w-[80rem] gap-12 relative z-1 pt-24 md:pt-40 lg:pt-28 pb-24">
        <div className="max-w-[100%] md:max-w-[40rem] lg:max-w-[18rem] block lg:hidden">
            <Carousel
              autoplay={true}
              cellAlign="center"
              animation="fade"
              slidesToShow={1}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              enableKeyboardControls={false}
              defaultControlsConfig={{
                pagingDotsStyle: {
                  fill: '#DC4492',
                },
              }}
              withoutControls
              wrapAround
            >
              {landingImages.map((image, index) => {
                return (
                  <div
                    key={image}
                    className="w-[100%] h-[50vh] lg:h-[70vh] md:rounded-xl lg:rounded-2xl overflow-hidden"
                  >
                    <img
                      src={image}
                      className="h-[100%] w-[100%] object-cover"
                      alt={`Slide Image ${index}`}
                    />
                  </div>
                )
              })}
            </Carousel>
          </div>
          <div className="flex flex-col gap-6 px-4 md:px-12 lg:px-0 items-center lg:items-start">
            <div className="text-3xl md:text-4xl lg:text-6xl font-semibold text-center lg:text-start tracking-wider">
              Engineering IoT Solutions for a Connected World.
            </div>
            <div className="text-lg font-medium text-center lg:text-start text-gray-500 dark:text-gray-400">
              Transforming Industries and Empowering Lives through Smart IoT Solutions.
            </div>
            <div className="flex flex-row gap-3">
              <button className="bg-black dark:bg-[#ffffffff] text-white dark:text-black tracking-wider text-white font-medium rounded min-w-[7.5rem] py-2 px-3 hover:opacity-[0.9] active:opacity-[0.9]">
                Get Started
              </button>
              <button className="text-black dark:text-white border-2 border-black dark:border-2 dark:border-white bg-white dark:bg-black tracking-wider text-white font-medium rounded min-w-[7.5rem] py-2 px-3 hover:opacity-[0.9] active:opacity-[0.9]">
                Learn More
              </button>
            </div>
          </div>
          <div className="max-w-[15rem] md:max-w-[20rem] lg:max-w-[32rem] hidden lg:block">
            <Carousel
              autoplay={true}
              cellAlign="center"
              animation="fade"
              slidesToShow={1}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              enableKeyboardControls={false}
              defaultControlsConfig={{
                pagingDotsStyle: {
                  fill: '#DC4492',
                },
              }}
              withoutControls
              wrapAround
            >
              {landingImages.map((image, index) => {
                return (
                  <div
                    key={image}
                    className="w-[100%] h-[50vh] lg:h-[70vh] md:rounded-xl lg:rounded-2xl overflow-hidden"
                  >
                    <img
                      src={image}
                      className="h-[100%] w-[100%] object-cover"
                      alt={`Slide Image ${index}`}
                    />
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingSection
