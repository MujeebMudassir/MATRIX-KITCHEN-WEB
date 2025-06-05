import React, { useState, useRef } from "react";
import Index from "../Index.jsx";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState(["", "", "", "", ""]);
  const otpRefs = useRef([...Array(5)].map(() => React.createRef()));
  const navigate = useNavigate();

  const handlePhoneSubmit = () => {
    if (phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
      setShowOTP(true);
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleOTPChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      // Move to next input if value is entered
      if (value && index < 4) {
        otpRefs.current[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].current.focus();
    }
  };

  const [name, setName] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);

  const handleVerifyOTP = () => {
    if (otp.join("").length === 5) {
      setShowNameInput(true);
    } else {
      alert("Please enter a valid 5-digit OTP");
    }
  };

  const [email, setEmail] = useState("");

  const handleNameSubmit = () => {
    if (name.trim() && email.trim()) {
      navigate(
        `/profile?phone=${phoneNumber}&name=${encodeURIComponent(
          name.trim()
        )}&email=${encodeURIComponent(email.trim())}`
      );
    } else {
      alert("Please enter both name and email");
    }
  };

  // In the name input section:
  {
    showNameInput && (
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block text-gray-700 text-sm font-medium mb-2 mt-4">
          Your Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-4"
          onClick={handleNameSubmit}
        >
          CONTINUE TO PROFILE
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Left Section with Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src={`${import.meta.env.BASE_URL}/images/red-cookware.jpeg`}
          alt="Red Cookware"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section with Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          {/* Back to Home Link */}
          <a href="/" className="text-red-600 text-sm flex items-center mb-6">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Home
          </a>

          {/* Logo and Title */}
          <h1 className="text-2xl font-bold text-center mb-6">
            Login to <span className="font-bold text-red-600">BARTANN</span>
          </h1>

          {!showOTP ? (
            /* Phone Number Input */
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Phone Number
              </label>
              <div className="flex items-center border-2 border-gray-200 rounded-lg p-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-200">
                <div className="flex items-center mr-3 pr-3 border-r border-gray-300">
                  <img
                    src="https://flagcdn.com/16x12/in.png"
                    alt="India Flag"
                    className="mr-2 w-5 h-4"
                  />
                  <span className="text-gray-700 font-medium">+91</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full outline-none text-gray-700 text-lg placeholder-gray-400"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
                {phoneNumber.length > 0 && (
                  <span
                    className={`ml-2 text-sm ${
                      phoneNumber.length === 10
                        ? "text-green-500"
                        : "text-gray-400"
                    }`}
                  >
                    {phoneNumber.length}/10
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                We'll send you a verification code via SMS
              </p>
            </div>
          ) : (
            /* OTP Input and Name Input */
            <>
              <div className="mb-4">
                <p className="text-center text-gray-600 mb-4">
                  Enter verification code sent to +91 {phoneNumber}
                </p>
                <div className="flex justify-between gap-2 mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={otpRefs.current[index]}
                      type="text"
                      maxLength="1"
                      className="w-12 h-12 border-2 rounded-lg text-center text-xl font-semibold text-red-600 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                      value={digit}
                      onChange={(e) => handleOTPChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
                </div>
                <p className="text-center text-gray-500 text-sm">
                  Didn't receive code?
                  <button className="text-blue-600 font-medium hover:text-blue-700 ml-1">
                    Resend
                  </button>
                </p>
              </div>

              {showNameInput && (
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="block text-gray-700 text-sm font-medium mb-2 mt-4">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-4"
                    onClick={handleNameSubmit}
                  >
                    CONTINUE TO PROFILE
                  </button>
                </div>
              )}
            </>
          )}

          {/* Continue/Verify Button */}
          {!showNameInput && (
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={showOTP ? handleVerifyOTP : handlePhoneSubmit}
            >
              {showOTP ? "VERIFY OTP" : "CONTINUE"}
            </button>
          )}

          {/* Terms and Privacy Policy */}
          <p className="text-center text-gray-500 text-sm mt-6">
            By proceeding, you agree to the{" "}
            <a href="#" className="text-red-600">
              T & C
            </a>{" "}
            and{" "}
            <a href="#" className="text-red-600">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
