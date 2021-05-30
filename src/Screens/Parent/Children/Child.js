import React from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import Style from './style';
const Child = props => {
  const {
    item: {
      item: {children, count, name, showChildren, status},
      index,
    },
    updateCounter,
    toggleChild,
  } = props;
  const renderItem = (item, index) => (
    <CellView item={item} updateCounterByChild={updateCounter} />
  );

  const CellView = ({item: {item}, updateCounterByChild}) => {
    const counterAction = () => {
      updateCounterByChild(index);
    };
    const {name} = item;
    if (!showChildren) {
      return null;
    }
    return (
      <TouchableOpacity style={Style.childButton} onPress={counterAction}>
        <Text style={Style.incrementButton}>Inc by {name}</Text>
      </TouchableOpacity>
    );
  };
  const togglechildAction = () => {
    toggleChild(index);
  };
  return (
    <View Style={Style.childView}>
      <TouchableOpacity onPress={togglechildAction} style={Style.counterView}>
        <Text>
          {count} {name} {status}
        </Text>
      </TouchableOpacity>
      <FlatList
        style={Style.flatList}
        data={children}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Child;
