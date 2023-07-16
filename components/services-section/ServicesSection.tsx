import { servicesData } from './ServicesData'

const ServicesSection = () => {
  return (
    <div id="service" className="mx-auto pt-28 mb-40 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-wider sm:text-4xl">
          Services We Provide
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
          {servicesData.map((feature) => (
            <div key={feature.name} className="relative pl-18 bg-[#00000011] dark:bg-[#ffffff15] py-4 pr-4 rounded-xl">
              <dt className="text-base font-semibold leading-7 tracking-wider">
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-black dark:bg-[#ffffffff] text-white dark:text-black">
                  {feature.icon}
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-500 dark:text-gray-400">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default ServicesSection
