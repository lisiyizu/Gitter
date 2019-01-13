import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import trendingAction from '../../actions/trending'

import './index.less'

class Index extends Component {

  config = {
    navigationBarTitleText: 'TRENDING'
  }

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount() {
    trendingAction.getReposTrendingList()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='content'>
        {
          this.props.repos.map((item, index) => {
            return <Text key={index}>{item.description}</Text>
          })
        }
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    repos: state.trending.repos,
    developers: state.trending.developers
  }
}
export default connect(mapStateToProps)(Index)
