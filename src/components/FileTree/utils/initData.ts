// import { Directory, Node } from "../fileTree";

// const initData = (input: Node, path = "/"): Directory => {
//   if ("children" in input) {
//     input.path = path + input.name;
//     input.isOpen = false;
//     input.children.map(child => initData(child, input.path + "/"));
//   } else {
//     input.path = path + input.name;
//   }

//   return input as Directory;
// };

// export default initData;
