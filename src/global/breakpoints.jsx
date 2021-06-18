import {css} from 'styled-components'
import media from './media';

export const GlobalWidth = css`
padding: 0 20px;
  ${media.tablet`
      width:720px;
  `};

  ${media.desktop`
      width:940px;
  `};

  ${media.widescreen`
      width:1140px;
  `};

  ${media.uhd`
      width:1980px;
  `};
`;