// https://www.npmjs.com/package/react-responsive-carousel
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
class CoroComponent extends React.Component
let DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="img1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="img2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
               
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

