// Import
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// Components
import Header from "./components/Header"; // Header component
import PostPhoto from "./components/PostPhoto"; // PostPhoto component
// Images
import profileLogo from "./assets/babenko-logo.png"; // profile image
import postImage from "./assets/post-image.jpg"; // post image

function App() {
  return (
    // Content wrapper
    <div className="py-3 px-2">
      {/*Header*/}
      <Header title={"babenko"} image={profileLogo} />
      {/*Post photo*/}
      <PostPhoto image={postImage} />
    </div>
  );
}

export default App;
