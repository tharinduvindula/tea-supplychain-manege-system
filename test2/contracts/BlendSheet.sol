pragma solidity >=0.4.21 <0.6.0;

contract BlendSheetContract {

    struct BlendSheet{
        string blendSheetId;
        bytes32 blendSheetIdCode;
        string orderId;
        string date;
        string[] estateId;
        uint blendSheetAccess;
        uint index;
    }

    struct DisplayBlendSheet{
        string blendSheetId;
        bytes32 blendSheetIdCode;
        string orderId;
        string date;
        string[] estateId;
        uint blendSheetAccess;
        uint index;
    }

    event LogNewBlendSheet(
        bytes32 indexed blendSheetIdCode,
        uint index,
        string blendSheetId,
        string oderId,
        string date,
        uint blendSheetAccess
        );
    event LogDeleteBlendSheet(
        bytes32 indexed blendSheetIdcode,
        uint index
        );

    mapping(bytes32 => BlendSheet) public BlendSheetArray;
    DisplayBlendSheet[] private BlendSheetIndex;

    function isBlendSheet(bytes32 _blendSheetIdCode)public view returns(bool isIndeed) {
        if(BlendSheetIndex.length == 0) return false;
        return (BlendSheetIndex[BlendSheetArray[_blendSheetIdCode].index].blendSheetIdCode == _blendSheetIdCode);
    }

    function setDisplayBlendSheet
    (bytes32 _blendSheetIdCode,string memory _blendSheetId,string memory _orderId,string memory _date)
     private returns(bool){

        DisplayBlendSheet memory displayBlendSheet;
        displayBlendSheet.blendSheetIdCode = _blendSheetIdCode;
        displayBlendSheet.blendSheetId = _blendSheetId;
        displayBlendSheet.orderId = _orderId;
        displayBlendSheet.date = _date;
        displayBlendSheet.blendSheetAccess = 1;
        BlendSheetIndex.push(displayBlendSheet);
        return true;

    }
    function insertBlendSheet
    (string memory _blendSheetId,string memory _orderId,string memory _date) public returns(bool){
        bytes32 _blendSheetIdCode = keccak256(abi.encodePacked((_blendSheetId)));
        require(isBlendSheet(_blendSheetIdCode) != true,'blendSheet allredy in system');

        BlendSheetArray[_blendSheetIdCode].blendSheetId = _blendSheetId;
        BlendSheetArray[_blendSheetIdCode].blendSheetIdCode = _blendSheetIdCode;
        BlendSheetArray[_blendSheetIdCode].blendSheetAccess = 1;
        BlendSheetArray[_blendSheetIdCode].orderId = _orderId;
        BlendSheetArray[_blendSheetIdCode].date = _date;
        setDisplayBlendSheet(_blendSheetIdCode,_blendSheetId,_orderId,_date);
        BlendSheetArray[_blendSheetIdCode].index = BlendSheetIndex.length-1;

        emit LogNewBlendSheet (
            _blendSheetIdCode,
            BlendSheetArray[_blendSheetIdCode].index,
            _blendSheetId,
            _orderId,
            _date,
            BlendSheetArray[_blendSheetIdCode].blendSheetAccess
            );
        return true;
    }
    function deleteBlendSheet (bytes32 _blendSheetIdCode) public returns(string memory){
        BlendSheetArray[_blendSheetIdCode].blendSheetAccess = 4;
        BlendSheetIndex[BlendSheetArray[_blendSheetIdCode].index].blendSheetAccess = 4;
        emit LogDeleteBlendSheet(
            _blendSheetIdCode,
            BlendSheetArray[_blendSheetIdCode].index
        );
        return  BlendSheetArray[_blendSheetIdCode].blendSheetId;
    }

    function getBlendSheet(string memory _blendSheetId) public view returns
    (bytes32 blendSheetIdCode,string memory blendSheetId,string memory orderId,string memory date,uint blendSheetAccess,uint estateIdCount){
        bytes32 _blendSheetIdCode = keccak256(abi.encodePacked((_blendSheetId)));
        require(isBlendSheet(_blendSheetIdCode) == true,'blendSheet not in system');
        return(
            _blendSheetIdCode,
            BlendSheetArray[_blendSheetIdCode].blendSheetId,
            BlendSheetArray[_blendSheetIdCode].orderId,
            BlendSheetArray[_blendSheetIdCode].date,
            BlendSheetArray[_blendSheetIdCode].blendSheetAccess,
            BlendSheetArray[_blendSheetIdCode].estateId.length
            );

    }
    function getBlendSheeti(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        string memory,
        uint,
        uint
        ){
            return (
                BlendSheetIndex[i].blendSheetIdCode,
                BlendSheetIndex[i].blendSheetId,
                BlendSheetIndex[i].orderId,
                BlendSheetIndex[i].date,
                BlendSheetIndex[i].blendSheetAccess,
                BlendSheetIndex[i].estateId.length
                );
    }
    function getBlendSheetCount() public view returns(uint)
    {
        return BlendSheetIndex.length;
    }
    function getBlendSheetEstatei(bytes32 _blendSheetIdCode,uint i) public view returns(string memory)
    {
        return BlendSheetArray[_blendSheetIdCode].estateId[i];
    }
    function addEstate(bytes32 _blendSheetIdCode,string memory estateId) public returns(bool)
    {
        BlendSheetArray[_blendSheetIdCode].estateId.push(estateId);
        BlendSheetIndex[BlendSheetArray[_blendSheetIdCode].index].estateId.push(estateId);
        return true;
    }


}