import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

class Home extends Component {
  state = {blogsData: [], isLoader: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      author: eachItem.author,
      avatarUrl: eachItem.avatarUrl,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: updatedData, isLoader: false})
  }

  render() {
    const {blogsData, isLoader} = this.state
    return (
      <div>
        <div>
          <UserInfo />
          <div>
            {isLoader ? (
              <div id="loader">
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={50}
                  width={50}
                />
              </div>
            ) : (
              <ul>
                {blogsData.map(eachItem => (
                  <BlogList key={eachItem.id} blogLog={eachItem} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
