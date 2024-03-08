const _ = require('lodash');
const { typeToTs } = require("./util/type-ts");
const { NameParser } = require('./util/name-parser');

class SchemaComponentsMap {
  _data = [];
  _response = [];
  config;
  nameParser;

  constructor(){
    this.nameParser = new NameParser();
  }

  clear() {
    this._data = [];
  }

  createRef = (paths) => {
    return ['#', ...paths].join('/');
  };

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

  createComponent($ref, rawTypeData) {
    const parsed = this.parseRef($ref);
    const pasedTypeName = this.replaceChactorRef(_.last(parsed));
    const typeName = this.parseComplexRef(pasedTypeName);

    if (this.isResponseRef(pasedTypeName)) {
      this._response.push({
        typeName: typeName,
        ...rawTypeData,
      });
      return null;
    } else {
      const componentName = _.nth(parsed, -2);
      const properties = [];

      const namesArray = typeName.includes('.')
        ? typeName.split('.')
        : [];
      const namespace = _.take(namesArray, namesArray.length - 1).join('.');
      if (rawTypeData?.properties) {
        _.each(rawTypeData.properties, (content, key) => {
          const meta = {
            key,
            value: '',
            ..._.pick(content, ['description', 'enum'])
          }

          if (content.hasOwnProperty('$ref')) {
            let normalizedRef = this.parseComplexRef(_.last(this.parseRef(content.$ref)));
            const namesJoin = normalizedRef.split('.').join('_');
            const value = this.parseComplexRef(namesJoin) || null;
            meta.value = typeToTs[value] || value;
          }
          if (content.hasOwnProperty('items') && !!content.items.$ref) {
            const ref_parsed = this.parseRef(content.items.$ref);
            const ref_name = this.replaceChactorRef(_.last(ref_parsed));
            const value = this.toName(this.parseComplexRef(ref_name));
            meta.value = typeToTs[value] || value;
          }
          if (content.hasOwnProperty('type')) {
            if (content.hasOwnProperty('enum')) {
              meta.value += content.enum.join('|');
            } else {
              meta.value += typeToTs[content.type];
            }
          }

          properties.push({ ...meta, value: meta.value || 'null' });
        })
      }

      const usageComponent = {
        $ref,
        typeName,
        name: this.parseComplexRef(namesArray.join('_') || typeName),
        namespace,
        ...rawTypeData,
        properties,
        componentName,
        typeData: null,
      };

      const refIndex = this._data.findIndex((c) => c.$ref === $ref);

      if (refIndex === -1) {
        this._data.push(usageComponent);
      } else {
        this._data[refIndex] = usageComponent;
      }

      return usageComponent;
    }

  }

  /**
   * @returns {SchemaComponent[]}
   */
  getComponents() {
    return this._data;
  }

  /**
   * @params {...string[]} componentNames
   * @returns {SchemaComponent[]}
   */
  filter(...componentNames) {
    return _.filter(this._data, (it) =>
      componentNames.some((componentName) =>
        _.startsWith(it.$ref, `#/components/${componentName}`),
      ),
    );
  }

  get($ref) {
    return this._data.find((c) => c.$ref === $ref) || null;
  }
}

module.exports = {
  SchemaComponentsMap,
};
