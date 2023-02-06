function Reply (props) {
    const {content, createdAt, score, userImage, username} = props

    return (
        <div className="d-flex gap">
            <hr className="thread"></hr>
            <div className="comment reply">
                <div className="d-flex align-items-center">
                    <img className="profile-pic" src={`src/assets/${userImage}`} alt={username}></img>
                    <h2 className="user-name">{username}</h2>
                    <p className="comment-date">{createdAt}</p>
                </div>
                <p>{content}</p>
                <div className="comment-footer d-flex justify-content-space-between">
                    <div className="d-flex align-items-center">
                        <button>+</button>
                        <p>{score}</p>
                        <button>-</button>
                    </div>
                    <button>Reply</button>
                </div>
            </div>
        </div>
    )
}

export default Reply