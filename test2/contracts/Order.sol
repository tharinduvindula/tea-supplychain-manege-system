pragma solidity >=0.4.21 <0.6.0;

contract OrderContract {

    struct Order{
        string orderName;
        bytes32 orderNameCode;
        string productName;
        string progress;
        uint quntity;
        uint orderAccess;
        uint index;
        uint rate;
        uint unit;
    }

    struct DisplayOrder{
        bytes32 orderNameCode;
        string orderName;
        string productName;
        string progress;
        uint quntity;
        uint orderAccess;
        uint rate;
        uint unit;
    }

    event LogNewOrder(
        bytes32 indexed orderNameCode,
        uint index,string orderName,
        string productName,
        string progress,
        uint quntity,
        uint orderAccess,
        uint rate,
        uint unit
        );
    event LogUpdateOrder(
        bytes32 indexed orderNameCode,
        uint index,string orderName,
        string progress,
        uint quntity,
        uint orderAccess,
        uint rate,
        uint unit
        );
    event LogDeleteOrder(
        bytes32 indexed orderNamecode,
        uint index
        );

    mapping(bytes32 => Order) public OrderArray;
    DisplayOrder[] private OrderIndex;

    function isOrder(bytes32 _orderNameCode)public view returns(bool isIndeed) {
        if(OrderIndex.length == 0) return false;
        return (OrderIndex[OrderArray[_orderNameCode].index].orderNameCode == _orderNameCode);
    }

    function setDisplayOrder
    (bytes32 _orderNameCode,string memory _orderName,string memory _progress,string memory productName,uint _quntity)
     private returns(bool){

        DisplayOrder memory displayOrder;
        displayOrder.orderNameCode = _orderNameCode;
        displayOrder.orderName = _orderName;
        displayOrder.productName = productName;
        displayOrder.progress = _progress;
        displayOrder.quntity = _quntity;
        displayOrder.orderAccess = 1;
        displayOrder.rate = 0;
        displayOrder.unit = 0;
        OrderIndex.push(displayOrder);
        return true;

    }
    function insertOrder
    (string memory _orderName,string memory _progress,uint _quntity,string memory productName) public returns(bool){
        bytes32 _orderNameCode = keccak256(abi.encodePacked((_orderName)));
        require(isOrder(_orderNameCode) != true,'order allredy in system');

        OrderArray[_orderNameCode].orderName = _orderName;
        OrderArray[_orderNameCode].orderNameCode = _orderNameCode;
        OrderArray[_orderNameCode].orderAccess = 1;
        OrderArray[_orderNameCode].progress = _progress;
        OrderArray[_orderNameCode].quntity = _quntity;
        OrderArray[_orderNameCode].rate = 0;
        OrderArray[_orderNameCode].unit = 0;
        setDisplayOrder(_orderNameCode,_orderName,_progress,productName,_quntity);
        OrderArray[_orderNameCode].index = OrderIndex.length-1;

        emit LogNewOrder (
            _orderNameCode,
            OrderArray[_orderNameCode].index,
            _orderName,
            productName,
            _progress,
            _quntity,
            OrderArray[_orderNameCode].orderAccess,
            OrderArray[_orderNameCode].rate,
            OrderArray[_orderNameCode].unit
            );
        return true;
    }
    function deleteOrder (bytes32 _orderNameCode) public returns(string memory){
        OrderArray[_orderNameCode].orderAccess = 4;
        OrderIndex[OrderArray[_orderNameCode].index].orderAccess = 4;
        emit LogDeleteOrder(
            _orderNameCode,
            OrderArray[_orderNameCode].index
        );
        return  OrderArray[_orderNameCode].orderName;
    }

    function getOrder(string memory _orderName) public view returns
    (bytes32,string memory orderName,string memory progress,uint quntity,
    uint orderAccess,uint rate){
        bytes32 _orderNameCode = keccak256(abi.encodePacked((_orderName)));
        require(isOrder(_orderNameCode) == true,'order not in system');
        return(
            _orderNameCode,
            OrderArray[_orderNameCode].orderName,
            OrderArray[_orderNameCode].progress,
            OrderArray[_orderNameCode].quntity,
            OrderArray[_orderNameCode].orderAccess,
            OrderArray[_orderNameCode].rate
            );
    }
    function getOrderi(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        string memory,
        uint,
        uint,
        uint
        ){
            return (
                OrderIndex[i].orderNameCode,
                OrderIndex[i].orderName,
                OrderIndex[i].productName,
                OrderIndex[i].progress,
                OrderIndex[i].quntity,
                OrderIndex[i].orderAccess,
                OrderIndex[i].rate
                );
    }
    function getOrderCount() public view returns(uint)
    {
        return OrderIndex.length;
    }

    function updateupdateOrderOrderProgress (string memory _orderName,string memory _progress) public returns(bool success){
        bytes32 _orderNameCode = keccak256(abi.encodePacked((_orderName)));
        require(isOrder(_orderNameCode) == true,'order not in system');
        OrderArray[_orderNameCode].progress = _progress;
        OrderIndex[OrderArray[_orderNameCode].index].progress = _progress;
        emit LogUpdateOrder(
            _orderNameCode,
            OrderArray[_orderNameCode].index,
            _orderName,
            _progress,
            OrderArray[_orderNameCode].quntity,
            OrderArray[_orderNameCode].orderAccess,
            OrderArray[_orderNameCode].rate,
            OrderArray[_orderNameCode].unit
            );
        return true;
    }

    function rateOrder (string memory _orderName,uint _rate) public returns(bool success){
        bytes32 _orderNameCode = keccak256(abi.encodePacked((_orderName)));
        require(isOrder(_orderNameCode) == true,'order not in system');
        uint nrate = (_rate+OrderArray[_orderNameCode].rate*OrderArray[_orderNameCode].unit)/(OrderArray[_orderNameCode].unit+1);
        OrderArray[_orderNameCode].unit = OrderArray[_orderNameCode].unit + 1;
        OrderArray[_orderNameCode].rate = nrate;
        OrderIndex[OrderArray[_orderNameCode].index].rate = nrate;
        emit LogUpdateOrder(
            _orderNameCode,
            OrderArray[_orderNameCode].index,
            _orderName,
            OrderArray[_orderNameCode].progress,
            OrderArray[_orderNameCode].quntity,
            OrderArray[_orderNameCode].orderAccess,
            nrate,
            OrderArray[_orderNameCode].unit
            );
        return true;
    }
}