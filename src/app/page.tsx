"use client"
import NavLink from "@/app/components/ui/NavLink";
import {useState} from "react";
import Image from "next/image";
import SplitText from "@/app/components/ui/SplitText";

export default function Home() {

    const [showNew, setShowNew] = useState<boolean>(false);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState(true);


    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

  return (
      <div className={`w-full h-screen bg-white flex items-center justify-center font-mono`}>
          <div className={`w-1/2 h-full bg-[url('/images/checkered_bg.jpg')] bg-cover text-white flex flex-col items-center  justify-center`}>
              <SplitText
                  text="Kolox_Hub"
                  className="font-semibold text-center mb-4"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
              />
            <figure className={`flex flex-col items-center justify-center w-full flex-wrap mb-8`}>
                <Image width={150} height={150} src={"/images/logoavif.avif"} alt={""} className={`mb-4`}></Image>
                <figcaption>
                    Print|Brand|Design|Advert
                </figcaption>
            </figure>
            <div className={`w-full flex flex-col items-center justify-center gap-4`}>
                <p>Lorem ipsum dolor sirepellat tenetur veniam, veritatis vitae voluptatem.</p>
                <p>Lorem ipsum dolor sirepellat tenetur veniam, veritatis vitae voluptatem.</p>
                <p>Lorem ipsum dolor sirepellat tenetur veniam, veritatis vitae voluptatem.</p>
            </div>

              <p className={`bottom-0`}>copyright &copy;KoloxHub 2025</p>
          </div>

          <div className={`w-2/3 h-full rounded-lg bg-white p-8`}>
              <h1 className="text-2xl font-medium mb-8">
                  <button
                      onClick={() => setIsSignUp(false)}
                      className={`px-2 ${!isSignUp ? "text-pink-700 underline" : "text-gray-500"}`}
                  >
                      SIGN IN
                  </button>
                  &nbsp;/&nbsp;
                  <button
                      onClick={() => setIsSignUp(true)}
                      className={`px-2 ${isSignUp ? "text-pink-700 underline" : "text-gray-500"}`}
                  >
                      SIGN UP
                  </button>
              </h1>

              {isSignUp ? (
                  <form className="w-full h-8/12 flex flex-col justify-start">
                      <label htmlFor="username" className="text-lg text-pink-700">Username</label>
                      <input
                          type="text"
                          id="username"
                          placeholder="Enter your preferred username"
                          className="w-1/2 drop-shadow-xl border-2 border-gray-300 rounded-md p-1 focus:outline-pink-700 caret-pink-700 mb-4"
                          required
                      />

                      <label htmlFor="email" className="text-lg text-pink-700">Email</label>
                      <input
                          type="email"
                          id="email"
                          placeholder="Enter your email address"
                          className="w-1/2 drop-shadow-xl border-2 border-gray-300 rounded-md p-1 focus:outline-pink-700 caret-pink-700 mb-4"
                          required
                      />

                      <label htmlFor="phone" className="text-lg text-pink-700">Phone Number</label>
                      <input
                          type="tel"
                          id="phone"
                          placeholder="Enter your phone number"
                          className="w-1/2 drop-shadow-xl border-2 border-gray-300 rounded-md p-1 focus:outline-pink-700 caret-pink-700 mb-4"
                          required
                      />

                      <label htmlFor="password_new" className="text-lg text-pink-700">Create Password</label>
                      <div className="relative w-1/2 mb-4">
                          <input
                              type={showNew ? "text" : "password"}
                              id="password_new"
                              placeholder="Enter your new password"
                              className="w-full drop-shadow-xl border-2 border-gray-300 rounded-md p-1 focus:outline-pink-700 caret-pink-700 pr-10"
                              required
                          />
                          <button
                              type="button"
                              onClick={() => setShowNew(!showNew)}
                              className="absolute right-2 top-1 text-pink-700"
                          >
                              {showNew ? <img className="w-5 h-5" src={"/icons/hide.png"} alt={""} /> : <img
                                  className="w-5 h-5" src={"/icons/view.png"} alt={""} />}
                          </button>
                      </div>

                      <label htmlFor="password_confirm" className="text-lg text-pink-700">Confirm Password</label>
                      <div className="relative w-1/2 mb-4">
                          <input
                              type={showConfirm ? "text" : "password"}
                              id="password_confirm"
                              placeholder="Enter your password again"
                              className="w-full drop-shadow-xl border-2 border-gray-300 rounded-md p-1 focus:outline-pink-700 caret-pink-700 pr-10"
                              required
                          />

                          <button
                              type="button"
                              onClick={() => setShowConfirm(!showConfirm)}
                              className="absolute right-2 top-1 text-pink-700"
                          >
                              {showConfirm ? <img className="w-5 h-5" src={"/icons/hide.png"} alt={""} /> : <img className="w-5 h-5" src={"/icons/view.png"} alt={""} />}
                          </button>
                      </div>

                      <p className="flex justify-start items-center">
                          <input type="checkbox" className="mr-2 accent-pink-700 w-5 h-5" />
                          Keep me logged in.
                      </p>
                      <p className="mb-4 text-pink-700">
                          Do not check this if your are using a shared or public computer.
                      </p>

                      <button className="text-center border-2 bg-pink-600 text-white text-lg p-1 rounded-md mb-2">Register Now</button>
                      <button className="text-center border-2 bg-white text-pink-600 text-lg rounded-md mb-2">SignUp With Google</button>
                      <p className="text-center">
                          Already have an account?
                          <span className="text-pink-700 ml-1 cursor-pointer">SignIn Here</span>
                      </p>
                  </form>
              ) : (
                  <form className="w-full flex flex-col justify-start">
                      <label htmlFor="username" className="text-lg text-pink-700">Username</label>
                      <input
                          type="text"
                          id="username"
                          placeholder="Enter your username"
                          className="w-1/2 drop-shadow-xl border-2 border-gray-300 rounded-md p-1 mb-4"
                          required
                      />

                      <label htmlFor="password" className="text-lg text-pink-700">Password</label>
                      <input
                          type="password"
                          id="password"
                          placeholder="Enter your password"
                          className="w-1/2 drop-shadow-xl border-2 border-gray-300 rounded-md p-1 mb-4"
                          required
                      />

                      <p className="flex justify-start items-center">
                          <input type="checkbox" className="mr-2 accent-pink-700 w-5 h-5" />
                          Keep me logged in.
                      </p>

                      <button className="text-center border-2 bg-pink-600 text-white text-lg p-1 rounded-md mt-4">
                          Sign In
                      </button>
                  </form>
              )}

          </div>
      </div>
  )
}
