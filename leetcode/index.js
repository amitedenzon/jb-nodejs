var RandomizedSet = function () {
  let set = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (set.has(val)) return true;

  set.add(val);
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!set.has(val)) return false;

  set.remove(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
