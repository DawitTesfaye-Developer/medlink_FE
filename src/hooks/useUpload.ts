import { useState } from 'react';

export function useUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  async function uploadFile(file: File) {
    setUploading(true);
    setProgress(0);
    // TODO: Implement file upload logic with progress updates
    setUploading(false);
  }

  return { uploading, progress, uploadFile };
}
