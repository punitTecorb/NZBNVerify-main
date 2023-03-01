import request from 'request';
import express from 'express';
const router = express.Router();

// NZBN verification
function NZBNVerification(data:any):Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            var req_data = data;            
            var access_key = req_data.access_key;
            var options = {
                uri: 'https://sandbox.api.business.govt.nz/services/v4/nzbn/entities/' + req_data.NZBNumber,
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': access_key
                },
            };
            request(options, function (error, response, body) {
                console.log(body,"body");
                if (body) {
                    var data = JSON.parse(body);
                    if (data.entityStatusCode == '50') {
                        var verify:any = true;
                        var company:any = data.entityTypeDescription;
                        var email:any = '';
                    } else {
                        var verify:any = false;
                        var company:any = '';
                        var email:any = '';
                    }
                    var objData:any = {
                        'verify': verify,
                        'company': company,
                        'email': email,
                        'type': 'NZBN',
                        'number': req_data.NZBNumber 
                    }
                    resolve(objData);
                } else {
                    var objData:any = {
                        'verify': false,
                        'company': '',
                        'email': '',
                        'type': 'NZBN',
                        'number': req_data.NZBNumber 
                    }
                    resolve(objData);
                }
            });            
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

// NZBN verification end here

export default {
    NZBNVerification
} as const;