import React from 'react';
import './CanvasExtension';

class DrawDemo extends React.Component {

    constructor(props) {
        super(props);

        this.onWindowResize = this.onWindowResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize)
        this.onWindowResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize)
    }

    onWindowResize() {
        var canvas = document.getElementById("canvas1");
        canvas.width = canvas.parentNode.offsetWidth;
        canvas.height = canvas.parentNode.offsetHeight;
        var ctx = canvas.getContext("2d");

        ctx.fillRectEx('Black', 0, 0, canvas.width, canvas.height);

        ctx.strokeLineEx('#FF0000', 0, 0, 800, 600);
        let points = [{ x: 150, y: 300 }, { x: 200, y: 350 }, { x: 250, y: 200 }, { x: 300, y: 350 }, { x: 350, y: 300 }];
        ctx.strokeLinesEx('#FF0000', points);
        ctx.strokeRectEx('#FF0000', 150, 75, 150, 75);
        ctx.strokeEllipseEx('#FF0000', 0, 300, 150, 150);
        ctx.strokePieEx('#FF0000', 200, 500, 100, 0, 90);
        let points1 = [{ x: 150, y: 400 }, { x: 200, y: 450 }, { x: 250, y: 400 }, { x: 300, y: 450 }, { x: 350, y: 400 }];
        ctx.strokeClosedPathEx('#FF0000', points1);
        ctx.strokeTextEx('Hello World!', '30px Verdana', '#FF0000', 240, 240);
        ctx.strokeLineEx('#FF0000', 240, 240, 800, 240);

        ctx.fillTextRectEx('Hello World!', '30px Verdana', '#FF0000', 600, 600, 100, 100,{ horizontal: 'center', vertical: 'middle',textFormatFlags:'clip' });
        ctx.strokeRectEx('#FF0000', 600, 600, 100, 100);

        ctx.fillRectEx('#FF0000', 0, 0, 150, 75);
        ctx.fillEllipseEx('#FF0000', 0, 500, 150, 120);
        ctx.fillPieEx('#FF0000', 500, 500, 100, 0, 90);
        ctx.fillClosedPathEx('#FF0000', points1);
    }

    /**
     * render
     */
    render() {

        return (
            <div style={{ width: '100%', height: '100%' }}>
                <canvas id="canvas1" width="100" height="100"></canvas>
            </div>
        )
    };
}

export default DrawDemo;