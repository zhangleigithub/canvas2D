/**
 * Canvas-CanvasRenderingContext2D对象扩展原型方法
 * 
 * lineEx 绘制直线
 * strokeLinesEx 绘制线段
 * strokeRectEx 绘制矩形
 * strokeEllipseEx 绘制椭圆
 * strokePieEx 绘制扇形
 * strokeClosedPathEx 绘制闭合路径
 * strokeTextEx 绘制文本
 * strokeTextRectEx 矩形区域上绘制文本
 * 
 * fillRectEx 填充矩形
 * fillEllipseEx 填充椭圆
 * fillPieEx 填充扇形
 * fillClosedPathEx 填充闭合路径
 * fillTextEx 填充文本
 * fillTextRectEx 矩形区域上填充文本
 */

//绘制直线
if (typeof CanvasRenderingContext2D.prototype.strokeLineEx === 'undefined') {
    /**
     * 绘制直线
     * @param {object} color 
     * @param {number} x1
     * @param {number} y1
     * @param {number} x2
     * @param {number} y2
     */
    CanvasRenderingContext2D.prototype.strokeLineEx = function (color, x1, y1, x2, y2) {
        var crc = this;
        crc.strokeStyle = color;
        crc.moveTo(x1, y1);
        crc.lineTo(x2, y2);
        crc.stroke();
        return crc;
    }
}

//绘制线段
if (typeof CanvasRenderingContext2D.prototype.strokeLinesEx === 'undefined') {
    /**
     * 绘制线段
     * @param {object} color 
     * @param {Array} points
     */
    CanvasRenderingContext2D.prototype.strokeLinesEx = function (color, points = []) {
        var crc = this;
        crc.strokeStyle = color;
        crc.beginPath();
        for (let index = 0; index < points.length; index++) {
            const element = points[index];

            if (index === 0) {
                crc.moveTo(element.x, element.y);
            } else {
                crc.lineTo(element.x, element.y);
            }
        }
        crc.stroke();
        return crc;
    }
}

//绘制矩形
if (typeof CanvasRenderingContext2D.prototype.strokeRectEx === 'undefined') {
    /**
     * 绘制矩形
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    CanvasRenderingContext2D.prototype.strokeRectEx = function (color, x, y, width, height) {
        var crc = this;
        crc.strokeStyle = color;
        crc.strokeRect(x, y, width, height);
        return crc;
    }
}

//绘制椭圆
if (typeof CanvasRenderingContext2D.prototype.strokeEllipseEx === 'undefined') {
    /**
     * 绘制椭圆
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    CanvasRenderingContext2D.prototype.strokeEllipseEx = function (color, x, y, width, height) {
        var crc = this;
        crc.strokeStyle = color;
        let centerX = x + width / 2;
        let centerY = y + height / 2;
        let radiusX = width / 2;
        let radiusY = height / 2;
        crc.beginPath();
        crc.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
        crc.closePath();
        crc.stroke();
        return crc;
    }
}

//绘制扇形
if (typeof CanvasRenderingContext2D.prototype.strokePieEx === 'undefined') {
    /**
     * 绘制扇形
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {number} beginAngle 0-360
     * @param {number} endAngle 0-360
     */
    CanvasRenderingContext2D.prototype.strokePieEx = function (color, x, y, radius, beginAngle, endAngle) {
        var crc = this;
        crc.save();
        crc.strokeStyle = color;
        crc.beginPath();
        crc.moveTo(x, y);
        crc.arc(x, y, radius, beginAngle * Math.PI / 180, endAngle * Math.PI / 180);
        crc.closePath();
        crc.restore();
        crc.stroke();
        return crc;
    }
}

//绘制闭合路径
if (typeof CanvasRenderingContext2D.prototype.strokeClosedPathEx === 'undefined') {
    /**
     * 绘制线段
     * @param {object} color 
     * @param {Array} points
     */
    CanvasRenderingContext2D.prototype.strokeClosedPathEx = function (color, points = []) {
        var crc = this;
        crc.strokeStyle = color;
        crc.beginPath();
        for (let index = 0; index < points.length; index++) {
            const element = points[index];

            if (index === 0) {
                crc.moveTo(element.x, element.y);
            } else {
                crc.lineTo(element.x, element.y);
            }
        }
        crc.closePath();
        crc.stroke();
        return crc;
    }
}

