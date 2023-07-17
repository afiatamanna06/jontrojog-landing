import Carousel from 'nuka-carousel'
import { landingImages } from './LandingSectionImages'
import Image from 'next/image'

function LandingSectionBg() {
  return (
    <div className="absolute z-0 w-full h-[100vh]">
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
        {landingImages.map((image) => (
          <img src={image} className="w-full h-[100vh] object-cover" alt="" />
        ))}
      </Carousel>
    </div>
  )
}

export default LandingSectionBg
