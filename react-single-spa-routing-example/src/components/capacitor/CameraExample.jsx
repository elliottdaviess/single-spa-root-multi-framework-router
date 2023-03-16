import React, { useState, useEffect } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { registerPlugin } from '@capacitor/core';
const Echo = registerPlugin('Echo');

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

  useEffect(() => {
    const fetchData = async () => {
      const { value } = await Echo.echo({ value: 'Hello World!' });
      console.log('Response from native:', value);
    };
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={takePicture}>Take Picture</button>
      {photo && <img src={photo} />}
    </div>
  );
};

export default CameraExample;
