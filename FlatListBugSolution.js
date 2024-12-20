This solution uses pagination to improve performance. Instead of rendering all items at once, this approach fetches and renders items in batches, making the rendering process more efficient.  
```javascript
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => `Item ${i}`); // Large dataset

const Item = ({ item }) => (
  <View style={{ height: 50, justifyContent: 'center', padding: 10 }}>
    <Text>{item}</Text>
  </View>
);

const FlatListPagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newData = DATA.slice((page - 1) * itemsPerPage, page * itemsPerPage);
      setData(prevData => [...prevData, ...newData]);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5} // Adjust threshold as needed
        ListFooterComponent={loading && <Text>Loading...</Text>}
      />
    </View>
  );
};

export default FlatListPagination;
```