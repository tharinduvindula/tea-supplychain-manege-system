pragma solidity >=0.4.21 <0.6.0;

contract EstateContract {

    struct Estate{
        string estateName;
        bytes32 estateNameCode;
        string estateAddress;
        string ownerName;
        string contactnumberAndEmail;
        uint estateAccess;
        uint index;
        uint rate;
        uint unit;
    }

    struct DisplayEstate{
        bytes32 estateNameCode;
        string estateName;
        string estateAddress;
        string ownerName;
        string contactnumberAndEmail;
        uint estateAccess;
        uint rate;
        uint unit;
    }

    event LogNewEstate(
        bytes32 indexed estateNameCode,
        uint index,string estateName,
        string estateAddress,
        string ownerName,
        string contactnumberAndEmail,
        uint estateAccess,
        uint rate,
        uint unit
        );
    event LogUpdateEstate(
        bytes32 indexed estateNameCode,
        uint index,string estateName,
        string estateAddress,
        string ownerName,
        string contactnumberAndEmail,
        uint estateAccess,
        uint rate,
        uint unit
        );
    event LogDeleteEstate(
        bytes32 indexed estateNamecode,
        uint index
        );

    mapping(bytes32 => Estate) public EstateArray;
    DisplayEstate[] private EstateIndex;

    function isEstate(bytes32 _estateNameCode)public view returns(bool isIndeed) {
        if(EstateIndex.length == 0) return false;
        return (EstateIndex[EstateArray[_estateNameCode].index].estateNameCode == _estateNameCode);
    }

    function setDisplayEstate
    (bytes32 _estateNameCode,string memory _estateName,string memory _estateAddress,string memory _ownerName,string memory _contactnumberAndEmail)
     private returns(bool){

        DisplayEstate memory displayEstate;
        displayEstate.estateNameCode = _estateNameCode;
        displayEstate.estateName = _estateName;
        displayEstate.estateAddress = _estateAddress;
        displayEstate.ownerName = _ownerName;
        displayEstate.contactnumberAndEmail = _contactnumberAndEmail;
        displayEstate.estateAccess = 1;
        displayEstate.rate = 0;
        displayEstate.unit = 0;
        EstateIndex.push(displayEstate);
        return true;

    }
    function insertEstate
    (string memory _estateName,string memory _estateAddress,string memory _ownerName,string memory _contactnumberAndEmail) public returns(bool){
        bytes32 _estateNameCode = keccak256(abi.encodePacked((_estateName)));
        require(isEstate(_estateNameCode) != true,'estate allredy in system');

        EstateArray[_estateNameCode].estateName = _estateName;
        EstateArray[_estateNameCode].estateNameCode = _estateNameCode;
        EstateArray[_estateNameCode].estateAccess = 1;
        EstateArray[_estateNameCode].estateAddress = _estateAddress;
        EstateArray[_estateNameCode].ownerName = _ownerName;
        EstateArray[_estateNameCode].contactnumberAndEmail = _contactnumberAndEmail;
        EstateArray[_estateNameCode].rate = 0;
        EstateArray[_estateNameCode].unit = 0;
        setDisplayEstate(_estateNameCode,_estateName,_estateAddress,_ownerName,_contactnumberAndEmail);
        EstateArray[_estateNameCode].index = EstateIndex.length-1;

        emit LogNewEstate (
            _estateNameCode,
            EstateArray[_estateNameCode].index,
            _estateName,
            _estateAddress,
            _ownerName,
            _contactnumberAndEmail,
            EstateArray[_estateNameCode].estateAccess,
            EstateArray[_estateNameCode].rate,
            EstateArray[_estateNameCode].unit
            );
        return true;
    }
    function deleteEstate (bytes32 _estateNameCode) public returns(string memory){
        EstateArray[_estateNameCode].estateAccess = 4;
        EstateIndex[EstateArray[_estateNameCode].index].estateAccess = 4;
        emit LogDeleteEstate(
            _estateNameCode,
            EstateArray[_estateNameCode].index
        );
        return  EstateArray[_estateNameCode].estateName;
    }

    function getEstate(string memory _estateName) public view returns
    (bytes32,string memory estateName,string memory ownerName,string memory contactnumberAndEmail,
    string memory estateAddress, uint estateAccess,uint rate){
        bytes32 _estateNameCode = keccak256(abi.encodePacked((_estateName)));
        require(isEstate(_estateNameCode) == true,'estate not in system');
        return(
            _estateNameCode,
            EstateArray[_estateNameCode].estateName,
            EstateArray[_estateNameCode].estateAddress,
            EstateArray[_estateNameCode].ownerName,
            EstateArray[_estateNameCode].contactnumberAndEmail,
            EstateArray[_estateNameCode].estateAccess,
            EstateArray[_estateNameCode].rate
            );
    }
    function getEstatei(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        string memory,
        string memory,
        uint,
        uint
        ){
            return (
                EstateIndex[i].estateNameCode,
                EstateIndex[i].estateName,
                EstateIndex[i].estateAddress,
                EstateIndex[i].ownerName,
                EstateIndex[i].contactnumberAndEmail,
                EstateIndex[i].estateAccess,
                EstateIndex[i].rate
                );
    }
    function getEstateCount() public view returns(uint)
    {
        return EstateIndex.length;
    }

    // function updateUserestateName(address weight, bytes32 estateestateName) public returns(bool success)
    // {
    //     estateStructs[weight].estateestateName = estateestateName;
    //     emit LogUpdateUser(weight,  estateStructs[weight].index, estateestateName, estateStructs[weight].estateAge);
    //     return true;
    // }
    function updateEstateEstateAddress (string memory _estateName,string memory _estateAddress) public returns(bool success){
        bytes32 _estateNameCode = keccak256(abi.encodePacked((_estateName)));
        require(isEstate(_estateNameCode) == true,'estate not in system');
        EstateArray[_estateNameCode].estateAddress = _estateAddress;
        EstateIndex[EstateArray[_estateNameCode].index].estateAddress = _estateAddress;
        emit LogUpdateEstate(
            _estateNameCode,
            EstateArray[_estateNameCode].index,
            _estateName,
            _estateAddress,
            EstateArray[_estateNameCode].ownerName,
            EstateArray[_estateNameCode].contactnumberAndEmail,
            EstateArray[_estateNameCode].estateAccess,
            EstateArray[_estateNameCode].rate,
            EstateArray[_estateNameCode].unit
            );
        return true;
    }
    function updateEstateOwnerName (string memory _estateName,string memory _ownerName) public returns(bool success){
        bytes32 _estateNameCode = keccak256(abi.encodePacked((_estateName)));
        require(isEstate(_estateNameCode) == true,'estate not in system');
        EstateArray[_estateNameCode].ownerName = _ownerName;
        EstateIndex[EstateArray[_estateNameCode].index].ownerName = _ownerName;
        emit LogUpdateEstate(
            _estateNameCode,
            EstateArray[_estateNameCode].index,
            _estateName,
            EstateArray[_estateNameCode].estateAddress,
            _ownerName,
            EstateArray[_estateNameCode].contactnumberAndEmail,
            EstateArray[_estateNameCode].estateAccess,
            EstateArray[_estateNameCode].rate,
            EstateArray[_estateNameCode].unit
            );
        return true;
    }
    function updateContactnumberAndEmail (string memory _estateName,string memory _contactnumberAndEmail) public returns(bool success){
        bytes32 _estateNameCode = keccak256(abi.encodePacked((_estateName)));
        require(isEstate(_estateNameCode) == true,'estate not in system');
        EstateArray[_estateNameCode].contactnumberAndEmail = _contactnumberAndEmail;
        EstateIndex[EstateArray[_estateNameCode].index].contactnumberAndEmail = _contactnumberAndEmail;
        emit LogUpdateEstate(
            _estateNameCode,
            EstateArray[_estateNameCode].index,
            _estateName,
            EstateArray[_estateNameCode].estateAddress,
            EstateArray[_estateNameCode].ownerName,
            _contactnumberAndEmail,
            EstateArray[_estateNameCode].estateAccess,
            EstateArray[_estateNameCode].rate,
            EstateArray[_estateNameCode].unit
            );
        return true;
    }
    function updateEstate(
        string memory _estateName,
        uint[] memory index,
        string memory _estateAddress,
        string memory _ownerName,
        string memory _contactnumberAndEmail
        ) public returns(bool success){
        bytes32 _estateNameCode = keccak256(abi.encodePacked((_estateName)));
        require(isEstate(_estateNameCode) == true,'estate not in system');
        uint i;
        uint num = EstateArray[_estateNameCode].index;

        for (i = 0;i<index.length;i++){
            if(index[i]==1){
                EstateArray[_estateNameCode].estateAddress = _estateAddress;
                EstateIndex[num].estateAddress = _estateAddress;
                emit LogUpdateEstate(
                    _estateNameCode,
                    EstateArray[_estateNameCode].index,
                    _estateName,
                    _estateAddress,
                    EstateArray[_estateNameCode].ownerName,
                    EstateArray[_estateNameCode].contactnumberAndEmail,
                    EstateArray[_estateNameCode].estateAccess,
                    EstateArray[_estateNameCode].rate,
                    EstateArray[_estateNameCode].unit
                    );

            }
            else if(index[i]==2){
                EstateArray[_estateNameCode].ownerName = _ownerName;
                EstateIndex[num].ownerName = _ownerName;
                emit LogUpdateEstate(
                    _estateNameCode,
                    EstateArray[_estateNameCode].index,
                    _estateName,
                    EstateArray[_estateNameCode].estateAddress,
                    _ownerName,
                    EstateArray[_estateNameCode].contactnumberAndEmail,
                    EstateArray[_estateNameCode].estateAccess,
                    EstateArray[_estateNameCode].rate,
                    EstateArray[_estateNameCode].unit
                    );

            }
            else if(index[i]==3){
                EstateArray[_estateNameCode].contactnumberAndEmail = _contactnumberAndEmail;
                EstateIndex[num].contactnumberAndEmail = _contactnumberAndEmail;
                emit LogUpdateEstate(
                    _estateNameCode,
                    EstateArray[_estateNameCode].index,
                    _estateName,
                    EstateArray[_estateNameCode].estateAddress,
                    EstateArray[_estateNameCode].ownerName,
                    _contactnumberAndEmail,
                    EstateArray[_estateNameCode].estateAccess,
                    EstateArray[_estateNameCode].rate,
                    EstateArray[_estateNameCode].unit
                    );

            }
        }
        return true;
    }
    function editUserAccess(string memory _estateName,uint estateAccess)public returns(bool){
        bytes32 estateName = keccak256(abi.encodePacked((_estateName)));
        EstateArray[estateName].estateAccess = estateAccess;
        EstateIndex[EstateArray[estateName].index].estateAccess = estateAccess;
        return true;

    }
    ///////
    function updateEstateiestateName (string memory _estateName) public returns(bool success){
       // return true;
    }
    function rateEstate (string memory _estateName,uint _rate) public returns(bool success){
        bytes32 _estateNameCode = keccak256(abi.encodePacked((_estateName)));
        require(isEstate(_estateNameCode) == true,'estate not in system');
        uint nrate = (_rate+EstateArray[_estateNameCode].rate*EstateArray[_estateNameCode].unit)/(EstateArray[_estateNameCode].unit+1);
        EstateArray[_estateNameCode].unit = EstateArray[_estateNameCode].unit + 1;
        EstateArray[_estateNameCode].rate = nrate;
        EstateIndex[EstateArray[_estateNameCode].index].rate = nrate;
        emit LogUpdateEstate(
            _estateNameCode,
            EstateArray[_estateNameCode].index,
            _estateName,
            EstateArray[_estateNameCode].estateAddress,
            EstateArray[_estateNameCode].ownerName,
            EstateArray[_estateNameCode].contactnumberAndEmail,
            EstateArray[_estateNameCode].estateAccess,
            nrate,
            EstateArray[_estateNameCode].unit
            );
        return true;
    }
    // function createEstatePacket (string memory _estateName,uint _unit) public returns(bool success){
    //     bytes32 _estateNameCode = keccak256(abi.encodePacked((_estateName)));
    //     require(isEstate(_estateNameCode) == true,'estate not in system');
    //     EstateArray[_estateNameCode].rate = _rate;
    //     EstateIndex[EstateArray[_estateNameCode].index].rate = _rate;
    //     emit LogUpdateEstate(
    //         _estateNameCode,
    //         EstateArray[_estateNameCode].index,
    //         _estateName,
    //         EstateArray[_estateNameCode].estateAddress,
    //         EstateArray[_estateNameCode].ownerName,
    //         EstateArray[_estateNameCode].weight,
    //         EstateArray[_estateNameCode].estateAccess,
    //         _rate,
    //         EstateArray[_estateNameCode].contactnumberAndEmail,
    //         EstateArray[_estateNameCode].unit
    //         );
    //     return true;
    // }
}