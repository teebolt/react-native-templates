/**
 * React Native Template - Tabbed
 * https://github.com/teebolt/react-native-templates
 * @teebolt
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  Image,
  View
} from 'react-native';

var circle = 'data:image/png;base64,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';

var square = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABpCAYAAAA5gg06AAAAAXNSR0IArs4c6QAAAX9JREFUeAHt0wEJADEMxdDb+RdYNxtMxQKvCkLSv2Zmf+5pA//TdOCuAZECjyCSSAEDAURLEilgIIBoSSIFDAQQLUmkgIEAoiWJFDAQQLQkkQIGAoiWJFLAQADRkkQKGAggWpJIAQMBREsSKWAggGhJIgUMBBAtSaSAgQCiJYkUMBBAtCSRAgYCiJYkUsBAANGSRAoYCCBakkgBAwFESxIpYCCAaEkiBQwEEC1JpICBAKIliRQwEEC0JJECBgKIliRSwEAA0ZJEChgIIFqSSAEDAURLEilgIIBoSSIFDAQQLUmkgIEAoiWJFDAQQLQkkQIGAoiWJFLAQADRkkQKGAggWpJIAQMBREsSKWAggGhJIgUMBBAtSaSAgQCiJYkUMBBAtCSRAgYCiJYkUsBAANGSRAoYCCBakkgBAwFESxIpYCCAaEkiBQwEEC1JpICBAKIliRQwEEC0JJECBgKIliRSwEAA0ZJEChgIIFqSSAEDAURLEilgIIBoSSIFDAQQD7SpBFmXwT/JAAAAAElFTkSuQmCC';


class Tabbed extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'firstTab',
      displayName: 'TabBarExample'
    }
  }

  renderTabContent(color: string, pageText: string) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.headerText}>{pageText}</Text>
        <Text style={styles.descriptionText}>Views controlled by TabBarIOS</Text>
      </View>
    );
  }

  render() {

    return (
      <TabBarIOS
        tintColor="#0E68FF"
        translucent={true}>
        <TabBarIOS.Item
          title="First"
          icon={{uri: circle, scale: 5}}
          selected={this.state.selectedTab === 'firstTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'firstTab'
            });
          }}>
          {this.renderTabContent('#fff', 'First View')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={{uri: square, scale: 5}}
          title="Second"
          selected={this.state.selectedTab === 'secondTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'secondTab'
            });
          }}>
          {this.renderTabContent('#fff', 'Second View')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'black',
    margin: 50,
  },
  tabContent: {
    marginTop: 200
  },
  headerText: {
    fontSize: 42,
    textAlign: 'center'
  },
  descriptionText: {
    paddingTop: 50,
    fontSize: 20,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('Tabbed', () => Tabbed);
