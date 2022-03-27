import React, { useEffect, useRef } from "react";

function useClicHandleModal(ref, closeCallback = () => null) {
  console.log(ref);
  const handleClose = (e) => {
    if (!ref.current.contains(e.target)) {
      console.log("chka ref");
      closeCallback();
    }
  };
  useEffect(() => {
    if (ref.current) {
      window.addEventListener("click", handleClose);
    }
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [ref]);
}

export default useClicHandleModal;
