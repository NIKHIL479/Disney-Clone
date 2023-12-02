import React from 'react'
import styled from 'styled-components'
export const Login = (props) => {
  return (
    <Container>
        <Content>
          <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' alt="image"  />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' />
          </CTA>
          <BgImage/></Content>
    </Container>
  )
}
const Container=styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`
const Content=styled.div`
margin-bottom: 10vh;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 80px 40px;
height: 100%;
`
const BgImage=styled.div`
height: 100%;
background-image: url("/images/login-background.jpg");
background-repeat: no-repeat;
background-position: top;
background-size: cover;
position: absolute;
top: 0;
left: 0;
right: 0;
`
const CTA=styled.div`
margin-bottom: 2vh;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-left: auto;
margin-right: auto;
z-index: 1;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%;
`
const CTALogoOne=styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
z-index: 1;
display: block;
width: 100%;
`
const SignUp=styled.a`
font-weight: bold;
color: #f9f9f9;
background-color:#0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
&:hover{
  background-color: #0483ee;
}
`
const Description=styled.p`
color: hsla(0,0%,95.3%,1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing:1.5px
`
const CTALogoTwo=styled.img`
max-width: 600px;
margin-bottom: 20px;
width: 100%;
`

export default Login
