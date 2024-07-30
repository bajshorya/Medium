import React from "react";
import { Appbar } from "./AppBar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
            <div className="col-span-8 ">
              <div className="text-5xl font-extrabold">{blog.title}</div>
              <div className="text-slate-400 pt-2"> Post on 30 July 2024</div>
              <div className="pt-4">{blog.content}</div>
            </div>
            <div className="col-span-4 ">
              <div className="text-slate-600 text-lg">Author</div>

              <div className="flex">
                <div className="pr-4 flex flex-col justify-center">
                  <Avatar name={blog.author.name} />
                </div>
                <div className="pl-3">
                  <div className="text-2xl font-bold">
                    {blog.author.name || "Anonymous"}
                  </div>
                  <div className="pt-2 text-slate-500">
                    Random gibbersih about the author ability and his/hers
                    capability to catch user's attention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
