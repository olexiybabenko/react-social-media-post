// Import
import { useState } from "react"; // useState function
import PostComment from "./PostComment"; // PostComment component
import { ACTIVE_USERS } from "../data"; // Active users array

// Define nextId - this is required to add keys to the mapped list
let nextId = 0;

// CommentsSection component
export default function CommentsSection({
  children,
  commenterName = ACTIVE_USERS[0].name,
  commenterImage = ACTIVE_USERS[0].profileImage,
}) {
  // Write comment: useState - change of comment
  const [commentText, setCommentText] = useState();
  // handleChange function - watch change of comment
  function handleChange(event) {
    // Change the of the comment
    setCommentText(event.target.value);
  }

  // Publish comment: useState function - watches comment published
  const [publishedComments, setPublishedComments] = useState([]);

  // Define handlePublish function - it will add an element to the comments section once the publish button is clicked
  function handlePublish() {
    // use setPublish so that useState watches it
    setPublishedComments(
      // Add element to the comments list
      [...publishedComments, { id: nextId++, commentText: commentText }]
    );
    // Clear the input field text
    setCommentText("");
  }
  // Define handleDelete function - it will delete comment from the publishedComments list
  function handleDelete(comment) {
    // use setPublish so that useState watches it
    setPublishedComments((oldComments) => {
      return oldComments.filter((commentItem) => commentItem.id !== comment.id);
    });
  }

  // Currently published comments
  let currentlyPublishedComments = publishedComments.map((comment) => (
    <PostComment
      key={comment.id}
      name={ACTIVE_USERS[0].name}
      profileImage={ACTIVE_USERS[0].profileImage}
      initialCommentText={comment.commentText}
      onDelete={() => handleDelete(comment)}
    />
  ));

  // Define placeholders that will be conditionally displayed
  // Define the comment placeholder
  let commentPlaceholder = "Comment as " + commenterName;
  // Define the noCommentsPlaceholder
  let noCommentsPlaceholder = (
    <div className="text-center pt-4">
      <p className="font-medium">No comments yet</p>
      <p className="text-xs font-light">Start the conversation</p>
    </div>
  );

  // JSX Output
  return (
    <div className="pt-2">
      {/* Comments section title */}
      <p className="text-center text-xs font-medium pb-2 border-b">Comments</p>
      {/* Older comments if they exist or the  noCommentsPlaceholder*/}
      {publishedComments.length > 0
        ? currentlyPublishedComments
        : noCommentsPlaceholder}
      {/* Comment input field */}
      <div className="pt-5 flex justify-between flex-nowrap gap-3">
        {/* Left side */}
        <div className=" flex justify-start flex-nowrap gap-3 w-full">
          {/*Profile image*/}
          <div className="max-w-8 my-auto">
            <img
              src={commenterImage}
              className="rounded-full  border-2 border-orange-400"
            />
          </div>
          {/*Input - Comment text*/}
          <input
            className="text-xs w-full focus:border-0"
            type="text"
            required
            value={commentText}
            placeholder={commentPlaceholder}
            onChange={handleChange}
          />
        </div>
        {/*Comment button*/}
        <button className="" onClick={handlePublish}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={1}
            viewBox="0 0 28 28"
            stroke="currentColor"
            className="w-6 h-6 fill-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
