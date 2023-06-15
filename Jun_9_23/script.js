function Person(age) {
    this.age = age;
  }
  
  Person.prototype.getAge = function () {
    console.log(this.age);
  };
  
  const one = new Person(10);
  // one.getAge();
  
  // Person.prototype.getAge = function () {};
  
  const nums = [3, 1, 56, 34, 23, 51, 3];
  
  Array.prototype.sort = function () {
    const sortedArray = timsort(this);
    return sortedArray[sortedArray.length - 2];
  };
  const secondLargest = nums.sort();
  console.log(secondLargest);
  
  function insertionSort(arr, start, end) {
    for (let i = start + 1; i <= end; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= start && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  }
  function merge(arr, left, mid, right) {
    let len1 = mid - left + 1;
    let len2 = right - mid;
  
    let leftArr = new Array(len1);
    let rightArr = new Array(len2);
  
    for (let i = 0; i < len1; i++) leftArr[i] = arr[left + i];
    for (let j = 0; j < len2; j++) rightArr[j] = arr[mid + 1 + j];
  
    let i = 0;
    let j = 0;
    let k = left;
  
    while (i < len1 && j < len2) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
    }
  
    while (i < len1) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }
  
    while (j < len2) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }
  
  function timsort(arr) {
    const minRun = 32;
    const n = arr.length;
  
    for (let i = 0; i < n; i += minRun) {
      insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
    }
  
    let size = minRun;
    while (size < n) {
      for (let left = 0; left < n; left += 2 * size) {
        let mid = left + size - 1;
        let right = Math.min(left + 2 * size - 1, n - 1);
        merge(arr, left, mid, right);
      }
      size *= 2;
    }
  
    return arr;
  }
  