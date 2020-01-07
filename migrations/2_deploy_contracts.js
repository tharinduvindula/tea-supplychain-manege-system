var Login = artifacts.require("./Login.sol");
var AdminContract = artifacts.require("AdminContract");
var ManagerContract = artifacts.require("ManagerContract");
var DistributorContract = artifacts.require("DistributorContract");
var SupervisorContract = artifacts.require("SupervisorContract");
var LoaderContract = artifacts.require("LoaderContract");

module.exports = function (deployer) {
    deployer.deploy(ManagerContract);
    deployer.deploy(AdminContract);
    deployer.deploy(DistributorContract);
    deployer.deploy(SupervisorContract);
    deployer.deploy(LoaderContract);
    deployer.deploy(Login, AdminContract.address, ManagerContract.address, DistributorContract.address, SupervisorContract.address, LoaderContract.address);
};
