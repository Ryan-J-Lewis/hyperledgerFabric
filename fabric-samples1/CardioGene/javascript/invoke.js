/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Gateway, Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');

async function main() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', 'first-network', 'connection-org1.json');
        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('user1');
        if (!identity) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('CardioGene');

        var text = fs.readFileSync("/home/ryan/Downloads/datapriv/CardioData/cardioAllChr.vcf", "utf-8");
        var names = fs.readFileSync("/home/ryan/Downloads/datapriv/2504RandomNames", "utf-8");
        var nameByLine = names.split("\n");
        var textByLine = text.split("\n");
        var data = [];
        for (var count = 0; count < textByLine.length; count++){
          var res = textByLine[count].split("");
          if (res[0] != "#"){
            data.push(textByLine[count]);
          }
        }
        var hold = []
        for (var y = 0 ; y < 2504 ; y++){
          for (var x = 0 ; x < data.length - 1 ; x++){
            var s = data[x].split("\t");
            hold.push(s[y + 9]);
          }
          var num = y + 1;
          var patient = 'PATIENT';
          var n = num.toString();
          patient = patient.concat(n);
          var height = Math.floor(Math.random() *(78 - 60)) + 60;
          height = height.toString();
          height = height.concat(" (inches)")
          var weight = Math.floor(Math.random() *(255 - 150)) + 150;
          weight = weight.toString();
          weight = weight.concat(" (lbs)")
          var date1 = Math.floor(Math.random() * (12 - 1)) + 1;
          var date2 = Math.floor(Math.random() * (31 - 1)) + 1;
          var date3 = Math.floor(Math.random() * (99 - 47)) + 47;
          date1 = date1.toString();
          date2 = date2.toString();
          date3 = date3.toString();
          date1 = date1.concat("/");
          date1 = date1.concat(date2);
          date1 = date1.concat("/");
          date1 = date1.concat(date3);
          await contract.submitTransaction('createPatient', patient, nameByLine[y], date1, height, weight, hold[0], hold[1], hold[2], hold[3], hold[4], hold[5], hold[6], hold[7], hold[8], hold[9], hold[10], hold[11], hold[12], hold[13], hold[14], hold[15], hold[16], hold[17], hold[18], hold[19], hold[20], hold[21], hold[22], hold[23], hold[24], hold[25], hold[26], hold[27], hold[28], hold[29],
          hold[30], hold[31], hold[32], hold[33], hold[34], hold[35], hold[36], hold[37], hold[38], hold[39], hold[40], hold[41], hold[42], hold[43], hold[44], hold[45], hold[46], hold[47], hold[48], hold[49], hold[50], hold[51], hold[52], hold[53], hold[54], hold[55], hold[56], hold[57], hold[58], hold[59], hold[60], hold[61], hold[62], hold[63], hold[64], hold[65], hold[66], hold[67], hold[68], hold[69],
          hold[70], hold[71], hold[72], hold[73], hold[74], hold[75], hold[76], hold[77], hold[78], hold[79],hold[80], hold[81], hold[82], hold[83], hold[84], hold[85], hold[86], hold[87], hold[88], hold[89], hold[90], hold[91], hold[92], hold[93], hold[94], hold[95], hold[96], hold[97], hold[98], hold[99], hold[100], hold[101], hold[102], hold[103], hold[104], hold[105], hold[106], hold[107], hold[108], hold[109], hold[110], hold[111], hold[112], hold[113], hold[114], hold[115], hold[116], hold[117], hold[118], hold[119], hold[120], hold[121], hold[122], hold[123], hold[124], hold[125], hold[126], hold[127], hold[128], hold[129],hold[130], hold[131], hold[132], hold[133], hold[134], hold[135], hold[136], hold[137], hold[138], hold[139], hold[140], hold[141], hold[142], hold[143], hold[144], hold[145], hold[146], hold[147], hold[148], hold[149], hold[150], hold[151], hold[152], hold[153], hold[154], hold[155], hold[156], hold[157], hold[158], hold[159], hold[160], hold[161], hold[162], hold[163], hold[164], hold[165], hold[166], hold[167], hold[168], hold[169], hold[170], hold[171], hold[172], hold[173], hold[174], hold[175], hold[176], hold[177], hold[178], hold[179],hold[180], hold[181], hold[182], hold[183], hold[184], hold[185], hold[186], hold[187], hold[188], hold[189], hold[190], hold[191], hold[192], hold[193], hold[194], hold[195], hold[196], hold[197], hold[198], hold[199],hold[200], hold[201], hold[202], hold[203], hold[204], hold[205], hold[206], hold[207], hold[208], hold[209], hold[210], hold[211], hold[212], hold[213], hold[214], hold[215], hold[216], hold[217], hold[218], hold[219], hold[220], hold[221], hold[222], hold[223], hold[224], hold[225], hold[226], hold[227], hold[228], hold[229], hold[230], hold[231], hold[232], hold[233], hold[234], hold[235], hold[236], hold[237], hold[238], hold[239], hold[240], hold[241], hold[242], hold[243], hold[244], hold[245], hold[246], hold[247], hold[248], hold[249], hold[250], hold[251], hold[252], hold[253], hold[254], hold[255], hold[256], hold[257], hold[258], hold[259], hold[260], hold[261], hold[262], hold[263], hold[264], hold[265], hold[266], hold[267], hold[268], hold[269], hold[270], hold[271], hold[272], hold[273], hold[274], hold[275], hold[276], hold[277], hold[278], hold[279],hold[280], hold[281], hold[282], hold[283], hold[284], hold[285], hold[286], hold[287], hold[288], hold[289], hold[290], hold[291], hold[292], hold[293], hold[294], hold[295], hold[296], hold[297], hold[298], hold[299],hold[300], hold[301], hold[302], hold[303], hold[304], hold[305], hold[306], hold[307], hold[308], hold[309], hold[310], hold[311], hold[312], hold[313], hold[314], hold[315], hold[316], hold[317], hold[318], hold[319], hold[320], hold[321], hold[322], hold[323], hold[324], hold[325], hold[326], hold[327], hold[328], hold[329]);

          console.log('Transaction has been submitted' + y.toString());
        }
        // Disconnect from the gateway.
        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

main();
