import React from "react";

const Blog = () => {
  return (
    <div>
        <div className=" m-auto">
      <h3 className="m-auto text-center font-bold text-2xl underline"> Questions and Answers</h3>
      <div className="m-auto p-12">
        <h3 className="font-bold text-xl"> a. When should you use context API?</h3>
        <p className="pl-6"> When we try to pass props from parent component to child component we normally use props drilling. But, when we have so many child components it becomes very difficult to pass props from parent to child component. In this situation Context API plays a big role to solve this issue. It provides an easy and effective way to pass data from parent to deeper child component without props drilling .</p> <br />
        
        <h3 className="font-bold text-xl"> b. What is a custom hook? </h3>
        <p className="pl-6">Custom Hook is a JavaScript function which is created manually. when there is a need of sharing logic between other JavaScript functions we use custom hook . It helps to reuse some piece of code in several parts of our app.
        When it is necessary to share the logic between other components, it can be extracted to a separate function. The custom hook naming should contain "use" word at the beginning. </p> <br />

        <h3 className="font-bold text-xl"> c. What is useRef?</h3>
        <p className="pl-6">useRef is a react hook that helps to store store a mutable value in the component “memory” but it doesn’t trigger a re-render when the value gets updated.</p> <br />
       
        <h3 className="font-bold text-xl"> d. What is useMemo? </h3>
        <p className="pl-6">useMemo is a react hook and it is used to increase performance by memoizing the value of an function call or computation. During the rendering of a component, useMemo hook is used to memorize a specific computed value  and  it's only get recomputed if its dependencies change.</p>
        
      </div>
    </div>
      
      
       
      
    </div>
  );
};

export default Blog;
