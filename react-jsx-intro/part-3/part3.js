const Person = (props) =>{
    let name = props.name
    let age = props.age
    let hobbies = props.hobbies
    hobbies = hobbies.split(',')

    if(name.length > 8){
        name = name.slice(0, 6)
    }



    return (
        <div>
            <p>
            Learn some information about this person: {name} is {age} years old.
            </p>
        <h3>
            {age >= 18 ? 'Please go vote' : 'You must be 18'}
        </h3>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(item => <li>{item}</li>)}
        </ul>
        </div>
    )
}