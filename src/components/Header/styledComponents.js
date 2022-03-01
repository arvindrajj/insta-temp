import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  position: fixed;
  background-color: #ffffff;
  height: 64px;
`
export const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`

export const WebsiteLogoContainer = styled.div`
  height: 30px;
  width: 173px;
  @media all and (max-width: 380px) {
    height: 20px;
    width: 36px;
  }
`