//画布上绘制文本
if (typeof CanvasRenderingContext2D.prototype.strokeTextEx === 'undefined') {
    /**
     * 画布上写文本
     * @param {object} text
     * @param {object} font
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {object} format
     * { 
     *    horizontal="center|end|left|right|start", 
     *    vertical="alphabetic|top|hanging|middle|ideographic|bottom"
     * }
     * @param {number} maxWidth 可选
     */
    CanvasRenderingContext2D.prototype.strokeTextEx = function (text, font, color, x, y, format = { horizontal: 'start', vertical: 'alphabetic' }, maxWidth = undefined) {
        var crc = this;
        crc.font = font;
        crc.strokeStyle = color;
        crc.textAlign = format.horizontal;
        crc.textBaseline = format.vertical;
        if (maxWidth === undefined) {
            crc.strokeText(text, x, y);
        } else {
            crc.strokeText(text, x, y, maxWidth);
        }
        return crc;
    }
}

//画布矩形区域上绘制文本
if (typeof CanvasRenderingContext2D.prototype.strokeTextRectEx === 'undefined') {
    /**
     * 画布上写文本
     * @param {object} text
     * @param {object} font
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} format
     * { 
     *    horizontal="center|end|left|right|start", 
     *    vertical="alphabetic|top|hanging|middle|ideographic|bottom",
     *    textFormatFlags="fitBlackBox|clip|noClip"
     * }
     */
    CanvasRenderingContext2D.prototype.strokeTextRectEx = function (text, font, color, x, y, width, height, format = { horizontal: 'start', vertical: 'alphabetic', textFormatFlags: 'FitBlackBox' }) {
        var crc = this;
        crc.font = font;
        crc.strokeStyle = color;
        crc.textAlign = format.horizontal;
        crc.textBaseline = format.vertical;
        let offsetX = 0;
        let offsetY = 0;

        //水平方向
        if (format.horizontal === 'start' || format.horizontal === 'left') {
            offsetX = x;
        }
        else if (format.horizontal === 'end' || format.horizontal === 'right') {
            offsetX = x + width;
        }
        else if (format.horizontal === 'center') {
            offsetX = x + width / 2;
        }

        //垂直方向
        if (format.vertical === 'top' || format.vertical === 'hanging') {
            offsetY = y;
        }
        else if (format.vertical === 'bottom' || format.vertical === 'alphabetic' || format.vertical === 'ideographic') {
            offsetY = y + height;
        }
        else if (format.vertical === 'middle') {
            offsetY = y + height / 2;
        }

        //文本格式
        if (format.textFormatFlags === 'fitBlackBox') {
            crc.strokeText(text, offsetX, offsetY, width);
        }
        else if (format.textFormatFlags === 'clip') {
            crc.save();
            crc.rect(x, y, width, height);
            crc.clip();
            crc.strokeText(text, offsetX, offsetY);
            crc.restore();
        }
        else if (format.textFormatFlags === 'noClip') {
            crc.strokeText(text, offsetX, offsetY);
        }

        return crc;
    }
}

//填充矩形
if (typeof CanvasRenderingContext2D.prototype.fillRectEx === 'undefined') {
    /**
     * 填充矩形
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    CanvasRenderingContext2D.prototype.fillRectEx = function (color, x, y, width, height) {
        var crc = this;
        crc.fillStyle = color;
        crc.fillRect(x, y, width, height);
        return crc;
    }
}

//填充椭圆
if (typeof CanvasRenderingContext2D.prototype.fillEllipseEx === 'undefined') {
    /**
     * 填充椭圆
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    CanvasRenderingContext2D.prototype.fillEllipseEx = function (color, x, y, width, height) {
        var crc = this;
        crc.fillStyle = color;
        let centerX = x + width / 2;
        let centerY = y + height / 2;
        let radiusX = width / 2;
        let radiusY = height / 2;
        crc.beginPath();
        crc.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
        crc.closePath();
        crc.fill();
        return crc;
    }
}

//填充扇形
if (typeof CanvasRenderingContext2D.prototype.fillPieEx === 'undefined') {
    /**
     * 填充扇形
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {number} beginAngle 0-360
     * @param {number} endAngle 0-360
     */
    CanvasRenderingContext2D.prototype.fillPieEx = function (color, x, y, radius, beginAngle, endAngle) {
        var crc = this;
        crc.save();
        crc.strokeStyle = color;
        crc.beginPath();
        crc.moveTo(x, y);
        crc.arc(x, y, radius, beginAngle * Math.PI / 180, endAngle * Math.PI / 180);
        crc.closePath();
        crc.restore();
        crc.stroke();
        crc.fill();
        return crc;
    }
}

