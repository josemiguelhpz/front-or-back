const { hello } = require('../src/logic');

describe('Test Logic', function () {

    test('responds to /hello/:name', () => {
        const req = { params: { name: 'Jose' } };
        const res = {
            text: '',
            send: function (input) { this.text = input }
        };
        hello(req, res)

        expect(res.text).toEqual('hello Jose!');
    });

});