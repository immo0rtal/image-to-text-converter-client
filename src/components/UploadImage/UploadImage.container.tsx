import { useState } from "react";

import { UploadImage } from "./UploadImage";
import { Preview } from "./Preview/Preview";
import { UserResult } from "./UserResult/UserResult";
import { useUploadImage } from "./useUploadImage";

export const UploadImageContainer = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [resultText, setResultText] = useState<string>();

  const imageUrl = files !== null ? URL.createObjectURL(files[0]) : undefined;

  const clearFiles = () => {
    location.reload();
    setFiles(null);
    setResultText(undefined);
  };

  const { uploadImage } = useUploadImage();

  const handleSumbitImage = async (files: FileList | null) => {
    setFiles(files);

    if (files) {
      uploadImage(files)
        .then((data) => setResultText(data.result))
        .catch((error) => {
          console.log(error);
          clearFiles();
        });
    }
  };

  return (
    <>
      {files && imageUrl && (
        <Preview
          imageUrl={imageUrl}
          name={files[0].name}
          size={files[0].size}
          showLoader={!resultText}
          goBack={clearFiles}
        />
      )}

      {!imageUrl && <UploadImage setFiles={handleSumbitImage} />}

      {resultText && files && <UserResult text={resultText} />}
    </>
  );
};
