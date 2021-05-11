import React, { Component } from "react";

export default class App3 extends Component {
  render() {
    return (
      <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img
          className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://img1.baidu.com/it/u=4248629026,2640799651&fm=26&fmt=auto&gp=0.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">Sarah Dayan</div>
            <div className="text-gray-500">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
        <div className="p-6 max-w-sm mx-auto bg-blue-500 shadow-lg  rounded-xl  flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12"
              src="https://img1.baidu.com/it/u=4248629026,2640799651&fm=26&fmt=auto&gp=0.jpg"
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
      </div>
    );
  }
}
