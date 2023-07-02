import "./Card.css";
import { Link } from "react-router-dom";
function Card({ _id, text, description, image, deleteTodo }) {
  const isUpdating = true;
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <h1 className="text">
        {text.substring(0, 1).toUpperCase() + text.substring(1, 15) + "..."}
      </h1>
      <div className="over">
        <h3>
          {description.substring(0, 120) + " ..."}
          <span className="read"><Link className="read-a" to="/ReadMore" state={{
              isUpdating: `${isUpdating}`,
              _id: `${_id}`,
              text: `${text}`,
              description: `${description}`,
              image: `${image}`,
            }}>Read</Link></span>
        </h3>
      </div>
      <div>
        <div className="create-blog">
          <Link
            to={`/AddBlog`}
            state={{
              isUpdating: `${isUpdating}`,
              _id: `${_id}`,
              text: `${text}`,
              description: `${description}`,
              image: `${image}`,
            }}
          >
            Update Blog
          </Link>
        </div>
        <div className="create-blog" onClick={deleteTodo}>
          Delete Blog
        </div>
      </div>
    </div>
  );
}
export default Card;
