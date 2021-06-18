import { css } from "styled-components"
const sizes = {
  uhd: 1980,
  widescreen: 1200,
  desktop: 1140,
  tablet: 720,
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

