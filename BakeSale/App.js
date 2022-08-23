import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ajax from './components/ajax';
import DealList from './components/DealList';
import DealDetail from './components/DealDetail';

class App extends React.Component {
  state = {
    deals: [],
    currentDealId: null,
  };

  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({ deals });
  }

  setCurrentDealId = (dealId) => {
    this.setState({
      currentDealId: dealId,
    });
  };

  currentDeal = () => {
    return this.state.deals.find(
      (deal) => deal.key === this.state.currentDealId
    );
  };
  render() {
    if (this.state.currentDealId) {
      return <DealDetail initialDealData={this.currentDeal()} />;
    }
    if (this.state.deals.length > 0) {
      return (
        <DealList
          deals={this.state.deals}
          onItemPress={this.setCurrentDealId}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bakesel</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;
