import React from "react";

const Contacts = () => {
  return (
    <div className="w-full h-screen">
      <div className="  bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
        <h1 className="sm:text-5xl pb-16 w-full h-[20%] flex items-start justify-center text-teal-300 fontText lg:text-7xl mb-16">
          Contact Us!
        </h1>
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-blue-500  transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl shadow-teal-300 shadow-2xl animate-pulse"></div>
          <div className="text-white relative px-4 py-10 bg-gray-900 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <p className="text-white">
                Fill up the form below to send us a message.
              </p>
            </div>

            <form>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
              />

              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />

              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-32 w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
              ></textarea>

              <div className="flex justify-between">
                <input
                  className="shadow bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
