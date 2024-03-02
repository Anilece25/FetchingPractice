import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      author: data.author,
      avatarUrl: data.avatarUrl,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  itemBlog = () => {
    const {blogData} = this.state
    const {avatarUrl, author, imageUrl, content, title} = blogData
    return (
      <div>
        <img src={avatarUrl} alt={author} />
        <p>{author}</p>
        <img src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div id="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.itemBlog()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
