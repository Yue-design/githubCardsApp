import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
  </MyComponent>,
  documenet.body
);

// function createElement(type, attributes, ...children) {
//   let e;
//   if (typeof type === "string") {
//     e = document.createElement(type);
//   } else {
//     e = new type();
//   }
//   // let e = document.createElement(tagName);
//   for (let p in attributes) {
//     e.setAttribute(p, attributes[p]);
//   }
//   for (let child of children) {
//     if (typeof child === "string") {
//       child = document.createTextNode(child);
//     }
//     e.appendChild(child);
//   }
//   return e;
// }

// document.body.appendChild(
//   <MyComponent id="a" class="c">
//     <div>abc</div>
//     <div></div>
//   </MyComponent>
// );

// for (let i of [1, 2, 3]) {
//   console.log(i);
// }

// document.body.appendChild(
//   <div id="a" class="c">
//     <div>abc</div>
//     <div></div>
//   </div>
// );
