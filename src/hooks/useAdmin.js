import { useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  fetch(`http://localhost:5000/getuser-type?email=${email}&type=${"Admin"}`)
    .then((response) => response.json())
    .then((finalResult) => {
      if (finalResult.length > 1) {
        setIsAdmin(true);
      }
    });
  return [isAdmin];
};
export default useAdmin;
