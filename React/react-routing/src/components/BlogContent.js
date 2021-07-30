import React from "react";
import { useParams } from "react-router-dom";

function BlogContent({ topics }) {
  const { topicId } = useParams();
  console.log(topicId);

  const topicContent = topics.find((t) => t.id === topicId);
  console.log(topicContent);
  return <div>{topicId}</div>;
}

export default BlogContent;
