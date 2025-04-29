import React, { useState, useEffect, useRef } from "react";
import "./SignIn.css"

const SignIn = ({ isOpen, isSignUp = false, onClose }) => {
  const [formData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const [mode, setMode] = useState(isSignUp ? "signup" : "signin");
  const modalRef = useRef(null);

  useEffect(() => {
    setMode(isSignUp ? "signup" : "signin");
  }, [isSignUp]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "signup") {
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
    }
  };

  return (
    <div className="fixed inset-0 z-50 sm:z-5 bg-neutral-900/80">
      <div
        className="relative flex items-start mt-[45px] justify-center min-h-screen p-4 md:p-0"
      >
        <div className="mx-auto w-full max-w-md p-9 md:p-6 z-50">
          <div ref={modalRef} className="animate mt-7 rounded-xl border border-neutral-200 bg-neutral-100 shadow-xs dark:border-neutral-700 dark:bg-neutral-800  z-100">
            <div className="p-4 sm:p-7">
              <h2 className="text-2xl font-bold text-center mb-2 text-[#262626] dark:text-[#e5e5e5]">
                {mode === "signup" ? "Sign in" : "Sign up"}
              </h2>
              <div className="text-center mt-4 flex gap-2 flex-col sm:flex-row justify-center text-sm dark:text-[#a1a1a1]">
                {mode === "signup" ? (
                  <>
                    Don't have an account yet?{" "}
                    <button
                      onClick={() => setMode("signin")}
                      className="text-[#FA5A15] hover:underline cursor-pointer font-medium"
                    >
                      Sign up here
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setMode("signup")}
                      className="text-[#FA5A15] hover:underline cursor-pointer font-medium"
                    >
                      Sign in here
                    </button>
                  </>
                )}
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {mode === "signup" && 
                  <div className="pt-3 sm:pt-7">
                    <div className="dark:text-[#a1a1a1] text-[#2e2e2e] flex items-center gap-2 py-3 border dark:hover:bg-[#171717] duration-300 hover:bg-[#e5e5e5] border-[#e5e5e5] dark:border-[#404040] justify-center w-full px-3 rounded-lg cursor-pointer">
                      <svg class="h-auto w-4" width="46" height="47" viewBox="0 0 46 47" fill="none">
                        <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"></path>
                        <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"></path>
                        <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"></path>
                        <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"></path>
                      </svg>
                      Sign in with Google
                    </div>
                    <div className="flex items-center my-4">
                      <hr className="flex-grow border-t-[1px] border-[#a1a1a1] dark:border-[#525252]" />
                      <span className="mx-6 text-xs text-[#a1a1a1] dark:text-[#525252]">OR</span>
                      <hr className="flex-grow border-t-[1px] border-[#a1a1a1] dark:border-[#525252]" />
                    </div>
                    <label>
                      <p className="dark:text-[#e5e5e5] text-[#262626] mb-2">Email address</p>
                      <input type="email" required className="dark:bg-[#2e2e2e] bg-[#fafafa] border-[1px] text-[#525252] dark:text-[#e5e5e5] border-[#e5e5e5] dark:border-[#525252] w-full py-3 rounded-lg px-3 outline-none"/>
                    </label>
                    <label>
                      <div className="mt-3 mb-2 flex items-center justify-between">
                        <p className="dark:text-[#e5e5e5] text-[#262626]">Password</p>
                        <p className="text-[#FA5A15] font-semibold hover:underline cursor-pointer">Forgot password?</p>
                      </div>
                      <input type="password" required className="dark:bg-[#2e2e2e] bg-[#fafafa] border-[1px] text-[#525252] dark:text-[#e5e5e5] border-[#e5e5e5] dark:border-[#525252] w-full py-3 rounded-lg px-3 outline-none"/>
                    </label>
                    <label for="hr" class="flex flex-row items-center gap-2.5 dark:text-white text-black mt-4 cursor-pointer">
                      <input id="hr" type="checkbox" class="peer hidden" />
                      <div for="hr" class="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-[#FDC700] transition">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          class="w-5 h-5 stroke-[#e8e8e8] dark:stroke-[#212121]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 12.6111L8.92308 17.5L20 6.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      Remember me
                    </label>
                  </div>
                }

                {mode === "signin" &&
                  <div className="pt-3 sm:pt-7">
                    <div className="dark:text-[#a1a1a1] text-[#2e2e2e] flex items-center gap-2 py-3 border border-[#e5e5e5] dark:border-[#404040] justify-center w-full px-3 rounded-lg cursor-pointer">
                      <svg class="h-auto w-4" width="46" height="47" viewBox="0 0 46 47" fill="none">
                        <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"></path>
                        <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"></path>
                        <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"></path>
                        <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"></path>
                      </svg>
                      Sign in with Google
                    </div>
                    <div className="flex items-center my-4">
                      <hr className="flex-grow border-t-[1px] border-[#a1a1a1] dark:border-[#525252]" />
                      <span className="mx-6 text-xs text-[#a1a1a1] dark:text-[#525252]">OR</span>
                      <hr className="flex-grow border-t-[1px] border-[#a1a1a1] dark:border-[#525252]" />
                    </div>
                    <label>
                      <p className="dark:text-[#e5e5e5] text-[#262626] mb-2">Email address</p>
                      <input type="email" required className="dark:bg-[#2e2e2e] bg-[#fafafa] border-[1px] text-[#525252] dark:text-[#e5e5e5] border-[#e5e5e5] dark:border-[#525252] w-full py-3 rounded-lg px-3 outline-none"/>
                    </label>
                    <label>
                      <div className="mt-3 mb-2 flex items-center justify-between">
                        <p className="dark:text-[#e5e5e5] text-[#262626]">Password</p>
                      </div>
                      <input type="password" required className="dark:bg-[#2e2e2e] bg-[#fafafa] border-[1px] text-[#525252] dark:text-[#e5e5e5] border-[#e5e5e5] dark:border-[#525252] w-full py-3 rounded-lg px-3 outline-none"/>
                    </label>
                    <label>
                      <div className="mt-3 mb-2 flex items-center justify-between">
                        <p className="dark:text-[#e5e5e5] text-[#262626]">Confirm Password</p>
                      </div>
                      <input type="password" required className="dark:bg-[#2e2e2e] bg-[#fafafa] border-[1px] text-[#525252] dark:text-[#e5e5e5] border-[#e5e5e5] dark:border-[#525252] w-full py-3 rounded-lg px-3 outline-none"/>
                    </label>
                    <label for="hr" class="flex flex-row items-center gap-2.5 dark:text-white light:text-black mt-4 cursor-pointer">
                      <input id="hr" type="checkbox" class="peer hidden" />
                      <div for="hr" class="h-5 w-5 flex rounded-md border border-[#a2a1a833] bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-[#FDC700] transition">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          class="w-5 h-5 stroke-[#e8e8e8] dark:stroke-[#212121]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 12.6111L8.92308 17.5L20 6.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p>I accept the <span className="text-[#FA5A15] hover:underline">Terms and Conditions</span></p>
                    </label>
                  </div>
                }
                <button
                  type="submit"
                  className="w-full bg-[#FDC700] text-[#212121] dark:text-white py-4 px-4 rounded-md font-semibold text-base hover:bg-[#F0B100] transition cursor-pointer"
                >
                  {mode === "signup" ? "Sign in" : "Sign up"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
