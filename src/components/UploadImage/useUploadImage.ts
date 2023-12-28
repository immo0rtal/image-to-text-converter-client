import { apiUrl } from "../../constants";

export const useUploadImage = () => {
  const uploadImage = async (files: FileList) => {
    const fd = new FormData();
    fd.append("file", files[0]);

    const requestUrl = `${apiUrl}/test/`;

    return await fetch(requestUrl, {
      method: "POST",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
      body: fd,
    }).then((response) => response.json());
  };

  return { uploadImage };
};
