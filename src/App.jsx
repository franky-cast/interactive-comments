import commentsData from "./assets/data.json"
import Comment from "./Components/Comment.jsx"
import Input from "./Components/Input.jsx"

function App() {
  const data = commentsData.comments.map(item => 
    <Comment 
      key={item.id}
      content={item.content}
      createdAt={item.createdAt}
      score={item.score}
      userImage={item.user.image.png}
      username={item.user.username}
      replies={item.replies}
    />
  )

  return (
    <div>
      {data}
      <Input 
        key={commentsData.currentUser.username}
        userImage={commentsData.currentUser.image.png}
        username={commentsData.currentUser.username}
      />
    </div>
  )
}

export default App