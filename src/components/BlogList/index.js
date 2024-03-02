import {Link} from 'react-router-dom'
import './index.css'

const BlogList = props => {
  const {blogLog} = props
  const {id, title, imageUrl, author, avatarUrl, topic} = blogLog
  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div className="blog-cont">
          <div>
            <img src={imageUrl} alt={title} className="img1" />
          </div>
          <div>
            <div>
              <img src={avatarUrl} alt={author} />
              <p>{author}</p>
            </div>
            <h1>{title}</h1>
            <h1>{topic}</h1>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogList
