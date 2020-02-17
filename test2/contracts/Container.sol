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
        string loaderScanDateAndTime;
        mapping (uint=>Order) orderId;
        uint orderIdCount;
        uint index;
        uint scantime;
    }

    struct DisplayContainer{
        string containerId;
        bytes32 containerIdCode;
        string mainDistributorScanDateAndTime;
        string loaderScanDateAndTime;
        mapping (uint=>Order) orderId;
        uint orderIdCount;
        uint index;
    }
    
    struct Order{
        bytes32 orderIdCode;
        string orderId;
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

    function isContainer(string memory _containerId)public view returns(bool isIndeed) {
        bytes32 _containerIdCode = keccak256(abi.encodePacked((_containerId)));
        if(ContainerIndex.length == 0) return false;
        return (ContainerIndex[ContainerArray[_containerIdCode].index].containerIdCode == _containerIdCode);
    }
    function isContainerx(bytes32 _containerIdCode)public view returns(bool isIndeed) {
        if(ContainerIndex.length == 0) return false;
        return (ContainerIndex[ContainerArray[_containerIdCode].index].containerIdCode == _containerIdCode);
    }
     function isOrder(bytes32 _containerIdCode,string memory _orderId)public view returns(bool isIndeed) {
        bytes32 _orderIdCode = keccak256(abi.encodePacked((_orderId)));
        for(uint i=0;i<ContainerArray[_containerIdCode].orderIdCount;i++){
            if(ContainerArray[_containerIdCode].orderId[i].orderIdCode == _orderIdCode){
                return true;
            }
        }
        return false;
    }
    function insertContainer
    (string memory _containerId) public returns(bool){
        bytes32 _containerIdCode = keccak256(abi.encodePacked((_containerId)));
        require(isContainerx(_containerIdCode) != true,'container allredy in system');

        ContainerArray[_containerIdCode].containerId = _containerId;
        ContainerArray[_containerIdCode].containerIdCode = _containerIdCode;
        ContainerArray[_containerIdCode].containerIdCode = 0;
        ContainerArray[_containerIdCode].orderIdCount = 0;
        ContainerArray[_containerIdCode].index = ContainerIndex.length-1;

        emit LogNewContainer (
            _containerIdCode,
            ContainerArray[_containerIdCode].index,
            _containerId
            );
        return true;
    }

    function getContainer(string memory _containerId) public view returns
    (bytes32 containerIdCode,string memory containerId,uint orderIdCount,string memory loaderScanDateAndTime,string memory mainDistributorScanDateAndTime){
        bytes32 _containerIdCode = keccak256(abi.encodePacked((_containerId)));
        require(isContainerx(_containerIdCode) != true,'container not in system');
        return(
            _containerIdCode,
            ContainerArray[_containerIdCode].containerId,
            ContainerArray[_containerIdCode].orderIdCount,
            ContainerArray[_containerIdCode].loaderScanDateAndTime,
            ContainerArray[_containerIdCode].mainDistributorScanDateAndTime
            );

    }
    
    function getorderi(string memory _containerId,uint i) public view returns
    (string memory orderId){
        bytes32 _containerIdCode = keccak256(abi.encodePacked((_containerId)));
        require(isContainerx(_containerIdCode) != true,'container not in system');
        return(
           
            ContainerArray[_containerIdCode].orderId[i].orderId
            );

    }
    
    function addOrder(bytes32 _containerIdCode,string memory orderId) public returns(bool)
    {
        require(isOrder(_containerIdCode,orderId) != true ,'order allredy add');
        bytes32 orderIdCode = keccak256(abi.encodePacked((orderId)));
        ContainerArray[_containerIdCode].orderId[ ContainerArray[_containerIdCode].orderIdCount].orderId = orderId;
        ContainerArray[_containerIdCode].orderId[ ContainerArray[_containerIdCode].orderIdCount].orderIdCode = orderIdCode;
        ContainerArray[_containerIdCode].orderIdCount++;
        return true;
    }
     function scanContaine(bytes32 _containerIdCode,string memory distributorIdAnddateAndTime) public returns(bool)
    {
        ContainerArray[_containerIdCode].scantime++;
        if(ContainerArray[_containerIdCode].scantime == 1){
            ContainerArray[_containerIdCode].loaderScanDateAndTime = distributorIdAnddateAndTime;
        } else if(ContainerArray[_containerIdCode].scantime == 2){
            ContainerArray[_containerIdCode].mainDistributorScanDateAndTime = distributorIdAnddateAndTime;
        }
        return true;
    }



}