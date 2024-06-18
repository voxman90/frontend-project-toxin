import '../assets/css/ColorsAndTypes.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import Logo, { logoSizes } from './Logo';

const sampleData = {
  colors: [
    { name: 'dark-shade-100', code: '#1F2041', key: 1 },
    { name: 'dark-shade-75', code: '#1F2041', key: 2 },
    { name: 'dark-shade-50', code: '#1F2041', key: 3 },
    { name: 'dark-shade-25', code: '#1F2041', key: 4 },
    { name: 'dark-shade-05', code: '#1F2041', key: 5 },
    { name: 'purple', code: '#BC9CFF', key: 6 },
    { name: 'green', code: '#6FCF97', key: 7 },
  ],
  types: [
    { name: 'h1', label: 'H1', key: 1 },
    { name: 'widget', label: 'H2', key: 2 },
    { name: 'label', label: 'H3', key: 3 },
    { name: 'p', label: 'Body', ket: 4 },
  ],
};

const ColorSample = ({ colorData, t }) => {
  const { code, name } = colorData;

  const sampleClassName = cn(
    'colors__sample',
    `colors__sample_color_${name}`,
  );

  return (
    <div className="colors__color">
      <div className={sampleClassName} />
      <div className="colors__descr">
        {t(`colorsAndTypes.colors.${name}`)}
        <br />
        <span className="colors__code">{code}</span>
      </div>
    </div>
  );
};

const TypeSample = ({ typeData, t }) => {
  const { name, label } = typeData;

  const labelClassName = cn(
    'types__label',
    `types__label_type_${name}`,
  );

  const textClassName = cn(
    'types__text',
    `types__text_type_${name}`,
  );

  return (
    <div className="types__type">
      <span className={labelClassName}>{label}</span>
      <span className={textClassName}>
        {t(`colorsAndTypes.types.${name}`)}
      </span>
    </div>
  );
};

const ColorsAndTypes = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('colorsAndTypes.title');
  }, []);

  return (
    <div className="colors-and-types">
      <div className="colors-and-types__logo">
        <Logo size={logoSizes.mid} />
      </div>
      <div className="colors-and-types__grid">
        <div className="colors">
          {
            sampleData.colors.map((data) => (
              <ColorSample key={data.key} colorData={data} t={t} />
            ))
          }
        </div>
        <div className="types">
          {
            sampleData.types.map((data) => (
              <TypeSample key={data.key} typeData={data} t={t} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ColorsAndTypes;
