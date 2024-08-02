define(["require", "exports"], function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    exports.autocompletes = {
        Function: {
            'connect': {
                insertText: 'connect(${1:url})',
                documentation: {
                    value: [
                        'Connects to the url specified. Errors if the connection fails.'
                    ].join('\n')
                },
            }
        }
    }
});