import { useState } from "react";

const Alert = ({ message, type }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    showAlert && (
      <div
        className={`px-4 py-2 rounded-md ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white`}
      >
        <p>{message}</p>
        <button
          onClick={handleAlertClose}
          className="mt-2 text-sm underline font-medium"
        >
          Close
        </button>
      </div>
    )
  );
};

export default Alert;
