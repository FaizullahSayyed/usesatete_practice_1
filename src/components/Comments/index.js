import {v4 as uuidv4} from 'uuid'

import {useState} from 'react'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  //   const [comment, setComment] = useState({name: '', commentText: ''})
  const [commentsList, updateCommentsList] = useState([])

  //   const commentDetails = {name, commentText}

  const onChangeName = event => setName(event.target.value)
  const onChangeComment = event => setCommentText(event.target.value)

  const onSubmitFunction = event => {
    event.preventDefault()
    // setComment({name, commentText})
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    updateCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit" onClick={onSubmitFunction}>
          Comment
        </CommentButton>
      </Form>
      {/* <CommentItem name={name} commentDetails={comment} /> */}
      {commentsList.map(eachComment => (
        <CommentItem key={eachComment.id} commentDetails={eachComment} />
      ))}
    </CommentsContainer>
  )
}

export default Comments
