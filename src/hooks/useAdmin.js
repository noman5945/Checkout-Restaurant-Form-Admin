import { useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoader, setAdminLoader] = useState(true);
  fetch(
    `https://check-out-express-server.vercel.app/getuser-type?email=${email}&type=Admin`
  )
    .then((response) => response.json())
    .then((finalResult) => {
      if (finalResult.length > 0) {
        setIsAdmin(true);
        setAdminLoader(false);
      }
    });

  return [isAdmin, adminLoader];
};
export default useAdmin;
