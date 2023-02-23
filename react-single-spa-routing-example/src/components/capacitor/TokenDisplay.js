import React, { useState } from "react";

export default function TokenDisplay() {
  const [accessToken, setAccessToken] = useState(sessionStorage.getItem("accessToken"));

  const handleGetTokenClick = async () => {
    try {
      // Function to retrieve the access token
      const tokenResponse = await fetch(
        "https://cors-anywhere.herokuapp.com/https://login.nonprod-admiral.com/myaccount/auth/oauth2.0/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "password",
            client_id: "toolbox",
            client_secret: "daa7d8a7-1085-4509-ab32-d143c2828019",
            username: "elliott@cqa88.com",
            password: "Testing1234!",
            scope: "openid contactid profile segment mail",
          }),
        }
      );
      const tokenResponseBody = await tokenResponse.json();
      if (tokenResponse.status !== 200) {
        throw new Error("Token endpoint fail");
      }
      console.log(`Access Token: ${tokenResponseBody.access_token}`);
      sessionStorage.setItem("accessToken", tokenResponseBody.access_token);
      sessionStorage.setItem("idToken", tokenResponseBody.id_token);
      setAccessToken(tokenResponseBody.access_token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirectClick = () => {
    // Function to redirect to login with access token
    window.location.href = `https://cqa81dpon01.admiral.non-prod.bolt.admiral.uk/login?nextgen&token=${accessToken}`;
  };

  const handleClearTokenClick = () => {
    // Function to clear the token
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("idToken");
    setAccessToken(null);
  };

  return (
    <div>
      <button onClick={handleGetTokenClick}>Get Token</button>
      <button onClick={handleRedirectClick} disabled={!accessToken}>
        Redirect
      </button>
      <button onClick={handleClearTokenClick} disabled={!accessToken}>
        Clear Token
      </button>
      <p>Access Token: {accessToken}</p>
    </div>
  );
}
