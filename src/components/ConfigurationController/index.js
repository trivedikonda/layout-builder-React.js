// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => onToggleShowContent()

      const onChangeLeftNavbarContent = () => onToggleShowLeftNavbar()

      const onChangeRightNavbarContent = () => onToggleShowRightNavbar()

      return (
        <div className="configuration-controller-container">
          <h1 className="main-heading">Layout</h1>
          <div>
            <div className="input-label-container">
              <input
                checked={showContent} // The checked attribute of input type checkbox
                type="checkbox"
                id="content"
                className="checkbox-input"
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label-name">
                Content
              </label>
            </div>
            <div className="input-label-container">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                id="leftNavbar"
                className="checkbox-input"
                onChange={onChangeLeftNavbarContent}
              />
              <label htmlFor="leftNavbar" className="label-name">
                Left Navbar
              </label>
            </div>
            <div className="input-label-container">
              <input
                checked={showRightNavbar}
                type="checkbox"
                id="rightNavbar"
                className="checkbox-input"
                onChange={onChangeRightNavbarContent}
              />
              <label htmlFor="rightNavbar" className="label-name">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
