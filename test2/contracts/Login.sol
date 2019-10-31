pragma solidity >=0.4.21 <0.6.0;

contract Login {
    struct Packet{
        uint packetId;
        uint boxId;
        uint productId;
        uint rate;
    }
    struct Box{
        uint boxtId;
        uint containerId;
        uint orderId;
        uint[] distributorIndex;
        uint256[]  time;
    }
    struct Container{
        uint containerId;
        uint orderId;
        uint rate;
        uint[] distributorIndex;
        uint256[]  time;
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
            require(isUser(email),"dosen't macth this email");
            if(adminArray[email].passwordCode == password ){
                return true;
            } else{
                require(false,"dosen't macth this password");
            }
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
     mapping(uint => Box) public boxes;
     mapping(uint => Packet) public packets;
     DisplayAdmin[] private userIndex;

    // event LogNewUser(address indexed userAddress, uint index, bytes32 userEmail, uint userAge);
    // event LogUpdateUser(address indexed userAddress, uint index, bytes32 userEmail, uint userAge);
    // event LogDeleteUser(address indexed userAddress, uint index);

    event LogNewAdmin(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogUpdateAdmin(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );

    function isUser(bytes32 _emailCode)public view returns(bool isIndeed) {
        if(userIndex.length == 0) return false;
        return (userIndex[adminArray[_emailCode].index].emailCode == _emailCode);
   }

    function setDisplayAdmin(bytes32 _emailCode,string memory _email,string memory _name) public returns(bool){

        DisplayAdmin memory displayAdmin;
        displayAdmin.emailCode = _emailCode;
        displayAdmin.email = _email;
        displayAdmin.name = _name;
        displayAdmin.contactNumber = 717615678;
        displayAdmin.userAddress = "1335,bogahawaththa Road,pannipitiya,colombo,sri lanka,10230";
        displayAdmin.userAccess = 1;
        userIndex.push(displayAdmin);
        return true;

    }

    function insertAdmin(string memory _email,string memory _name) public returns(uint index)
    {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked(("")));
        require(isUser(_emailCode) != true,'user allredy in system');

        adminArray[_emailCode].email = _email;
        adminArray[_emailCode].emailCode = _emailCode;
        adminArray[_emailCode].passwordCode = _passwordCode;
        adminArray[_emailCode].passwordRestToken = "";
        adminArray[_emailCode].name = _name;
        adminArray[_emailCode].contactNumber = 0;
        adminArray[_emailCode].userAddress = "";
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
        require(isUser(_emailCode) == true,'user not in system');
        return(
            adminArray[_emailCode].email,
            adminArray[_emailCode].name,
            adminArray[_emailCode].contactNumber,
            adminArray[_emailCode].userAddress,
            adminArray[_emailCode].userAccess
            );
    }
    // function getAdmins() public view returns(string[] memory email){
    //     email = new string[](5);
    //     // string[] memory name;
    //     // uint[] memory contactNumber;
    //     // string[] memory userAddress;
    //     // uint[] memory userAccess;
    //      for (uint i = 0; i < userIndex.length; i++) {
    //         email[i] = userIndex[i].email;
    //     }
    // }
    function getAdmini(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        uint,
        string memory,
        uint
        ){
            return (
                userIndex[i].emailCode,
                userIndex[i].email,
                userIndex[i].name,
                userIndex[i].contactNumber,
                userIndex[i].userAddress,
                userIndex[i].userAccess
                );
    }
    // function updateUserEmail(address userAddress, bytes32 userEmail) public returns(bool success)
    // {
    //     userStructs[userAddress].userEmail = userEmail;
    //     emit LogUpdateUser(userAddress,  userStructs[userAddress].index, userEmail, userStructs[userAddress].userAge);
    //     return true;
    // }
    function updateAdminName (string memory _email,string memory _name) public returns(bool success)
    {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isUser(_emailCode) == true,'user not in system');
        adminArray[_emailCode].name = _name;
        userIndex[adminArray[_emailCode].index].name = _name;
        emit LogUpdateAdmin(
            _emailCode,
            adminArray[_emailCode].index,
            _email,
            adminArray[_emailCode].passwordCode,
            adminArray[_emailCode].passwordRestToken,
            _name,
            adminArray[_emailCode].contactNumber,
            adminArray[_emailCode].userAddress,
            adminArray[_emailCode].userAccess
            );
        return true;
    }
    function updateAdminAddress (string memory _email,string memory _userAddress) public returns(bool success)
    {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isUser(_emailCode) == true,'user not in system');
        adminArray[_emailCode].userAddress = _userAddress;
        userIndex[adminArray[_emailCode].index].userAddress = _userAddress;
        emit LogUpdateAdmin(
            _emailCode,
            adminArray[_emailCode].index,
            _email,
            adminArray[_emailCode].passwordCode,
            adminArray[_emailCode].passwordRestToken,
            adminArray[_emailCode].name,
            adminArray[_emailCode].contactNumber,
            _userAddress,
            adminArray[_emailCode].userAccess
            );
        return true;
    }
     function updateAdminContactNumber (string memory _email,uint _contactNumber) public returns(bool success)
    {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isUser(_emailCode) == true,'user not in system');
        adminArray[_emailCode].contactNumber = _contactNumber;
        userIndex[adminArray[_emailCode].index].contactNumber = _contactNumber;
        emit LogUpdateAdmin(
            _emailCode,
            adminArray[_emailCode].index,
            _email,
            adminArray[_emailCode].passwordCode,
            adminArray[_emailCode].passwordRestToken,
            adminArray[_emailCode].name,
            _contactNumber,
            adminArray[_emailCode].userAddress,
            adminArray[_emailCode].userAccess
            );
        return true;
    }
    function updateAdmin(
        string memory _email,
        uint[] memory index,
        string memory _name,
        string memory _userAddress,
        uint _contactNumber
        ) public returns(bool success)
    {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isUser(_emailCode) == true,'user not in system');
        uint i;
        uint num = adminArray[_emailCode].index;

        for (i = 0;i<index.length;i++){
            if(index[i]==1){
                adminArray[_emailCode].name = _name;
                userIndex[num].name = _name;
                emit LogUpdateAdmin(
                    _emailCode,
                    adminArray[_emailCode].index,
                    _email,adminArray[_emailCode].passwordCode,
                    adminArray[_emailCode].passwordRestToken,
                    _name,
                    adminArray[_emailCode].contactNumber,
                    adminArray[_emailCode].userAddress,
                    adminArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==2){
                adminArray[_emailCode].userAddress = _userAddress;

                userIndex[num].userAddress = _userAddress;

                emit LogUpdateAdmin(
                    _emailCode,
                    adminArray[_emailCode].index,
                    _email,
                    adminArray[_emailCode].passwordCode,
                    adminArray[_emailCode].passwordRestToken,
                    adminArray[_emailCode].name,
                    adminArray[_emailCode].contactNumber,
                    _userAddress,
                    adminArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==3){
                adminArray[_emailCode].contactNumber = _contactNumber;
                userIndex[num].contactNumber = _contactNumber;
                emit LogUpdateAdmin(
                    _emailCode,
                    adminArray[_emailCode].index,
                    _email,
                    adminArray[_emailCode].passwordCode,
                    adminArray[_emailCode].passwordRestToken,
                    adminArray[_emailCode].name,
                    _contactNumber,
                    adminArray[_emailCode].userAddress,
                    adminArray[_emailCode].userAccess
                    );

            }
        }
        return true;
    }


    function getUserCount() public view returns(uint)
    {
        return userIndex.length;
    }

    function createBox() public returns(bool){

    }

    function creatPacket() public returns(bool){

    }
}