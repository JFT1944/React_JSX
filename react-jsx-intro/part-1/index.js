function App(){
    return (
        <div>
            <h1>Hello</h1>

            <FirstComponent />

            <NamedComponent name="justin"/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
  );