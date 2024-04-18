// Import
import { useState } from "react"; // useState function

// PostComment Component
export default function PostComment({
  profileImage,
  name,
  initialCommentText,
  onDelete,
}) {
  // Liked: useState to watch if the like is clicked
  const [liked, setLiked] = useState(false);
  // Define a function if the like is clicked
  function handleLike() {
    // define setLiked that changes the liked property
    setLiked((liked) => !liked);
  }

  // Edditing: useState to watch if the comment is eddited
  const [isEditting, setIsEditting] = useState(false);
  // Add the handleEdit function
  function handleEditClick() {
    // Define the setIsEditting function that is watched by useState
    setIsEditting((editing) => !editing); // Change the state of editting
  }

  // Change comment: useState - change of comment
  const [commentText, setCommentText] = useState(initialCommentText);
  // handleChange function - watch change of comment
  function handleChange(event) {
    // Change the of the comment
    setCommentText(event.target.value);
  }
  // Define the current comment text
  let currentCommentText = <p className="text-xs font-light">{commentText}</p>;
  // If edit button is clicked
  if (isEditting) {
    // Change currentCommentText from p to input
    currentCommentText = (
      <input
        className="text-xs font-light w-full text-wrap"
        type="text"
        required
        value={commentText}
        onChange={handleChange}
      />
    );
  }

  // JSX Output
  return (
    <div className="flex justify-between border-b py-2">
      {/*Left side */}
      <div className=" flex justify-start flex-nowrap  gap-3 w-full">
        {/*Profile image*/}
        <div className="max-w-8">
          <img
            src={profileImage}
            alt={name}
            className="rounded-full  border-2 border-orange-400"
          />
        </div>
        {/*Text*/}
        <div className="w-full">
          {/*Commenter name*/}
          <p className="text-xs"> {name}</p>
          {/*Comment text*/}
          {currentCommentText}
          {/*Edit, Delete buttons*/}
          <div className="flex flex-nowrap justify-start gap-3 pt-1 text-xs font-light text-gray-500">
            <button onClick={handleEditClick}>
              {!isEditting ? "Edit" : "Save"}
            </button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
      {/*Right side - like icon */}
      <div onClick={handleLike}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className={
            liked
              ? " w-4 h-4 stroke-1 stroke-gray-500 fill-red-500"
              : "w-4 h-4 stroke-1 stroke-gray-500 fill-none"
          }
        >
          <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
        </svg>
      </div>
    </div>
  );
}
