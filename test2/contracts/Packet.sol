pragma solidity >=0.4.21 <0.6.0;

contract PacketContract {


    struct Packet{
        string packetId;
        bytes32 packetIdCode;
        string orderId;
        string boxId;
        uint index;
        uint rate;
    }

    struct Order{
        bytes32 orderIdCode;
        string orderId;
        string packetId;
        uint index;
        uint quantity;
    }

    struct DisplayPacket{
        string packetId;
        bytes32 packetIdCode;
        string orderId;
        string boxId;
        uint rate;
    }

    event LogNewPacket(
        bytes32 indexed packetIdCode,
        uint index,
        string packetId,
        string oderId
        );
    event LogDeletePacket(
        bytes32 indexed packetIdcode,
        uint index
        );

    mapping(bytes32 => Packet) public PacketArray;
    mapping(bytes32 => Order) public OrderArray;
    DisplayPacket[] private PacketIndex;

    function isPacket(string memory _packetId)public view returns(bool isIndeed) {
        bytes32 _packetIdCode = keccak256(abi.encodePacked((_packetId)));
        if(PacketIndex.length == 0) return false;
        return (PacketIndex[PacketArray[_packetIdCode].index].packetIdCode == _packetIdCode);
    }
    function isPacketx(bytes32 _packetIdCode)public view returns(bool isIndeed) {
        if(PacketIndex.length == 0) return false;
        return (PacketIndex[PacketArray[_packetIdCode].index].packetIdCode == _packetIdCode);
    }
    function setDisplayPacket
    (bytes32 _packetIdCode,string memory _packetId,string memory _orderId,string memory _boxId)
     private returns(bool){

        DisplayPacket memory displayPacket;
        displayPacket.packetIdCode = _packetIdCode;
        displayPacket.packetId = _packetId;
        displayPacket.orderId = _orderId;
        displayPacket.boxId = _boxId;
        displayPacket.rate = 0;
        PacketIndex.push(displayPacket);
        return true;

    }
    function insertPacket
    (string memory _packetId,string memory _orderId,string memory _boxId) public returns(bool){
        bytes32 _packetIdCode = keccak256(abi.encodePacked((_packetId)));
        require(isPacketx(_packetIdCode) != true,'packet allredy in system');

        PacketArray[_packetIdCode].packetId = _packetId;
        PacketArray[_packetIdCode].packetIdCode = _packetIdCode;
        PacketArray[_packetIdCode].orderId = _orderId;
        PacketArray[_packetIdCode].boxId = _boxId;
        PacketArray[_packetIdCode].rate = 0;
        setDisplayPacket(_packetIdCode,_packetId,_orderId,_boxId);
        PacketArray[_packetIdCode].index = PacketIndex.length-1;

        emit LogNewPacket (
            _packetIdCode,
            PacketArray[_packetIdCode].index,
            _packetId,
            _orderId
            );
        return true;
    }

    function getPacket(string memory _packetId) public view returns
    (bytes32 packetIdCode,string memory packetId,string memory orderId,string memory boxId,uint rate){
        bytes32 _packetIdCode = keccak256(abi.encodePacked((_packetId)));
        require(isPacketx(_packetIdCode) == true,'packet not in system');
        return(
            _packetIdCode,
            PacketArray[_packetIdCode].packetId,
            PacketArray[_packetIdCode].orderId,
            PacketArray[_packetIdCode].boxId,
            PacketArray[_packetIdCode].rate
            );

    }

    function getPacketi(uint i) public view returns
    (bytes32 packetIdCode,string memory packetId,string memory orderId,string memory boxId){
        return(
            PacketIndex[i].packetIdCode,
            PacketIndex[i].packetId,
            PacketIndex[i].orderId,
            PacketIndex[i].boxId
            );

    }

    function insertOrder
    (string memory _orderId,uint quantity) public returns(bool){
        bytes32 _orderIdCode = keccak256(abi.encodePacked((_orderId)));
        require(isPacketx(_orderIdCode) != true,'packet allredy in system');

        OrderArray[_orderIdCode].orderId = _orderId;
        OrderArray[_orderIdCode].orderIdCode = _orderIdCode;
        OrderArray[_orderIdCode].index = PacketIndex.length-1;
        OrderArray[_orderIdCode].quantity = quantity;
        OrderArray[_orderIdCode].packetId = PacketIndex[PacketIndex.length-1].packetId;

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

     function getLastPacket() public view returns(string memory){
        if(PacketIndex.length == 0){
            return '0';
        } else{
            return PacketIndex[PacketIndex.length - 1].packetId;
        }
    }

}