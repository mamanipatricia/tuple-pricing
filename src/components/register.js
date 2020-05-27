import React from 'react'

const Register = () => {
    return (
        <section className="max-w-md mx-auto px-4 pt-6 pb-20">
            <h2 className="text-2xl font-bold text-center leading-snug text-gray-900">
                We have a unique <span className="inline-block"></span> refund
                policy
            </h2>
            <p className="mt-4 text-center text-gray-700">
                We are not in the business of making money from unhappy users.
                if ou..
            </p>
            <div className="mt-6 flex">
                <a
                    href="#"
                    className="flex-grow py-3 px-4 text-sm font-semibold text-center bg-indigo-600 text-white"
                >
                    Start two-week free trial
                </a>
                <a
                    href="#"
                    className="flex-grow ml-4 py-3 px-4 text-sm font-semibold text-center border border-gray-400 rounded"
                >
                    Learn more
                </a>
            </div>
        </section>
    )
}
export default Register
