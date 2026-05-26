import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api/api";
import ReactMarkdown from "react-markdown";

export default function ArticlePage() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle(slug)
      .then((res) => {
        setArticle(res.data.article);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </div>
  );
}
