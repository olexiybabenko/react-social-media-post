// Import
import { useState } from "react"; // useState function

// PostContent component
export default function PostContent({ postImage, postText }) {
  // Liked: useState to watch if the like is clicked
  const [liked, setLiked] = useState(false);
  // Define a function if the like is clicked
  function handleLike() {
    // define setLiked that changes the liked property
    setLiked((liked) => !liked);
  }

  // useState to watch if bookmark is clicked
  const [saved, setSaved] = useState(false);
  // Define a function to watch if saved
  function handleSave() {
    // define setSaved that changes the liked property
    setSaved((saved) => !saved);
  }

  // JSX Output
  return (
    <div className="pt-2 max-w-96">
      {/*Photo*/}
      <div className="">
        <img src={postImage} alt="postImage" />
      </div>
      {/*Svg icons*/}
      <div className="flex justify-between">
        {/*Like icon*/}
        <div className=" pt-1" onClick={handleLike}>
          <svg
            className={liked ? "fill-red-500 w-7 h-7" : "fill-none w-7 h-7"}
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        {/*Save icon*/}
        <div className="pt-1" onClick={handleSave}>
          <svg
            className={saved ? "fill-black w-6 h-6" : "fill-none w-6 h-6"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </div>
      </div>
      {/*Post text*/}
      <p className="text-wrap text-justify">{postText}</p>
    </div>
  );
}
