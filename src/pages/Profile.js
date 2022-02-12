import { Navigate } from "react-router-dom";
export default function Profile() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div>
        <h1>사용자 프로필</h1>
      </div>
    );
  }
}
