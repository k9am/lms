import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const observer = new MutationObserver(() => {
      console.warn("Mutation event detected, replacing with MutationObserver.");
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const quill = new Quill(editorRef.current, { theme: "snow" });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return <div ref={editorRef} style={{ height: "300px" }} />;
};

export default Editor;
