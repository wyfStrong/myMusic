// 存取localStorage
class LocStorage {
  get(key) {
    let value = localStorage.getItem(key) || ''

    if (value.includes('[') || value.includes('{')) {
      value = JSON.parse(value)
    }
    return value;
  }

  set(key, value) {
    /* Object.prototype.toString.call(value) === '[object Object]'
    ({}).prototype.toString.call(value) === '[object Object]' */
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }
}

export default new LocStorage