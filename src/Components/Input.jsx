function Input (props) {
    const {userImage, username} = props
    return (
        <div className="container wrap">
            <input className="input" type="text" placeholder="Add a comment ..."></input>
            <div className="d-flex justify-content-space-between">
                <img className="profile-pic" src={`src/assets/${userImage}`} alt={username}></img>
                <button className="send-button">Send</button>
            </div>
        </div>
    )
}

export default Input