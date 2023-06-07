// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left navbar-container">
              <h1 className="head">Left Navbar Menu</h1>
              <ul className="left-nav-unordered-list">
                <li className="each-list-item">Item 1</li>
                <li className="each-list-item">Item 2</li>
                <li className="each-list-item">Item 3</li>
                <li className="each-list-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h1 className="head">Content</h1>
              <p>
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right navbar-container ">
              <h1 className="head">Right Navbar</h1>
              <div>
                <div className="ad-container">
                  <p>Ad 1</p>
                </div>
                <div className="ad-container">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
