// loglux.js

export class LogLuxClass {
    constructor(message = '', style = '') {
        this.logMessage = '';
        this.css = '';
        this.isLogged = false;

        if (typeof message === 'string') {
            this.logMessage = message;
            this.initialStyle = style;
        } else if (typeof message === 'object' && message !== null) {
            this.logMessage = message.log || '';
            this.initialStyle = message.style || '';
        }

        if (this.initialStyle) {
            this._applyStyles(this.initialStyle);
        }
    }

    _applyStyles(styleString) {
        const logStyle = styleString.toLowerCase().split(' ');
        this.css = '';

        for (let i = 0; i < logStyle.length; i++) {
            switch (logStyle[i]) {
                case 'bold':
                    this.css += 'font-weight: bold; ';
                    break;
                case 'italic':
                    this.css += 'font-style: italic; ';
                    break;
                case 'underline':
                    this.css += 'text-decoration: underline; ';
                    break;
                case 'red':
                    this.css += 'color: red; ';
                    break;
                case 'green':
                    this.css += 'color: green; ';
                    break;
                case 'blue':
                    this.css += 'color: blue; ';
                    break;
                case 'yellow':
                    this.css += 'color: yellow; ';
                    break;
                case 'bg-black':
                    this.css += 'background-color: black; ';
                    break;
                case 'bg-white':
                    this.css += 'background-color: white; ';
                    break;
                case 'bg-red':
                    this.css += 'background-color: red; ';
                    break;
                case 'bg-green':
                    this.css += 'background-color: green; ';
                    break;
                case 'bg-blue':
                    this.css += 'background-color: blue; ';
                    break;
                case 'bg-yellow':
                    this.css += 'background-color: yellow; ';
                    break;
                case 'title':
                    this.css += 'font-size: 20px; font-weight: bold; ';
                    break;
                case 'credit':
                    this.css += 'font-size: 12px; font-style: italic; ';
                    break;
                default:
                    break;
            }
        }
    }

    style(styleString) {
        this._applyStyles(styleString);
        return this;
    }

    show(message = this.logMessage) {
        if (this.isLogged) {
            console.warn("LogLux: Advertencia, este mensaje ya se ha mostrado.");
            return;
        }

        if (this.css === '') {
            this.css = 'font-size: 14px;';
        }

        this.logMessage = message;
        console.log(`%c${this.logMessage}`, this.css);
        this.isLogged = true;
    }
}

export function log(message) {
    return new LogLuxClass(message);
}