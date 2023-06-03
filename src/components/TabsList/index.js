import {Component} from 'react'
import './index.css'

class TabsList extends Component {
  render() {
    // const {eachTab, onTabIdChanged} = this.props
    const {eachTab, onTabIdChanged, activeButton} = this.props
    const {tabId, displayText} = eachTab
    const tabStyle = activeButton ? 'active-btn' : null
    const tabIdClicked = () => {
      onTabIdChanged(tabId)
    }

    return (
      <li>
        <button
          className={`tabs-button ${tabStyle}`}
          type="button"
          onClick={tabIdClicked}
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabsList
