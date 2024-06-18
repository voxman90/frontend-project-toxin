
import '../assets/css/Logo.scss';
import cn from 'classnames';

const PRIMARY_PALETTE   = ['#BC9CFF', '#8BA4F9'];
const AUXILIARY_PALLETE = ['#6FCF97', '#66D2EA'];
const TEXT_COLOR = '#1F2041';

const XMLNS = 'http://www.w3.org/2000/svg';

const LOGO_TEXT_WIDTH = 54;
const LOGO_TEXT_HEIGHT = 14;
const LOGO_TEXT_VIEW_BOX = `0 0 ${LOGO_TEXT_WIDTH} ${LOGO_TEXT_HEIGHT}`;

const logoSizes = {
  small: 'small',
  mid: 'mid',
};

const LinearGradient = ({ primaryTone, auxiliaryTone, id }) => (
  <defs>
    <linearGradient id={id} gradientTransform='rotate(90)'>
      <stop offset='0%' stopColor={primaryTone} />
      <stop offset='100%' stopColor={auxiliaryTone} />
    </linearGradient>
  </defs>
);

const LogoSvgFigure = ({
    isColored,
    width,
    height,
    viewBox,
    className,
    primaryTone,
    auxiliaryTone,
    d,
    id,
  }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns={XMLNS}
  >
    {
      (isColored)
        ? <LinearGradient primaryTone={primaryTone} auxiliaryTone={auxiliaryTone} id={id} />
        : null
    }
    <path
      d={d}
      fill={isColored ? `url(#${id})` : TEXT_COLOR}
      fillOpacity={isColored ? "1" : "0.25"}
    />
  </svg>
);

const LogoCircle = ({ isColored, id }) => (
  <LogoSvgFigure
    id={id}
    className={'logo__circle'}
    isColored={isColored}
    width="100%"
    height="100%"
    viewBox="0 0 48 48"
    primaryTone={PRIMARY_PALETTE[0]}
    auxiliaryTone={PRIMARY_PALETTE[1]}
    d="M24 48C10.7647 48 0 37.2353 0 24C0 10.7647 10.7647 0 24 0C37.2353 0 48 10.7647 48 24C48 37.2353 37.2353 48 24 48ZM24 2.82353C12.3176 2.82353 2.82353 12.3176 2.82353 24C2.82353 35.6824 12.3176 45.1765 24 45.1765C35.6824 45.1765 45.1765 35.6824 45.1765 24C45.1765 12.3176 35.6824 2.82353 24 2.82353Z"
  />
);

const LogoLeftBranch = ({ isColored, id }) => (
  <LogoSvgFigure
    id={id}
    className={'logo__left-branch'}
    isColored={isColored}
    width="31.25%"
    height="31.25%"
    viewBox="0 0 15 15"
    primaryTone={PRIMARY_PALETTE[0]}
    auxiliaryTone={PRIMARY_PALETTE[1]}
    d="M12.9989 14.4712C12.2224 14.4712 11.5871 13.8359 11.5871 13.0594C11.5871 7.6241 7.14003 3.17705 1.70473 3.17705C0.928263 3.17705 0.292969 2.54175 0.292969 1.76528C0.292969 0.98881 0.928263 0.353516 1.70473 0.353516C8.72826 0.353516 14.4106 6.03587 14.4106 13.0594C14.4106 13.8359 13.7753 14.4712 12.9989 14.4712Z"
  />
);

const LogoRightBranch = ({ isColored, id }) => (
  <LogoSvgFigure
    id={id}
    className={'logo__right-branch'}
    isColored={isColored}
    width="25%"
    height="16.66667%"
    viewBox="0 0 12 8"
    primaryTone={AUXILIARY_PALLETE[0]}
    auxiliaryTone={AUXILIARY_PALLETE[1]}
    d="M11.7068 1.76528C11.7068 2.54175 11.0715 3.17704 10.295 3.17704C6.9421 3.17704 3.9421 4.87116 2.17739 7.44763C1.78915 6.4594 1.33033 5.54175 0.765625 4.69469C3.09504 2.01234 6.51857 0.353516 10.295 0.353516C11.0715 0.353516 11.7068 0.98881 11.7068 1.76528Z"
  />
);

const LogoText = () => (
  <div className="logo__text">
    <svg
      width={LOGO_TEXT_WIDTH}
      height={LOGO_TEXT_HEIGHT}
      viewBox={LOGO_TEXT_VIEW_BOX}
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M10.335 0.368008C10.5567 0.368008 10.7375 0.443841 10.8775 0.595508C11.0292 0.735508 11.105 0.916341 11.105 1.13801C11.105 1.34801 11.0292 1.52884 10.8775 1.68051C10.7375 1.83217 10.5567 1.90801 10.335 1.90801H6.5725V12.408C6.5725 12.6297 6.49667 12.8163 6.345 12.968C6.205 13.108 6.02417 13.178 5.8025 13.178C5.5925 13.178 5.41167 13.108 5.26 12.968C5.10833 12.8163 5.0325 12.6297 5.0325 12.408V1.90801H1.27C1.06 1.90801 0.879167 1.83217 0.7275 1.68051C0.575833 1.52884 0.5 1.34801 0.5 1.13801C0.5 0.916341 0.575833 0.735508 0.7275 0.595508C0.879167 0.443841 1.06 0.368008 1.27 0.368008H10.335Z"
        fill={TEXT_COLOR}
      />
      <path
        d="M16.9076 0.368008C17.7943 0.368008 18.6285 0.537175 19.4101 0.875508C20.2034 1.21384 20.8918 1.67467 21.4751 2.25801C22.0701 2.84134 22.5368 3.52967 22.8751 4.32301C23.2134 5.10467 23.3826 5.93884 23.3826 6.82551C23.3826 7.86384 23.1609 8.82051 22.7176 9.69551C22.2743 10.5705 21.6735 11.3055 20.9151 11.9005C20.9151 11.9005 20.9035 11.9122 20.8801 11.9355C20.3201 12.3555 19.7076 12.688 19.0426 12.933C18.3776 13.1663 17.6659 13.283 16.9076 13.283C16.0209 13.283 15.1868 13.1138 14.4051 12.7755C13.6234 12.4372 12.9351 11.9763 12.3401 11.393C11.7568 10.8097 11.2959 10.1272 10.9576 9.34551C10.6193 8.56384 10.4501 7.72384 10.4501 6.82551C10.4501 5.84551 10.6484 4.94134 11.0451 4.11301C11.4418 3.27301 11.9843 2.55551 12.6726 1.96051L12.7426 1.89051C12.7543 1.89051 12.7718 1.87884 12.7951 1.85551C13.3551 1.38884 13.9851 1.02717 14.6851 0.770508C15.3851 0.502175 16.1259 0.368008 16.9076 0.368008ZM16.9076 11.743C17.3509 11.743 17.771 11.6905 18.1676 11.5855C18.576 11.4688 18.9609 11.3113 19.3226 11.113L13.1801 3.64051C12.8068 4.07217 12.5151 4.56217 12.3051 5.11051C12.0951 5.64717 11.9901 6.21884 11.9901 6.82551C11.9901 7.50217 12.1185 8.13801 12.3751 8.73301C12.6318 9.32801 12.9818 9.85301 13.4251 10.308C13.8801 10.7513 14.4051 11.1013 15.0001 11.358C15.5951 11.6147 16.2309 11.743 16.9076 11.743ZM20.5301 10.1505C20.9384 9.70717 21.2535 9.20551 21.4751 8.64551C21.7085 8.07384 21.8251 7.46718 21.8251 6.82551C21.8251 6.14884 21.6968 5.51301 21.4401 4.91801C21.1834 4.32301 20.8276 3.80384 20.3726 3.36051C19.9293 2.90551 19.4101 2.54967 18.8151 2.29301C18.2201 2.03634 17.5843 1.90801 16.9076 1.90801C16.4409 1.90801 15.9918 1.97217 15.5601 2.10051C15.1284 2.21717 14.7259 2.39217 14.3526 2.62551L20.5301 10.1505Z"
        fill={TEXT_COLOR}
      />
      <path
        d="M30.351 7.63051C30.1177 7.63051 29.9194 7.53717 29.756 7.35051L25.2585 1.57551C25.1302 1.41218 25.0777 1.23134 25.101 1.03301C25.1244 0.823008 25.2177 0.653842 25.381 0.525508C25.5444 0.397175 25.7252 0.350508 25.9235 0.385508C26.1335 0.408841 26.3027 0.502174 26.431 0.665508L30.351 5.67051L34.1835 0.753008C34.3119 0.589674 34.4752 0.496341 34.6735 0.473008C34.8835 0.449675 35.0702 0.502175 35.2335 0.630508C35.3969 0.758841 35.4902 0.928008 35.5135 1.13801C35.5369 1.33634 35.4844 1.51717 35.356 1.68051L30.946 7.35051C30.7944 7.53717 30.596 7.63051 30.351 7.63051ZM35.2685 13.2655C35.2219 13.2655 35.146 13.2597 35.041 13.248C34.9477 13.2363 34.8369 13.2072 34.7085 13.1605C34.5802 13.1022 34.4402 13.0263 34.2885 12.933C34.1485 12.828 34.0085 12.688 33.8685 12.513L30.351 7.98051L26.5185 12.9155C26.3902 13.0788 26.221 13.1722 26.011 13.1955C25.8127 13.2188 25.6319 13.1663 25.4685 13.038C25.3052 12.9097 25.2119 12.7463 25.1885 12.548C25.1652 12.338 25.2177 12.1513 25.346 11.988L29.756 6.31801C29.896 6.13134 30.0885 6.03801 30.3335 6.03801C30.5902 6.03801 30.7944 6.13134 30.946 6.31801L35.041 11.568C35.0994 11.6497 35.1519 11.7022 35.1985 11.7255C35.2452 11.7488 35.2802 11.7663 35.3035 11.778C35.5019 11.778 35.6652 11.848 35.7935 11.988C35.9335 12.1163 36.0094 12.2797 36.021 12.478C36.0444 12.688 35.986 12.8688 35.846 13.0205C35.706 13.1722 35.531 13.2538 35.321 13.2655H35.2685Z"
        fill={TEXT_COLOR}
      />
      <path
        d="M39.7343 13.2655C39.5126 13.2655 39.326 13.1897 39.1743 13.038C39.0226 12.8863 38.9468 12.6997 38.9468 12.478V1.10301C38.9468 0.893008 39.0226 0.712175 39.1743 0.560508C39.326 0.408841 39.5126 0.333008 39.7343 0.333008C39.9443 0.333008 40.1251 0.408841 40.2768 0.560508C40.4285 0.712175 40.5043 0.893008 40.5043 1.10301V12.478C40.5043 12.6997 40.4285 12.8863 40.2768 13.038C40.1251 13.1897 39.9443 13.2655 39.7343 13.2655Z"
        fill={TEXT_COLOR}
      />
      <path
        d="M52.9377 13.2305C52.681 13.2305 52.4827 13.1313 52.3427 12.933L45.0452 3.34301V12.478C45.0452 12.688 44.9693 12.8688 44.8177 13.0205C44.6777 13.1605 44.5027 13.2305 44.2927 13.2305C44.0943 13.2305 43.9193 13.1605 43.7677 13.0205C43.616 12.8688 43.5402 12.688 43.5402 12.478V1.12051C43.5402 0.957175 43.5868 0.811342 43.6802 0.683009C43.7735 0.554675 43.9018 0.467174 44.0652 0.420508C44.2168 0.362174 44.3685 0.356341 44.5202 0.403008C44.6718 0.449675 44.8002 0.537175 44.9052 0.665508L52.1852 10.273V1.12051C52.1852 0.922174 52.2552 0.747174 52.3952 0.595508C52.5468 0.443841 52.7277 0.368008 52.9377 0.368008C53.1477 0.368008 53.3227 0.443841 53.4627 0.595508C53.6143 0.747174 53.6902 0.922174 53.6902 1.12051V12.478C53.6902 12.6413 53.6435 12.7872 53.5502 12.9155C53.4568 13.0438 53.3343 13.1372 53.1827 13.1955C53.066 13.2188 52.9843 13.2305 52.9377 13.2305Z"
        fill={TEXT_COLOR}
      />
    </svg>
  </div>
);

const Logo = ({
  size = logoSizes.small,
  isColored,
  isSigned,
  id,
}) => {
  console.log(isColored)

  const logoClassName = cn('logo', {
    'logo_colored': isColored,
  });

  const logoContainerClassName = cn('logo__container', {
    'logo__container_size_2.5rem': (size === logoSizes.small),
    'logo__container_size_3rem': (size === logoSizes.mid),
  });

  return (
    <div className={logoClassName} aria-label="TOXIN hotel logo">
      <div className={logoContainerClassName}>
        <LogoCircle isColored={isColored} id={`${id}0`} />
        <LogoLeftBranch isColored={isColored} id={`${id}1`} />
        <LogoRightBranch isColored={isColored} id={`${id}2`} />
      </div>
      { (isSigned) ? <LogoText /> : null }
    </div>
  );
};

export default Logo;
