var soap = require('soap');
var url = 'http://www.portaltui.com/webservices/dados.xsd';
var args = {name: 'value'};

client.setSecurity(new soap.BasicAuthSecurity('BETTER', '123'));

soap.createClient(url, {}, function(err, client) {
    client.MyFunction(args, function(err, result) {
        console.log(result);
    });
});