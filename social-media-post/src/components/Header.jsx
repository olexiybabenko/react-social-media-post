// Import
import verifiedIcon from "../assets/verified-icon.png";

// Header component
export default function Header({ profileImage, name, location }) {
  // JSX Output
  return (
    <div className="flex justify-start flex-nowrap max-w-96 gap-3">
      {/*Profile image*/}
      <div className="max-w-8 my-auto">
        <img
          src={profileImage}
          alt={name}
          className="rounded-full  border-2 border-indigo-400"
        />
      </div>
      {/*Text*/}
      <div>
        <div className="flex  flex-nowrap gap-1">
          <h1>{name}</h1>
          <div className="max-w-3 mt-1.5">
            <img src={verifiedIcon} alt="verified icon" />
          </div>
        </div>

        <p className="text-xs font-light">{location}</p>
      </div>
      {/*Verified icon*/}
    </div>
  );
}
