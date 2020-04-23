# HyperledgerFabric for Managing Genetic Data

The genetic data for this project is from the 1000 Genome Project and was edited with Vcftools

To start the network go to /hyperledgerFabric/fabric-samples1/CardioGene in your terminal and enter "./startFabric.sh javascript"

After the network has been initialized change to the directory ".../javascript"
This is where you can call methods to perform actions on the network
  
To create a new Administrator use the command: "sudo node enrollAdmin.js"
To create a new User use the command: "sudo node registerUser.js"
To input new patients use the command: "sudo node invoke.js"
To query the ledger use the command: "sudo node query.js"
  
  Any question can be sent to ryan.j.lewis@uth.tmc.edu
