import LogoMark from '../../public/BBLM_Mark.svg';
import {logoStyle} from './style'

export const Logo = () => (
  <LogoMark
    css={logoStyle}
    aria-hidden={true}
  />
)

export default Logo;