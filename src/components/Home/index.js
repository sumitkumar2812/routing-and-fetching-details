import './index.css'

import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import BlogItemDetails from '../BlogItemDetails'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList BlogItemDetails={BlogItemDetails} />
  </div>
)
export default Home
