'use strict';

import alt from 'components/Dispatcher';
import { <%= storeClass %> } from '<%= storePath %>';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('<%= storeClass %>', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, <%= storeClass %>);
  });
});
