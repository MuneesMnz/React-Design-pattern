import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
display:flex;
`
const Pane=styled.div`
flex:${props=>props.weight};
`

// export const SplitScreen = ({left:Left,right:Right ,LeftWeight=1,RightWeight=1 })
export const Child = ({children,LeftWeight=1,RightWeight=1 }) => {

    const [left,right]=children
  return (
    <Container>
        <Pane weight={LeftWeight}>
            {left}
        </Pane>
        <Pane weight={RightWeight}>
            {right}
        </Pane>

    </Container>
  )
}
