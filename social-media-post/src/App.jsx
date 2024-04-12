// Import
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// Components
import Header from "./components/Header"; // Header component
import PostContent from "./components/PostContent"; // PostPhoto component
import CommentsSection from "./components/CommentsSection"; // CommentsSection component
import PostComment from "./components/PostComment"; // PostComment component
// Images
import profileLogo from "./assets/profile-logo.jpg"; // profile image
import postImage from "./assets/post-image.jpg"; // post image
// Data
import { POST_DESCRIPTION } from "./data"; // post description

function App() {
  return (
    // Content wrapper
    <div className="py-3 px-2">
      {/*Header*/}
      <Header
        name={POST_DESCRIPTION[0].name}
        location={POST_DESCRIPTION[0].location}
        profileImage={POST_DESCRIPTION[0].profileImage}
      />
      {/*Post photo*/}
      <PostContent
        postImage={POST_DESCRIPTION[0].postImage}
        postText={POST_DESCRIPTION[0].postText}
      />
      {/* Comments section */}
      <CommentsSection
        commenterName={POST_DESCRIPTION[0].name}
        commenterImage={POST_DESCRIPTION[0].profileImage}
      >
        <PostComment
          name={POST_DESCRIPTION[0].name}
          profileImage={POST_DESCRIPTION[0].profileImage}
        />
      </CommentsSection>
    </div>
  );
}

export default App;
