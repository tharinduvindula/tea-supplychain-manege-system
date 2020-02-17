pragma solidity >=0.4.21 <0.6.0;

contract BoxContract {

    struct Distributor{
        string distributor;
        string dateAndTime;
    }

    struct Box{
        string boxId;
        bytes32 boxIdCode;
        string orderId;
        string containerId;
        string loaderScanDateAndTime;
        mapping (uint=>Distributor) distributorId;
        uint scantime;
        uint index;
    }

    struct Order{
        bytes32 orderIdCode;
        string orderId;
        string boxId;
        uint index;
        uint quantity;
    }

    struct DisplayBox{
        string boxId;
        bytes32 boxIdCode;
        string orderId;
        string containerId;
        string loaderScanDateAndTime;
        mapping (uint=>Distributor) distributorId;
        uint scantime;
        uint index;
    }

    event LogNewBox(
        bytes32 indexed boxIdCode,
        uint index,
        string boxId,
        string oderId
        );
    event LogDeleteBox(
        bytes32 indexed boxIdcode,
        uint index
        );

    mapping(bytes32 => Box) public BoxArray;
    DisplayBox[] private BoxIndex;
    mapping(bytes32 => Order) public OrderArray;

    function isBox(string memory _boxId)public view returns(bool isIndeed) {
        bytes32 _boxIdCode = keccak256(abi.encodePacked((_boxId)));
        if(BoxIndex.length == 0) return false;
        return (BoxIndex[BoxArray[_boxIdCode].index].boxIdCode == _boxIdCode);
    }
    function isBoxx(bytes32 _boxIdCode)public view returns(bool isIndeed) {
        if(BoxIndex.length == 0) return false;
        return (BoxIndex[BoxArray[_boxIdCode].index].boxIdCode == _boxIdCode);
    }
    function setDisplayBox
    (bytes32 _boxIdCode,string memory _boxId,string memory _orderId)
     private returns(bool){

        DisplayBox memory displayBox;
        displayBox.boxIdCode = _boxIdCode;
        displayBox.boxId = _boxId;
        displayBox.orderId = _orderId;
        BoxIndex.push(displayBox);
        return true;

    }
    function insertBox
    (string memory _boxId,string memory _orderId) public returns(bool){
        bytes32 _boxIdCode = keccak256(abi.encodePacked((_boxId)));
        require(isBoxx(_boxIdCode) != true,'box allredy in system');

        BoxArray[_boxIdCode].boxId = _boxId;
        BoxArray[_boxIdCode].boxIdCode = _boxIdCode;
        BoxArray[_boxIdCode].orderId = _orderId;
        setDisplayBox(_boxIdCode,_boxId,_orderId);
        BoxArray[_boxIdCode].index = BoxIndex.length-1;

        emit LogNewBox (
            _boxIdCode,
            BoxArray[_boxIdCode].index,
            _boxId,
            _orderId
            );
        return true;
    }


    function getBox(string memory _boxId) public view returns
    (bytes32 boxIdCode,string memory boxId,string memory orderId,string memory containerId,string memory loaderScanDateAndTime,uint distributorIdCount){
        bytes32 _boxIdCode = keccak256(abi.encodePacked((_boxId)));
        require(isBoxx(_boxIdCode) == true,'box not in system');
        return(
            _boxIdCode,
            BoxArray[_boxIdCode].boxId,
            BoxArray[_boxIdCode].orderId,
            BoxArray[_boxIdCode].containerId,
            BoxArray[_boxIdCode].loaderScanDateAndTime,
            BoxArray[_boxIdCode].scantime
            );

    }

    function getBoxCode(bytes32 _boxIdCode) public view returns
    (bytes32 boxIdCode,string memory boxId,string memory orderId,string memory containerId,string memory loaderScanDateAndTime,uint distributorIdCount){
        require(isBoxx(_boxIdCode) == true,'box not in system');
        return(
            _boxIdCode,
            BoxArray[_boxIdCode].boxId,
            BoxArray[_boxIdCode].orderId,
            BoxArray[_boxIdCode].containerId,
            BoxArray[_boxIdCode].loaderScanDateAndTime,
            BoxArray[_boxIdCode].scantime
            );

    }

    function getBoxi(uint i) public view returns
    (bytes32 boxIdCode,string memory boxId,string memory orderId){
        return(
            BoxIndex[i].boxIdCode,
            BoxIndex[i].boxId,
            BoxIndex[i].orderId
            );

    }

    function getBoxDistributori(bytes32 _boxIdCode,uint i) public view returns(string memory,string memory)
    {
        return 
        (
            BoxArray[_boxIdCode].distributorId[i].distributor,
            BoxArray[_boxIdCode].distributorId[i].dateAndTime
        );
    }
    
    function scanDistributor(bytes32 _boxIdCode,string memory distributorId,string memory dateAndTime) public returns(bool)
    {
        BoxArray[_boxIdCode].scantime++;
        
        BoxArray[_boxIdCode].distributorId[BoxArray[_boxIdCode].scantime].distributor = distributorId;
        BoxIndex[BoxArray[_boxIdCode].index].distributorId[BoxArray[_boxIdCode].scantime].dateAndTime = dateAndTime;
        return true;
    }

    function insertOrder
    (string memory _orderId,uint quantity) public returns(bool){
        bytes32 _orderIdCode = keccak256(abi.encodePacked((_orderId)));
        require(isBoxx(_orderIdCode) != true,'Box allredy in system');

        OrderArray[_orderIdCode].orderId = _orderId;
        OrderArray[_orderIdCode].orderIdCode = _orderIdCode;
        OrderArray[_orderIdCode].index = BoxIndex.length-1;
        OrderArray[_orderIdCode].quantity = quantity;
        OrderArray[_orderIdCode].boxId = BoxIndex[BoxIndex.length-1].boxId;

        return true;
    }

    function getOrder
    (string memory _orderId) public view returns(
        bytes32 orderIdCode,string memory orderId,uint index,uint quantity
    ){
        bytes32 _orderIdCode = keccak256(abi.encodePacked((_orderId)));

        return(
        OrderArray[_orderIdCode].orderIdCode,
        OrderArray[_orderIdCode].orderId,
        OrderArray[_orderIdCode].index,
        OrderArray[_orderIdCode].quantity
        );
    }

    function getLastBox() public view returns(string memory){
        if(BoxIndex.length == 0) {
            return '0';
        } else {
            return BoxIndex[BoxIndex.length - 1].boxId;
        }
        
    }

}