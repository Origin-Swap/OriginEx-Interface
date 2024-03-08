import { Flex, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledFaqSection = styled(Flex)`
  position: relative;
`

export const StyledDetailsWrapper = styled.div`
  order: 1;
  margin-bottom: 40px;
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 2;
    margin-bottom: 0;
    margin-left: 40px;
  }
`

export const StyledLinkFAQs = styled(Text)`
  &:hover {
    text-decoration: underline;
  }
`
