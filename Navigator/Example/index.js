import { createAppContainer } from 'react-navigation'

import { createStackShared } from '../Transitioner'
import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'

const StackShare = createStackShared({
  Screen1,
  Screen2,
})

export default createAppContainer(StackShare)
