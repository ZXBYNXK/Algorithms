// The conqurer is an idea of creating a program that can search and find anyting in any
// data structure.

const conqurer = (dataStructure, queryAnything) => {
  const queryType = typeof queryAnything;
// console.log(`Data Structure: ${Object.keys(dataStructure) ? Object.values(dataStructure).filter((z, i) => z[i] === Object) : dataStructure }`)
    expand(dataStructure)
  switch (queryType) {
    case "string":
      console.log("Is a string");
      break;
    case "object":
      console.log("Could be an array or an object, which are both objects.");
      break;
    case "boolean":
      console.log("Is a boolean");
    break;
    default: 
    console.log("Invalid query!")
    }
    return 0;
};

const find = (query) => query;

const search = () => find("Search me");

const exile = () => console.log("program :-:-: Exiled");

const errorMsg = (err) => console.log(`Error: ${err}`);

const getAllKeys = (obj) => Object.keys(obj);

const expand = (obj) => {
    let heap = [];
    let stack = [];
    if (heap.length > 0) 
    {
        console.log("Heap has contents")
    } else if (stack.length > 0)
    {
        console.log("Stack has contents")
    } else 
    {
        console.log("Nothing to do!")
    }
}

console.log(conqurer({ll: "ll", bool: true, z : {a: "f", b: "w", x: {x: "x"}}, v: "4", m: "9", k: "5"}, true))