//填充闭合路径
if (typeof CanvasRenderingContext2D.prototype.fillClosedPathEx === 'undefined') {
    /**
     * 绘制线段
     * @param {object} color 
     * @param {Array} points
     */
    CanvasRenderingContext2D.prototype.fillClosedPathEx = function (color, points = []) {
        var crc = this;
        crc.fillStyle = color;
        crc.beginPath();
        for (let index = 0; index < points.length; index++) {
            const element = points[index];

            if (index === 0) {
                crc.moveTo(element.x, element.y);
            } else {
                crc.lineTo(element.x, element.y);
            }
        }
        crc.closePath();
        crc.fill();
        return crc;
    }
}

//画布上填充文本
if (typeof CanvasRenderingContext2D.prototype.fillTextEx === 'undefined') {
    /**
     * 画布上填充文本
     * @param {object} text
     * @param {object} font
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {object} format
     * { 
     *    horizontal="center|end|left|right|start", 
     *    vertical="alphabetic|top|hanging|middle|ideographic|bottom"
     * }
     * @param {number} maxWidth 可选
     */
    CanvasRenderingContext2D.prototype.fillTextEx = function (text, font, color, x, y, format = { horizontal: 'start', vertical: 'alphabetic' }, maxWidth = undefined) {
        var crc = this;
        crc.font = font;
        crc.fillStyle = color;
        crc.textAlign = format.horizontal;
        crc.textBaseline = format.vertical;
        if (maxWidth === undefined) {
            crc.fillText(text, x, y);
        } else {
            crc.fillText(text, x, y, maxWidth);
        }
        return crc;
    }
}

//画布矩形区域上填充文本
if (typeof CanvasRenderingContext2D.prototype.fillTextRectEx === 'undefined') {
    /**
     * 画布矩形区域上填充文本
     * @param {object} text
     * @param {object} font
     * @param {object} color 
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} format
     * { 
     *    horizontal="center|end|left|right|start", 
     *    vertical="alphabetic|top|hanging|middle|ideographic|bottom",
     *    textFormatFlags="fitBlackBox|clip|noClip"
     * }
     */
    CanvasRenderingContext2D.prototype.fillTextRectEx = function (text, font, color, x, y, width, height, format = { horizontal: 'start', vertical: 'alphabetic', textFormatFlags: 'FitBlackBox' }) {
        var crc = this;
        crc.font = font;
        crc.fillStyle = color;
        crc.textAlign = format.horizontal;
        crc.textBaseline = format.vertical;
        let offsetX = 0;
        let offsetY = 0;

        //水平方向
        if (format.horizontal === 'start' || format.horizontal === 'left') {
            offsetX = x;
        }
        else if (format.horizontal === 'end' || format.horizontal === 'right') {
            offsetX = x + width;
        }
        else if (format.horizontal === 'center') {
            offsetX = x + width / 2;
        }

        //垂直方向
        if (format.vertical === 'top' || format.vertical === 'hanging') {
            offsetY = y;
        }
        else if (format.vertical === 'bottom' || format.vertical === 'alphabetic' || format.vertical === 'ideographic') {
            offsetY = y + height;
        }
        else if (format.vertical === 'middle') {
            offsetY = y + height / 2;
        }

        //文本格式
        if (format.textFormatFlags === 'fitBlackBox') {
            crc.fillText(text, offsetX, offsetY, width);
        }
        else if (format.textFormatFlags === 'clip') {
            crc.save();
            crc.rect(x, y, width, height);
            crc.clip();
            crc.fillText(text, offsetX, offsetY);
            crc.restore();
        }
        else if (format.textFormatFlags === 'noClip') {
            crc.fillText(text, offsetX, offsetY);
        }

        return crc;
    }
}