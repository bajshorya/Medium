import { SignupInput } from "@shoryabaj/common-zod";
import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });
  return (
    <div className=" h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className=" font-extrabold text-3xl ">Create an account</div>
            <div className="text-slate-500 text-center">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account!"}{" "}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            <LabelledInput
              label="Name"
              placeholder="Shorya Baj..."
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Username/Email"
              placeholder="user@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="password"
              type={"password"}
              placeholder="12345xyz"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <button
              type="button"
              className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 me-2 mb-2 "
            >
              {type === "signup" ? "Sign Up" : "Sign In "}{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <>
      <div>
        <div>
          <label className="block mb-2 text-sm  text-black font-semibold pt-4 ">
            {label}{" "}
          </label>
          <input
            onChange={onChange}
            type={type || "text"}
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder={placeholder}
            required
          />
        </div>
      </div>
    </>
  );
}
