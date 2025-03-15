import BgAnimation from "@/components/ui/BgAnimation";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateToken = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  // Handle image file selection and create a preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImagePreview(fileUrl);
    }
  };

  const handleFileInputClick = () => {
    document.getElementById("token-image-input").click();
  };

  // Remove image
  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setImagePreview(null);
  };

  return (
    <>
      <BgAnimation />
      <div className="relative max-w-7xl text-white mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
        <div
          className="bg-[#131B2E] p-6 rounded-lg shadow-lg"
          style={{ opacity: 1 }}
        >
          <div className="max-w-2xl mx-auto">
            <form
              className="space-y-6 bg-[#0A0F1E] rounded-2xl p-8 border border-[#1E2334]"
              style={{ opacity: 1, transform: "none" }}
            >
              <h2 className="text-2xl font-bold mb-6">Create Your Token</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Token Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#131B2E] border border-[#1E2334] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="My Token"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Token Symbol
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-[#131B2E] border border-[#1E2334] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="MTK"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Decimals
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-[#131B2E] border border-[#1E2334] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="0"
                    max="9"
                    defaultValue="9"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Total Supply
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-[#131B2E] border border-[#1E2334] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min="1"
                    defaultValue="1000000000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-[#131B2E] border border-[#1E2334] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows="3"
                    placeholder="Describe your token..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Token Image
                  </label>
                  <input
                    type="file"
                    id="token-image-input"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <div
                    className="w-full h-40 bg-[#131B2E] border border-dashed border-[#1E2334] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#1A2235] transition-colors relative"
                    onClick={handleFileInputClick}
                  >
                    {imagePreview ? (
                      <div className="w-full h-full relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-contain rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-2 right-2 text-white bg-black rounded-full p-1 text-sm"
                        >
                          ✖
                        </button>
                      </div>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-upload w-8 h-8 text-gray-400 mb-2"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" x2="12" y1="3" y2="15"></line>
                        </svg>
                        <p className="text-gray-400 text-sm">
                          Click to upload token image
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          PNG, JPG, GIF (max 5MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Token
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateToken;
