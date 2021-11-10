import styled from "styled-components"
import img from "../public/images/IMG_1778.jpeg"

const ResourseStack = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "stack";
  place-items: center;
  background-color: var(--pinkish);
  background-image: url(${img});
  height: 240px;
  width: 180px;
  border-radius: 8px;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`

const Resourse = styled.p`
  display: inline-block;
  text-align: center;
  grid-area: stack;
  color: var(--yellow);
  font-weight: bolder;
  font-size: 1.75rem;
`
const ResoursesBorder = styled.div`
  position: absolute;
  top: 0;
  left: -2px;
  background-color: transparent;
  border: solid 2px goldenrod;
  border-radius: 8px;
  height: 240px;
  width: 180px;
  transform: rotate(351deg);
`

function Resoures({ children }) {
  return (
    <>
      <ResourseStack>
        <Resourse>{children}</Resourse>
        <ResoursesBorder />
      </ResourseStack>
    </>
  )
}

export default Resoures
