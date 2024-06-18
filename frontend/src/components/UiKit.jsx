import * as _ from 'lodash';

import Logo from './Logo';

const UiKit = () => (
  <div>
    <Logo isColored={true} id={_.uniqueId()} />
    <Logo isSigned={true} id={_.uniqueId()} />
    <Logo isColored={true} isSigned={true} id={_.uniqueId()} />
    <Logo size='mid' isColored={true} isSigned={true} id={_.uniqueId()} />
  </div>
);

export default UiKit;
