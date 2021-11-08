import { animated } from 'motion/react'
import styled from 'styled-components'

const Test = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: goldenrod;
`
function Grid() {
  return (
    <>
      <animated.div hover={{ scale: '1.2' }}>
        <Test></Test>
      </animated.div>
    </>
  )
}

export default Grid
