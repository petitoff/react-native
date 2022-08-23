import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ajax from './components/ajax';
import DealList from './components/DealList';
import DealDetail from './components/DealDetail';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    deals: [],
    dealsFromSearch: [],
    currentDealId: null,
  };

  async componentDidMount() {
    const deals = await ajax.fetchInitialDeals();
    this.setState({ deals });
  }

  searchDeals = async (searchTerm) => {
    let dealsFromSearch = [];
    if (searchTerm) {
      dealsFromSearch = await ajax.fetchDealsSearchResults(searchTerm);
    }
    this.setState({ dealsFromSearch });
  };

  setCurrentDealId = (dealId) => {
    this.setState({
      currentDealId: dealId,
    });
  };
  unSetCurrentDealId = () => {
    this.setState({
      currentDealId: null,
    });
  };

  currentDeal = () => {
    return this.state.deals.find(
      (deal) => deal.key === this.state.currentDealId
    );
  };
  render() {
    if (this.state.currentDealId) {
      return (
        <View style={styles.main}>
          <DealDetail
            initialDealData={this.currentDeal()}
            onBack={this.unSetCurrentDealId}
          />
        </View>
      );
    }
    
    const dealsToDisplay =
      this.state.dealsFromSearch.length > 0
        ? this.state.dealsFromSearch
        : this.state.deals;
    if (dealsToDisplay.length > 0) {
      return (
        <View style={[styles.container, styles.main]}>
          <SearchBar searchDeals={this.searchDeals} />
          <DealList
            deals={dealsToDisplay}
            onItemPress={this.setCurrentDealId}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Bake Sale</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 40,
  },
  header: {
    fontSize: 40,
  },
});

export default App;
