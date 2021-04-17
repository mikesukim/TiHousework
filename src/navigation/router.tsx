/**
 * Defined application routes over here
 * Good place to define some commonly used methods like
 *          `popToScreen`, `dismissModal`...
 */
import {Navigation} from 'react-native-navigation';

interface Screen {
  componentId: string;
  screen: string;
  passProps?: object;
}

/**
 * Router method to show a screen by pushing on top of current stack
 * @param {object} params i.e {componentId is compulsory, passProps is optional},
 */
const showPushScreen = ({
  componentId,
  screen,
  passProps = {},
}: Screen): void => {
  Navigation.push(componentId, {
    component: {
      name: screen,
      passProps: {
        ...passProps,
      },
      options: {
        topBar: {
          visible: true,
        },
      },
    },
  });
};

const popToScreen = (componentId: string): void => {
  Navigation.popTo(componentId);
};

const dismissModal = (componentId: string): void => {
  Navigation.dismissModal(componentId);
};

const pop = ({componentId}: Screen): void => {
  Navigation.pop(componentId);
};

const popToRoot = ({componentId}: Screen): void => {
  Navigation.popToRoot(componentId);
};

const ROUTER = {
  showPushScreen,
  popToScreen,
  dismissModal,
  pop,
  popToRoot,
};

export default ROUTER;
