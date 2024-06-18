import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import routes from '../routes';

const UiKit = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('uiKit.title');
  }, []);

  return (
    <div>
      <a href={routes.colorsAndTypes()}>{t('uiKit.pages.colorsAndTypes')}</a>
    </div>
  );
};

export default UiKit;
