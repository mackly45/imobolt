import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface Props {
  onUpload: (file: File) => void;
}

export function FileUploader({ onUpload }: Props) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0];
    if (file?.type === 'application/pdf') {
      onUpload(file);
    }
  }, [onUpload]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  }, [onUpload]);

  return (
    <div
      className="max-w-xl mx-auto"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <label className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-blue-400 focus:outline-none">
        <span className="flex items-center space-x-2">
          <Upload className="w-6 h-6 text-gray-600" />
          <span className="text-gray-600">
            Drop a PDF file here, or click to select
          </span>
        </span>
        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </div>
  );
}