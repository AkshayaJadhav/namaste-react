const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
   [ React.createElement("h1",{},"hii iam h1 tag"),React.createElement("h2",{},"hii iam h2 tag")])
);


        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);