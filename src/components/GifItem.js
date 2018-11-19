import React from 'react';

class GifItem extends React.Component{
  render() {
    return (
      <div className="gif-item">
        <img src={this.props.gif.images.downsized.url} alt="" onClick={() => this.props.onGifSelect(this.props.gif)} />
      </div>
    );
  }
}

export default GifItem;