import React from 'react'

const Layout = ({ children }) => {
    return (
        <main className="max-w-md mx-auto px-4 py-6 pt-6">
            <h1 className="max-w-xs mx-auto text-2xl font-bold text-center leading-snug text-gray-900">
                <span className="inline-flex relative text-white">
                    <span
                        aria-hidden
                        className="absolute inset-0 bg-indigo-600"
                        style={{ transform: 'scaleX(-1.05) skewY(-.5deg)' }}
                    ></span>
                    <span className="relative">Pays for itself</span>
                </span>{' '}
                with one great pairing session
            </h1>
            <p className=" mt-4 text-gray-700 text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
            </p>
            <div className="mt-10 p-4 pt-6 bg-indigo-600 rounded-lg shadow-md">
                <div className="pt-2 pb-3 border-b border-indigo-400">
                    <h2 className="text-lg text-white text-center">
                        Developer Teams
                    </h2>
                    <div className="mt-2 flex items-center justify-center">
                        <div className="text-7xl font-bold text-white tracking-tighter">
                            $25
                        </div>

                        <div className="ml-4 text-sm text-white font-medium">
                            <span className="block">per user</span>
                            <span className="block"> per month</span>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="py-6 text-sm text-white font-medium">
                        <li className="flex items-center">
                            <svg
                                aria-hidden
                                className="h-6 w-6"
                                viewBox="0 0 512 512"
                            >
                                <path d="M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.331 26.629 74.98 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.98 181.019C123.332 485.371 187.619 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
                                <path d="M378.305 173.859c-5.857-5.856-15.355-5.856-21.212.001L224.634 306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l80.333 80.333a14.953 14.953 0 0010.606 4.393c3.838 0 7.678-1.465 10.606-4.393l143.066-143.066c5.858-5.857 5.858-15.355 0-21.213z" />
                            </svg>
                            <span className="ml-3">
                                Unlimited pairing session
                            </span>
                        </li>
                        <li className="flex items-center">
                            <svg
                                aria-hidden
                                className="h-6 w-6 mt-3"
                                viewBox="0 0 512 512"
                            >
                                <path d="M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.331 26.629 74.98 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.98 181.019C123.332 485.371 187.619 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
                                <path d="M378.305 173.859c-5.857-5.856-15.355-5.856-21.212.001L224.634 306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l80.333 80.333a14.953 14.953 0 0010.606 4.393c3.838 0 7.678-1.465 10.606-4.393l143.066-143.066c5.858-5.857 5.858-15.355 0-21.213z" />
                            </svg>
                            <span className="ml-3 pt-4">
                                Pair with external collaborator for free
                            </span>
                        </li>
                    </ul>
                    <div>
                        <a
                            href="#"
                            className="block w-full py-3 text-center rounded bg-indigo-500 font-semibold text-white border-t border-indigo-400"
                        >
                            Start two-week free trial
                        </a>
                    </div>
                </div>
            </div>
            {/* <div> */}
            <div className="mt-10 p-4 bg-white rounded-lg shadow-md">
                <div className="pt-2 pb-3 border-b">
                    <h2 className="text-lg text-bg-gray-800 text-center">
                        Customized
                    </h2>
                    <p className="mt-2 text-sm font-medium text-center text-gray-700 ">
                        Need a custom plan? we're flexible
                    </p>
                </div>
                <div>
                    <ul className="py-6 text-sm text-gray-800 font-medium">
                        <li className="flex items-center">
                            <svg
                                aria-hidden
                                className="h-6 w-6"
                                viewBox="0 0 512 512"
                            >
                                <path d="M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.331 26.629 74.98 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.98 181.019C123.332 485.371 187.619 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
                                <path
                                    className="text-gray-700"
                                    d="M378.305 173.859c-5.857-5.856-15.355-5.856-21.212.001L224.634 306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l80.333 80.333a14.953 14.953 0 0010.606 4.393c3.838 0 7.678-1.465 10.606-4.393l143.066-143.066c5.858-5.857 5.858-15.355 0-21.213z"
                                />
                            </svg>
                            <span className="ml-3">Volume discount</span>
                        </li>
                        <li className="flex items-center">
                            <svg
                                aria-hidden
                                className="h-6 w-6 mt-3"
                                viewBox="0 0 512 512"
                            >
                                <path d="M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.331 26.629 74.98 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.98 181.019C123.332 485.371 187.619 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
                                <path
                                    className="text-gray-700"
                                    d="M378.305 173.859c-5.857-5.856-15.355-5.856-21.212.001L224.634 306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l80.333 80.333a14.953 14.953 0 0010.606 4.393c3.838 0 7.678-1.465 10.606-4.393l143.066-143.066c5.858-5.857 5.858-15.355 0-21.213z"
                                />
                            </svg>
                            <span className="ml-3 pt-4">
                                Sporadic usage discount
                            </span>
                        </li>
                        <li className="flex items-center">
                            <svg
                                aria-hidden
                                className="h-6 w-6 mt-3"
                                viewBox="0 0 512 512"
                            >
                                <path d="M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.331 26.629 74.98 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.98 181.019C123.332 485.371 187.619 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z" />
                                <path d="M378.305 173.859c-5.857-5.856-15.355-5.856-21.212.001L224.634 306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l80.333 80.333a14.953 14.953 0 0010.606 4.393c3.838 0 7.678-1.465 10.606-4.393l143.066-143.066c5.858-5.857 5.858-15.355 0-21.213z" />
                            </svg>
                            <span className="ml-3 pt-4">SSO support</span>
                        </li>
                    </ul>
                    <div>
                        <a
                            href="#"
                            className="block w-full py-3 text-center rounded bg-gray-700 font-semibold text-white shadow-md"
                        >
                            Contact a Co-Founder
                        </a>
                    </div>
                </div>
            </div>
            <section className="max-w-md mx-auto mt-16">
                <div className="px-4">
                    <h2 className="text-2xl font-bold text-center text-gray-900">
                        Your Tuple explained
                    </h2>
                    <p className="mt-4 text-center text-gray-800">
                        Here's what you need to know about your Tuple license,
                        based on the questions we get asked the most.
                    </p>
                </div>
                <dl className="mt-4">
                    <div className="px-4 py-6 border-b-2">
                        <dt className="flex items-center">
                            <span className="text-gray-900">
                                {' '}
                                Will I lose my data if I dowgrade from the
                                unlimited plan to the Free plan
                            </span>
                            <button className="block ml-4">
                                <svg className="h-4 w-4" viewBox="0 0 512 512">
                                    <path
                                        className="text-gray-900"
                                        vectorEffect="non-scaling-stroke"
                                        d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                                    />
                                </svg>
                            </button>
                        </dt>
                        <dd className="hidden ">
                            This text should not be visible
                        </dd>
                    </div>
                    <div className="px-4 py-6 border-b-2">
                        <dt className="flex items-center">
                            <span className="text-gray-900">
                                {' '}
                                How much does it cost to have guests con my
                                TUple team?
                            </span>
                            <button className="block ml-4">
                                <svg className="h-4 w-4" viewBox="0 0 512 512">
                                    <path
                                        className="text-gray-900"
                                        vectorEffect="non-scaling-stroke"
                                        d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                                    />
                                </svg>
                            </button>
                        </dt>
                        <dd className="hidden">
                            This text should not be visible
                        </dd>
                    </div>
                    <div className="px-4 py-6 bg-white shadow-lg">
                        <dt className="flex items-center">
                            <span className="font-semibold text-indigo-700">
                                We need to add new users to our team. How will
                                that be billed?
                            </span>
                            <button className="block ml-4">
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        className="text-gray-700"
                                        d="M6 18L18 6M6 6l12 12"
                                        vectorEffect="non-scaling-stroke"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </dt>
                        <dd className="mt-4   text-sm text-gray-700">
                            <p>
                                This text should not be visibleThis text should
                                not be visibleThis text should not be visible
                            </p>
                        </dd>
                    </div>

                    <div className="px-4 py-6 border-b-2">
                        <dt className="flex items-center">
                            <span className="text-gray-900">
                                Can I mix free members and Unlimited members
                                together?
                            </span>
                            <button className="block ml-4">
                                <svg className="h-4 w-4" viewBox="0 0 512 512">
                                    <path
                                        className="text-gray-900"
                                        vectorEffect="non-scaling-stroke"
                                        d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                                    />
                                </svg>
                            </button>
                        </dt>
                        <dd className="hidden">
                            This text should not be visible
                        </dd>
                    </div>

                    <div className="px-4 py-6 border-b-2">
                        <dt className="flex items-center">
                            <span className="text-gray-900">
                                Can I mix free members and Unlimited members
                                together?
                            </span>
                            <button className="block ml-4">
                                <svg className="h-4 w-4" viewBox="0 0 512 512">
                                    <path
                                        className="text-gray-900"
                                        vectorEffect="non-scaling-stroke"
                                        d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                                    />
                                </svg>
                            </button>
                        </dt>
                        <dd className="hidden">
                            This text should not be visible
                        </dd>
                    </div>
                </dl>
            </section>
        </main>
    )
}
export default Layout
