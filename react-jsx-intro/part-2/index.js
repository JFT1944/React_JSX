function App(){
    return(
        <div>
            <h1>App2</h1>
            <Tweet nv="tweet" name="name1" username="testname1" message="message1" />
            <Tweet nv="tweet" name="name2" username="testname2" message="message2" />
            <Tweet nv="tweet" name="name3" username="testname3" message="message3" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));