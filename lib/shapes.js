class Shape {
    constructor() {
        this.color = '';
        this.text = '';
        this.textColor = '';
    } 
    setColor(color) {
        this.color = color;
    }
    
    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    render() {
        // render method in child classes
    }
}

class Circle extends Shape {
    render() {
        return `<svg width="300" height="200">
            <circle cx="25" cy="75" r="25" fill="${this.color}" />
            <text x="12" y="80" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg width="300" height="200">
            <rect x="10" y="10" width="40" height="40" fill="${this.color}"/>
            <text x="15" y="35" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

class Triangle extends Shape{
    render() {
        return `<svg width="300" height="200">
            <polygon points="66.67, 8 108.45, 80.89 24.89, 80.89" fill="${this.color}" />
            <text x="50" y="60" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}

const shapes = { Circle, Square, Triangle };

module.exports = shapes;