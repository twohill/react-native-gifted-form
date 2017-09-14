var createReactClass = require('create-react-class');
var {
  View
} = require('react-native')

var WidgetMixin = require('../mixins/WidgetMixin.js');


module.exports = createReactClass({
  mixins: [WidgetMixin],

  componentDidMount() {
    this._onChange(this.props.value);
  },
  
  getDefaultProps() {
    return {
      type: 'HiddenWidget',
    };
  },
  
  render() {
    return null;
  },

});
