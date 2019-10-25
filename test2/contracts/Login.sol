pragma solidity >=0.4.21 <0.6.0;

contract Login {
    struct Packet{
        uint packetId;
        uint boxId;
        uint productId;
        uint rate;
        //
    }
    struct Box{
        uint boxtId;
        uint containerId;
        uint orderId;
    }
    struct Container{
        uint containerId;
        uint orderId;
        uint rate;

    }
    struct Order{
        uint packetId;
        uint orderId;
    }
    struct Product{
        uint packetId;
        uint orderId;
        uint rate;

    }
    struct Estate{
        uint packetId;
        uint orderId;
        uint rate;

    }

    struct Manager{
        string email;
        string firstName;
        string lastName;
        uint userType;
        bool userAccess;
    }
    struct Worker{
        string email;
        string firstName;
        string lastName;
        uint userType;
        bool userAccess;
    }
    struct Distributor{
        string email;
        string firstName;
        string lastName;
        string location;
        string countryIsoCode;
        uint userType;
        bool userAccess;

    }

    function scanDistributor(/*uint64 _boxtId,uint64 _distributorId*/)public pure returns(bool){
        // first map packet id and get packet location
        // second we store distributor id in box distributors array
        return true;
    }

    function scanPacket(/*uint64 _packetId*/)public pure returns(/* packetdtail*//*supply chin */bool){
        return true;
    }

    function log(string memory _email,string memory _password,uint _appId)public pure returns(bool){

        bytes32 email = keccak256(abi.encodePacked((_email)));
        bytes32 password = keccak256(abi.encodePacked((_password)));

        if(email == password){
            return true;
        }

        if(_appId==1){
            return true;
        }
        else if(_appId==2){
            return true;
        }
        else if(_appId == 3){
            return true;
        }
        else{
            return false;
        }
    }
    struct Admin{
        string email;
        bytes32 emailCode;
        bytes32 passwordCode;
        bytes32 passwordRestToken;
        string name;
        uint contactNumber;
        string userAddress;
        uint userType;
        uint userAccess;
        uint index;
    }

    struct DisplayAdmin{
        bytes32 emailCode;
        string email;
        string name;
        uint contactNumber;
        string userAddress;
        uint userAccess;
    }

    //mapping(address => UserStruct) private userStructs;
    //address[] private userIndex;

    //
     mapping(bytes32 => Admin) public adminArray;
     DisplayAdmin[] private userIndex;

    // event LogNewUser(address indexed userAddress, uint index, bytes32 userEmail, uint userAge);
    // event LogUpdateUser(address indexed userAddress, uint index, bytes32 userEmail, uint userAge);
    // event LogDeleteUser(address indexed userAddress, uint index);

    event LogNewAdmin(bytes32 indexed emailCode, uint index,string email, bytes32 passwordCode,
        bytes32 passwordRestToken,string name, uint contactNumber,string userAddress,
        uint userType,uint userAccess);
    event LogUpdateAdmin(bytes32 indexed emailCode, uint index,string email, bytes32 passwordCode,
        bytes32 passwordRestToken,string name, uint contactNumber,string userAddress,
        uint userType,uint userAccess);
        
    function setDisplayAdmin(bytes32 _emailCode,string memory _email,string memory _name) public returns(bool){
        
        DisplayAdmin memory displayAdmin;
        displayAdmin.emailCode =_emailCode;
        displayAdmin.email =_email;
        displayAdmin.name = _name;
        displayAdmin.contactNumber = 0;
        displayAdmin.userAddress = "";
        displayAdmin.userAccess = 1;
        userIndex.push(displayAdmin);
        return true;
        
    }
    

    function insertAdmin(string memory _email,string memory _name) public returns(uint index)
    {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        
        adminArray[_emailCode].email = _email;
        adminArray[_emailCode].emailCode = _emailCode;
        adminArray[_emailCode].passwordCode = "";
        adminArray[_emailCode].passwordRestToken = "";
        adminArray[_emailCode].name = _name;
        adminArray[_emailCode].contactNumber = 0;
        adminArray[_emailCode].userAddress = "";
        adminArray[_emailCode].userType = 1;
        adminArray[_emailCode].userAccess = 1;
        setDisplayAdmin(_emailCode,_email,_name);
        adminArray[_emailCode].index = userIndex.length-1;
        emit LogNewAdmin(
            _emailCode,
            adminArray[_emailCode].index,
            _email,
            adminArray[_emailCode].passwordCode,
            adminArray[_emailCode].passwordRestToken,
            _name,
            adminArray[_emailCode].contactNumber,
            adminArray[_emailCode].userAddress,
            adminArray[_emailCode].userType,
            adminArray[_emailCode].userAccess
            );
        return userIndex.length-1;
    }

//    function deleteUser(address userAddress) public returns(uint index)
//     {
//         uint rowToDelete = userStructs[userAddress].index;
//         address keyToMove = userIndex[userIndex.length-1];
//         userIndex[rowToDelete] = keyToMove;
//         userStructs[keyToMove].index = rowToDelete;
//         userIndex.length--;
//         emit LogDeleteUser(userAddress, rowToDelete);
//         emit LogUpdateUser(keyToMove,  rowToDelete,  userStructs[keyToMove].userEmail,  userStructs[keyToMove].userAge);
//         return rowToDelete;
//     }
    function getAdmin(string memory _email) public view returns(string memory email,string memory name,
    uint contactNumber,string memory userAddress, uint userAccess)
    {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        return(  
            adminArray[_emailCode].email,
            adminArray[_emailCode].name,
            adminArray[_emailCode].contactNumber,
            adminArray[_emailCode].userAddress,
            adminArray[_emailCode].userAccess);
    }
    // function updateUserEmail(address userAddress, bytes32 userEmail) public returns(bool success)
    // {
    //     userStructs[userAddress].userEmail = userEmail;
    //     emit LogUpdateUser(userAddress,  userStructs[userAddress].index, userEmail, userStructs[userAddress].userAge);
    //     return true;
    // }
    function updateAdminAddress (string memory _email,string memory _userAddress,uint _contactNumber) public returns(bool success)
    {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        
        adminArray[_emailCode].userAddress = _userAddress;
        adminArray[_emailCode].contactNumber = _contactNumber;
        emit LogUpdateAdmin(_emailCode, adminArray[_emailCode].index,_email,adminArray[_emailCode].passwordCode,adminArray[_emailCode].passwordRestToken,
        adminArray[_emailCode].name,_contactNumber,_userAddress,adminArray[_emailCode].userType,adminArray[_emailCode].userAccess);
        return true;
    }

    function getUserCount() public view returns(uint count)
    {
        return userIndex.length;
    }

}