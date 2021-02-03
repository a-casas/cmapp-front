import React, { useEffect, useState } from "react";
import axios from "axios";

const Client = () => {
  const [url, setUrl] = useState("https://cm-app-back.herokuapp.com/client/all");
  const [responseAPI, setResponseAPI] = useState({ response: "OK" });

  useEffect(() => {
    const queryAPI = async () => {
      const query = await axios({ url });

      setResponseAPI(query);
    };

    queryAPI();
  }, []);

  const ShowResponse = () => {
    return Object.keys(responseAPI).map((key) => {
      return (
        <div key={key}>
          {key}: {JSON.stringify(responseAPI[key])}
        </div>
      );
    });
  };

  return (
    <div>
      <ShowResponse />
    </div>
  );
};

export default Client;
