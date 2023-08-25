import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { fetchComments } from '../utils/api';

const CommentContext = createContext({});

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;

  useEffect(() => {
    fetchComments(currentPage, commentsPerPage).then((commentsData) => {
      setComments((prevComments: any) => [...prevComments, ...commentsData]);
    });
  }, [currentPage]);

  const loadMoreComments = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <CommentContext.Provider value={{ comments, loadMoreComments }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => {
  return useContext(CommentContext);
};
