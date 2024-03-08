const _ = require('lodash');

class NameParser {
  parseRef = (ref) => {
    return ref.split('/');
  };

  replaceChactorRef = (ref) => {
    return ref.replace('+', '_')
      .replace('-', '_');
  };

  parseComplexRef = (ref) => {
    let res = ref;
    if (this.isResponseRef(ref)) {
      res = _.first(_.first(_.last(ref.split('[[')).split(']]')).split(','));
    }
    return res;
  }
  isResponseRef = (ref) => {
    return ['[[', ']]', ','].every(c => ref.includes(c))
  }
  toName = (name) => {
    return name.split('.').join('_');
  }
}

module.exports = {
  NameParser,
};
