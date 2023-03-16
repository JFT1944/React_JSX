const Tweet = (props) =>{
   const username = props.username 
   const name = props.name
   const message = props.message
   const nv = props.nv

   return(
    <div class="tweet">
        <ul>
            <li>username: {username}</li>
            <li>name: {name}</li>
            <li>message: {message}</li>
        </ul>
    </div>
   )
}