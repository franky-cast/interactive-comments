
import Reply from "./Reply.jsx"

function Comment (props) {
    const {content, createdAt, score, userImage, username, replies} = props

    let replyArr = []

    if (props && replies) {
        if (replies.length > 0) {
            for (let element of replies) {
                replyArr.push(element)
            }
        }
    }

    return (
        <div className="container">
            <div className="comment">
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

            {replyArr && (
                <div>
                    {replyArr.map(item => 
                        <Reply 
                            key={item.id}
                            content={item.content}
                            createdAt={item.createdAt}
                            score={item.score}
                            userImage={item.user.image.png}
                            username={item.user.username}
                        />
                    )}
                </div>)}
        </div>
    )
}

export default Comment