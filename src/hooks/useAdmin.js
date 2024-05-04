import { useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoader, setAdminLoader] = useState(true);
  fetch(`http://localhost:5000/getuser-type?email=${email}&type=Admin`)
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