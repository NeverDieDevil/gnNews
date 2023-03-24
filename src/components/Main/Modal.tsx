import React from "react";

const Modal: React.FC<{
  showModal: VoidFunction;
  title: string;
  author: string;
  newsUrl: string;
}> = (props) => {
  const { showModal, title, author, newsUrl } = props;
  return (
    <div className="modal-wrapper" onClick={showModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h1>{title}</h1>
        <p>Author: {author}</p>
        <p>
          Go to news: <a href={newsUrl}>Follow link</a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
