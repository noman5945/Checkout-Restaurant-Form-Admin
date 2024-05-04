import { useState } from "react";

const useDatabasePost = (apiLink, payLoadBody) => {
  const [success, setSuccess] = useState(false);
  fetch(apiLink, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payLoadBody),
  })
    .then((response) => response.json())
    .then((_id) => {
      if (_id.acknowledged) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    });
  return [success];
};

export default useDatabasePost;
