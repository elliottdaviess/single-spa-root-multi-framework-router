import React, { useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";

const CameraExample = () => {
  const [photo, setPhoto] = useState(null);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setPhoto(image.webPath);
  };

  return (
    <div>
      <button onClick={takePicture}>Take Picture</button>
      {photo && <img src={photo} />}
    </div>
  );
};

export default CameraExample;
