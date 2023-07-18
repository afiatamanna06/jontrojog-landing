"use client";
import { projectsData } from './ProjectsData'
import Carousel from 'nuka-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FiArrowUpRight } from 'react-icons/fi'
import UseMediaQuery from '../../hooks/useMediaQuery'

export default function Projects() {
  const isAboveSmallScreens = UseMediaQuery('(min-width: 1060px)')

  return (
    <div id="works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-wider sm:text-4xl">
            Our Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Showcasing some of our work providing web & IoT solutions
          </p>
        </div>
        <div className="flex justify-center mt-16">
          <Carousel
            autoplay={true}
            style={{
              width: '100%',
              maxWidth: isAboveSmallScreens ? '80rem' : '20rem',
              paddingBottom: '5rem',
            }}
            cellAlign="center"
            slidesToShow={isAboveSmallScreens ? 3 : 1}
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                className="-translate-y-10 -translate-x-5 bg-black dark:bg-[#ffffffff] text-white dark:text-black rounded-full p-2 opacity-90"
              >
                <FiChevronLeft size={20} />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className="-translate-y-10 translate-x-5 bg-black dark:bg-[#ffffffff] text-white dark:text-black rounded-full p-2 opacity-90"
              >
                <FiChevronRight size={20} />
              </button>
            )}
            defaultControlsConfig={{
              pagingDotsStyle: {
                fill: '#94a3b8',
                width: '2rem',
              },
            }}
            wrapAround
          >
            {projectsData.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl mx-4 bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <div className="absolute z-2 rounded-full p-2 right-5 top-5 bg-white text-black">
                  <FiArrowUpRight size={18} />
                </div>

                <h3 className="mb-3 text-lg font-semibold leading-6 tracking-wider text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <div className="mr-8">
                    {`${post.description.slice(0, 80)}..`}
                  </div>
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
