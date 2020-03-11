/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class CardioGene extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const patients = [
            {
                name: 'Bob Ross',
                dob: '10/10/45',
                height: '70 (inches)',
                weight: '185 (lbs)',
                rs2493296: '0|0',
                rs12731208: '0|0',
                rs6670508: '1|1',
                rs880315: '1|1',
                rs56153133: '0|0',
                rs28711771: '1|1',
                rs6686889: '1|0',
                rs448385: '1|1',
                rs71636784: '0|0',
                rs12758407: '0|1',
                rs11591147: '0|0',
                rs1149643: '0|0',
                rs61772626: '0|0',
                rs4350231: '0|0',
                rs2613498: '0|0',
                rs6679817: '0|0',
                rs12740374: '0|0',
                rs3790604: '0|0',
                rs59980837: '0|0',
                rs35479618: '0|0',
            },

        ];

        for (let i = 0; i < patients.length; i++) {
            patients[i].docType = 'patient';
            await ctx.stub.putState('PATIENT' + i, Buffer.from(JSON.stringify(patients[i])));
            console.info('Added <--> ', patients[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryCar(ctx, patientNumber) {
        const patientAsBytes = await ctx.stub.getState(patientNumber); // get the car from chaincode state
        if (!patientAsBytes || patientAsBytes.length === 0) {
            throw new Error(`${patientNumber} does not exist`);
        }
        console.log(patientAsBytes.toString());
        return patientAsBytes.toString();
    }

    async createPatient(ctx, patientNumber, name, dob, height, weight, rs2493296, rs12731208, rs6670508, rs880315, rs56153133, rs28711771, rs6686889, rs448385, rs71636784, rs12758407, rs11591147, rs1149643, rs61772626, rs4350231, rs2613498, rs6679817, rs12740374, rs3790604, rs59980837, rs35479618) {
        console.info('============= START : Create Car ===========');

        const car = {
            name,
            docType: 'patient',
            dob,
            height,
            weight,
            rs2493296,
            rs12731208,
            rs6670508,
            rs880315,
            rs56153133,
            rs28711771,
            rs6686889,
            rs448385,
            rs71636784,
            rs12758407,
            rs11591147,
            rs1149643,
            rs61772626,
            rs4350231,
            rs2613498,
            rs6679817,
            rs12740374,
            rs3790604,
            rs59980837,
            rs35479618,
        };

        await ctx.stub.putState(patientNumber, Buffer.from(JSON.stringify(patient)));
        console.info('============= END : Create Car ===========');
    }

    async queryAllCars(ctx) {
        const startKey = 'PATIENT0';
        const endKey = 'PATIENT999';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    /*async changeCarOwner(ctx, patientNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');

        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }*/

}

module.exports = CardioGene;
