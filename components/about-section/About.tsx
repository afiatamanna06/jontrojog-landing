const stats = [
  { id: 1, name: 'Users', value: '11,000' },
  { id: 2, name: 'Total revenue', value: '$2M' },
  { id: 3, name: 'Countries', value: '4' },
  { id: 4, name: 'Founded', value: '2022' },
]

export default function About() {
  return (
    <div id="about" className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-28 mb-12 lg:mb-40">
      <img
        className="w-full bg-gray-50 object-cover rounded-xl lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-12 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <p className="text-3xl font-bold tracking-wider sm:text-4xl">
              Trusted by thousands of users&nbsp;worldwide
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l-2 border-gray-300 dark:border-gray-700 pl-6"
                >
                  <dt className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-wider">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
