import {StatusBar, Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

let statusHeight = 0;
const androidStatusBarHeight = StatusBar.currentHeight;
const iosStatusBarHeight = getStatusBarHeight();
if (Platform.OS === 'ios') {
  statusHeight = iosStatusBarHeight;
}
if (Platform.OS === 'android') {
  statusHeight = androidStatusBarHeight;
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#EBE9E0',
  },
  floatingBtn: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: '#000000',
    elevation: 2,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
  },
  todoListItem: {
    height: 65,
    width: '84%',
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    shadowColor: '#000000',
    elevation: 2,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 4},
  },
  detailScreenTopBar: {
    height: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailScreenSmallBtn: {
    flex: 3,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailScreenTitle: {
    flex: 14,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailScreenImgViewWrapper: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  detailScreenImgView: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailScreenImg: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  threedotsModal: {
    height: 100,
    width: '35%',
    position: 'absolute',
    top: statusHeight + 60,
    right: 15,
  },
  threedotsModalItem: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  horizontalLine: {
    height: 0.5,
    backgroundColor: '#484848',
    width: '100%',
  },
  addTodoModal: keyboardHeight => ({
    backgroundColor: 'white',
    position: 'absolute',
    bottom: keyboardHeight,
  }),
  swipeLeftContent: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  swipeRightContent: {
    height: 60,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  greyOutView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  greyOutMemberList: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    height: statusHeight + 90,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  memberListViewWrapper: {
    height: 78,
    borderBottomWidth: 1,
    borderColor: '#484848',
    shadowColor: '#484848',
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.6,
    justifyContent: 'center',
    alignContent: 'center',
    zIndex: 2,
  },
  memberListView: {
    height: 78,
    flexGrow: 0,
  },
  memberListItem: {
    height: 78,
    width: 78,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberListImg: {
    width: 60,
    height: 60,
    borderRadius: 40,
    // zIndex: 2,
  },
  highlight: {
    backgroundColor: '#EBE9E0',
    height: 72,
    width: 72,
    position: 'absolute',
    borderRadius: 40,
    zIndex: 1,
    borderWidth: 3,
    borderColor: 'red',
  },
  unclickedMemberList: {
    height: 78,
    width: 78,
    backgroundColor: '#EBE9E0',
    opacity: 0.5,
    position: 'absolute',
  },
  entireScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
