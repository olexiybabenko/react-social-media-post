// Import image pathes
import profileLogo from "./assets/profile-logo.jpg"; // profile image
import postImage from "./assets/post-image.jpg"; // post image
import commenterImage from "./assets/commenter-profile-image.jpg"; // commenter profile image

// Export array of post description
export const POST_DESCRIPTION = [
  {
    name: "wwf.polska",
    location: "Warsaw, Poland",
    profileImage: profileLogo,
    postImage: postImage,
    postText:
      "The spirit of the forest backwoods, the largest European cat, lives only in the wildest corners of our country. One of Europe's largest predators has come close to extinction and remains critically endangered in some areas.",
  },
];

// Export array of active users
export const ACTIVE_USERS = [
  {
    profileImage: commenterImage,
    name: "happy.lynx",
  },
];

// Export array of comments
export const COMMENTS_DATA = [
  {
    profileImage: commenterImage,
    name: "happy.lynx",
    commentText: "Test comment text loaded from map",
  },
];
