import { useEffect, useState } from "react";
import { getAllComments, getSingleArticle } from "./api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import Collapsible from "./Collapsible";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [refreshComments, setRefreshComments] = useState(false);

  useEffect(() => {
    getAllComments(article_id).then((response) => {
      setComments(response);
    }).catch((err)=>{
      setComments([])
    })
    getSingleArticle(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
      setRefreshComments(false);
    })
    .catch((err)=>{
    })
  }, [refreshComments]);

  if (isLoading) return <p id="status-msg">Comments Loading....</p>;

return (
      <>
       <p className="light-font-colour">Total Comments: {comments.length}</p>
        <Collapsible descriptor="Comments">
          <ul className="comments light-font-colour">
            <h2 id="comments-title">Comments</h2>
            <>
            <PostComment comments={comments} setComments={setComments} />
            </>
            <>
            {comments.length? <>{comments.map((comment) => {
              return (
                <CommentCard
                  comment={comment}
                  setRefreshComments={setRefreshComments}
                  key={comment.comment_id}
                />
              );
            })}</> : <h2 className="no-comments-left">No Comments Yet!</h2>}
                        </>
          </ul>
        </Collapsible>
      </>
    );
};

export default Comments;
