import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Child from './Children/Child';
import Style from './style';
const Parent = ({navigation}) => {
  const [parents, setParents] = useState([
    {
      showChildren: true,
      count: 0,
      name: 'a',
      status: 'hide',
      children: [{name: 'a1'}, {name: 'a2'}, {name: 'a3'}],
    },
    {
      showChildren: true,
      count: 0,
      name: 'b',
      status: 'hide',
      children: [{name: 'b1'}, {name: 'b2'}, {name: 'b3'}],
    },
    {
      showChildren: true,
      count: 0,
      name: 'c',
      status: 'hide',
      children: [{name: 'c1'}, {name: 'c2'}, {name: 'c3'}],
    },
  ]);

  const updateCounter = index => {
    const parentsCopy = [...parents];
    parentsCopy[index].count++;
    setParents(parentsCopy);
  };

  const toggleChild = index => {
    const parentsCopy = [...parents];
    parentsCopy[index].showChildren = !parentsCopy[index].showChildren;
    parentsCopy[index].status = parentsCopy[index].showChildren
      ? 'hide'
      : 'show';
    setParents(parentsCopy);
    console.log({parentsCopy});
  };
  const renderItem = (item, index) => (
    <Child
      item={item}
      updateCounter={updateCounter}
      index={index}
      toggleChild={toggleChild}
    />
  );

  return (
    <View style={Style.container}>
      <FlatList style={Style.flatList} data={parents} renderItem={renderItem} />
    </View>
  );
};

export default Parent;
