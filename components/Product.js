const React = require('react');


class Product extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark? 'yes':'no'}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf(range(80, 300)).isRequired

}

function range(start, end){
  var array = []
  for(var i = start; i <= end; i++){
    array.push(i);
  }
  return array;
};

module.exports = Product;
