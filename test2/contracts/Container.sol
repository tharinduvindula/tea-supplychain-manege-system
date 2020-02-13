pragma solidity >=0.4.21 <0.6.0;

contract ContainerContract {

    struct order{
        string orderId;
        uint quntity;
    }

    struct Container{
        string containerId;
        bytes32 containerIdCode;
        string mainDistributorScanDateAndTime;
        order[] orderDetail;
        uint index;
    }

    struct DisplayContainer{
        string containerId;
        bytes32 containerIdCode;
        string mainDistributorScanDateAndTime;
        order[] orderDetail;
        uint index;
    }

    event LogNewContainer(
        bytes32 indexed containerIdCode,
        uint index,
        string containerId
        );
    event LogDeleteContainer(
        bytes32 indexed containerIdcode,
        uint index
        );

    mapping(bytes32 => Container) public ContainerArray;
    DisplayContainer[] private ContainerIndex;

    // function isContainer(string memory _containerId)public view returns(bool isIndeed) {
    //     bytes32 _containerIdCode = keccak256(abi.encodePacked((_containerId)));
    //     if(ContainerIndex.length == 0) return false;
    //     return (ContainerIndex[ContainerArray[_containerIdCode].index].containerIdCode == _containerIdCode);
    // }
    // function isContainerx(bytes32 _containerIdCode)public view returns(bool isIndeed) {
    //     if(ContainerIndex.length == 0) return false;
    //     return (ContainerIndex[ContainerArray[_containerIdCode].index].containerIdCode == _containerIdCode);
    // }
    // function insertContainer
    // (string memory _containerId,string memory _orderId) public returns(bool){
    //     bytes32 _containerIdCode = keccak256(abi.encodePacked((_containerId)));
    //     require(isContainerx(_containerIdCode) != true,'container allredy in system');

    //     ContainerArray[_containerIdCode].containerId = _containerId;
    //     ContainerArray[_containerIdCode].containerIdCode = _containerIdCode;


    //     ContainerArray[_containerIdCode].index = ContainerIndex.length-1;

    //     emit LogNewContainer (
    //         _containerIdCode,
    //         ContainerArray[_containerIdCode].index,
    //         _containerId,
    //         _orderId
    //         );
    //     return true;
    // }

    // function getContainer(string memory _containerId) public view returns
    // (bytes32 containerIdCode,string memory containerId,string memory orderId,string memory loaderScanDateAndTime,uint distributorIdCount){
    //     bytes32 _containerIdCode = keccak256(abi.encodePacked((_containerId)));
    //     require(isContainerx(_containerIdCode) == true,'container not in system');
    //     return(
    //         _containerIdCode,
    //         ContainerArray[_containerIdCode].containerId,
    //         ContainerArray[_containerIdCode].orderId,
    //         ContainerArray[_containerIdCode].containerId,
    //         ContainerArray[_containerIdCode].loaderScanDateAndTime,
    //         ContainerArray[_containerIdCode].distributorId.length
    //         );

    // }

    // function getContainerDistributori(bytes32 _containerIdCode,uint i) public view returns(string memory,string memory)
    // {
    //     return 
    //     (
    //         ContainerArray[_containerIdCode].distributorId[i].distributor,
    //         ContainerArray[_containerIdCode].distributorId[i].dateAndTime
    //     );
    // }
    // // function scanDistributor(bytes32 _containerIdCode,string memory distributorId,string memory dateAndTime) public returns(bool)
    // // {
    // //     Distributor memory distributorDetail;
    // //     distributorDetail.distributor = distributorId;
    // //     distributorDetail.dateAndTime = dateAndTime;
    // //     ContainerArray[_containerIdCode].distributorId.push(distributorDetail);
    // //     ContainerIndex[ContainerArray[_containerIdCode].index].distributorId.push(distributorDetail);
    // //     return true;
    // // }


}