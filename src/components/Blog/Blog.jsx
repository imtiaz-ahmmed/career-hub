import React from "react";

const Blog = () => {
  return (
    <div>
      <h3
        className="bg-indigo-50 h-36 text-center font-bold text-3xl"
        style={{
          backgroundImage:
            "url('../../../assets/All Images/Vector.png'), url('../../../assets/All Images/Vector-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom, right top",
        }}
      >
        Blog
      </h3>
      <div className="border mx-24 mt-12 mb-8 p-8 bg-slate-100 text-justify rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600 mb-4">
          When should you use context API?
        </h2>
        <p>
          The Context API in React is a mechanism for passing data down the
          component tree without having to pass props manually at every level.
          It can be useful in certain situations where a lot of components need
          to access the same data or functionality. Here are some situations
          where can consider using the Context API: When data that needs to be
          shared across multiple components that are not directly connected to
          each other. When a complex hierarchy of components and it becomes
          difficult to pass data through props at every level. When data that
          needs to be updated frequently and don't want to pass the updated data
          through props every time. When data that is used by many components in
          application and passing it through props would create "prop drilling"
          - a situation where need to pass the same props down through many
          layers of components.
        </p>
      </div>
      <div className="border mx-24 mt-12 mb-8 p-8 bg-slate-100 text-justify rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600 mb-4">
          What is a custom hook?
        </h2>
        <p>
          <strong>A custom hook</strong> is a JavaScript function that uses one
          or more of the built-in React hooks, and typically serves a specific
          purpose related to a component or group of components. Custom hooks
          allow to reuse stateful logic across multiple components without
          duplicating code, make code more modular and easier to maintain.
        </p>
      </div>
      <div className="border mx-24 mt-12 mb-8 p-8 bg-slate-100 text-justify rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600 mb-4">
          What is useRef?
        </h2>
        <p>
          <strong>useRef</strong> is a built-in React hook that provides a way
          to store mutable values in a way that persists across renders. It
          allows to create a reference to a DOM element or any other value, and
          access it from within a component or its child components.
        </p>
      </div>
      <div className="border mx-24 mt-12 mb-8 p-8 bg-slate-100 text-justify rounded-lg">
        <h2 className="font-bold text-xl text-indigo-600 mb-4">
          What is useMemo?
        </h2>
        <p>
          {" "}
          <strong>useMemo</strong> is a built-in React hook that allows to
          memoize the result of a function call and avoid unnecessary
          re-computations. In other words, useMemo can help improve performance
          by optimizing expensive computations that might otherwise be repeated
          every time a component re-renders
        </p>
      </div>
    </div>
  );
};

export default Blog;
