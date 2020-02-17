var Login = artifacts.require("./Login.sol");
var AdminContract = artifacts.require("AdminContract");
var ManagerContract = artifacts.require("ManagerContract");
var DistributorContract = artifacts.require("DistributorContract");
var SupervisorContract = artifacts.require("SupervisorContract");
var LoaderContract = artifacts.require("LoaderContract");
var EstateContract = artifacts.require("EstateContract");
var OrderContract = artifacts.require("OrderContract");
var ProdutContract = artifacts.require("ProductContract");
var BoxContract = artifacts.require("BoxContract");
var PacketContract = artifacts.require("PacketContract");
var ContainerContract = artifacts.require("ContainerContract");

module.exports = function (deployer) {
     deployer.deploy(ManagerContract).then(function () {
        return deployer.deploy(AdminContract).then(function () {
             return deployer.deploy(DistributorContract).then(function () {
                 return deployer.deploy(SupervisorContract).then(function () {
                     return deployer.deploy(LoaderContract).then(function () {
                         return deployer.deploy(Login, AdminContract.address, ManagerContract.address, DistributorContract.address, SupervisorContract.address, LoaderContract.address);
                     });
                 });
            });
        });
     });
    //deployer.deploy(ManagerContract);
    //deployer.deploy(AdminContract);
    //deployer.deploy(DistributorContract);
    //deployer.deploy(SupervisorContract);
    //deployer.deploy(LoaderContract);
    //deployer.deploy(Login, AdminContract.address, ManagerContract.address, DistributorContract.address, SupervisorContract.address, LoaderContract.address);
    deployer.deploy(EstateContract);
    deployer.deploy(OrderContract);
    deployer.deploy(ProdutContract);
    deployer.deploy(PacketContract);
    deployer.deploy(BoxContract);
    deployer.deploy(ContainerContract);
};
