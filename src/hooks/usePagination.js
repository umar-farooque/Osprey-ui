import React from "react";
import slice from "lodash/slice";
import concat from "lodash/concat";

export default function usePagination(data, limit) {
  const [slicedArr, setSlicedArr] = React.useState(slice(data, 0, limit));
  const [index, setIndex] = React.useState(limit);

  const handleLoadMore = React.useCallback(() => {
    const newIndex = index + limit;
    const newList = concat(slicedArr, slice(data, index, newIndex));
    setSlicedArr(newList);
    setIndex(newIndex);
    // return setData((prevState) => prevState.concat(schools.slice(3)));
  }, [data, index, slicedArr, limit]);

  return { slicedArr, handleLoadMore };
}
