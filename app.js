const parent= React.createElement("div",{id:"parent"}, 
React.createElement("h1",{id:"child"},[
React.createElement("h1",{},"sibling1"),
React.createElement("h1",{}, "sibling2")] )
);
const root=  ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
