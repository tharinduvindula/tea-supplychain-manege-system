pragma solidity >=0.4.21 <0.6.0;

contract AdminContract {
    
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
    event LogDeleteAdmin(
        bytes32 indexed emailcode,
        uint index
        );
        
    struct RegistationToken{
        bytes32 emailCode;
        bytes32 token;
    }
        
    mapping(bytes32 => Admin) public adminArray;
    DisplayAdmin[] private adminIndex;
    mapping(bytes32 => RegistationToken) private adminRegistationToken;
    
    function isAdmin(bytes32 _emailCode)public view returns(bool isIndeed) {
        if(adminIndex.length == 0) return false;
        return (adminIndex[adminArray[_emailCode].index].emailCode == _emailCode);
    }
    function isAdminx(string memory _email)public view returns(bool isIndeed) {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        if(adminIndex.length == 0) return false;
        return (adminIndex[adminArray[_emailCode].index].emailCode == _emailCode);
    }
    function createAdminToken(bytes32 _emailCode)public returns(bytes32){
        bytes32 token = randomtoken();
        if(adminRegistationToken[_emailCode].emailCode != _emailCode){
            adminRegistationToken[_emailCode].emailCode = _emailCode;
        }
        adminRegistationToken[_emailCode].token = token;
        return token;
    }
    function randomtoken() private view returns (bytes32) {
       return keccak256(abi.encodePacked( block.timestamp, block.difficulty));
    }
    function setDisplayAdmin(bytes32 _emailCode,string memory _email,string memory _name,uint _telephone,string memory _address)
     private returns(bool){

        DisplayAdmin memory displayAdmin;
        displayAdmin.emailCode = _emailCode;
        displayAdmin.email = _email;
        displayAdmin.name = _name;
        displayAdmin.contactNumber = _telephone;
        displayAdmin.userAddress = _address;
        displayAdmin.userAccess = 1;
        adminIndex.push(displayAdmin);
        return true;

    }
    function insertAdmin(string memory _email,string memory _name,string memory _address,uint _telephone) public returns(bool){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked(("a")));
        require(isAdmin(_emailCode) != true,'user allredy in system');

        adminArray[_emailCode].email = _email;
        adminArray[_emailCode].emailCode = _emailCode;
        adminArray[_emailCode].passwordCode = _passwordCode;
        adminArray[_emailCode].passwordRestToken = createAdminToken(_emailCode);
        adminArray[_emailCode].name = _name;
        adminArray[_emailCode].contactNumber = _telephone;
        adminArray[_emailCode].userAddress = _address;
        adminArray[_emailCode].userAccess = 1;
        setDisplayAdmin(_emailCode,_email,_name,_telephone,_address);
        adminArray[_emailCode].index = adminIndex.length-1;

        emit LogNewAdmin (
            _emailCode,
            adminArray[_emailCode].index,
            _email,
            adminArray[_emailCode].passwordCode,
            adminArray[_emailCode].passwordRestToken,
            _name,
            _telephone,
            _address,
            adminArray[_emailCode].userAccess
            );
        return true;
    }
    function deleteAdmin (bytes32 email) public returns(string memory){
        uint i;
        string memory name;
        delete adminRegistationToken[email];
        adminArray[email].userAccess = 4;
        adminIndex[adminArray[email].index].userAccess = 4;
        name = adminIndex[adminArray[email].index].name;
        emit LogDeleteAdmin(
            email,
            adminArray[email].index
        );
        return name;
    }
    function blockAdmin(bytes32 email) public returns(string memory)
    {
        string memory name;
        if(adminArray[email].userAccess == 5){
        adminArray[email].userAccess = 3;
        adminIndex[adminArray[email].index].userAccess = 3;
        name = adminIndex[adminArray[email].index].name;
        }
        if(adminArray[email].userAccess == 3){
        adminArray[email].userAccess = 5;
        adminIndex[adminArray[email].index].userAccess = 5;
        name = adminIndex[adminArray[email].index].name;
        }
        return name;
    }
    function editUserAccess(string memory _email,uint usreAccess)public returns(bool){
        bytes32 email = keccak256(abi.encodePacked((_email)));
        adminArray[email].userAccess = usreAccess;
        adminIndex[adminArray[email].index].userAccess = usreAccess;
        return true;

    }
    function getAdmin(string memory _email) public view returns(bytes32,string memory email,string memory name,
    uint contactNumber,string memory userAddress, uint userAccess){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isAdmin(_emailCode) == true,'user not in system');
        return(
            _emailCode,
            adminArray[_emailCode].email,
            adminArray[_emailCode].name,
            adminArray[_emailCode].contactNumber,
            adminArray[_emailCode].userAddress,
            adminArray[_emailCode].userAccess
            );
    }
    function getAdmini(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        uint,
        string memory,
        uint
        ){
            return (
                adminIndex[i].emailCode,
                adminIndex[i].email,
                adminIndex[i].name,
                adminIndex[i].contactNumber,
                adminIndex[i].userAddress,
                adminIndex[i].userAccess
                );
    }
    function getAdminCount() public view returns(uint)
    {
        return adminIndex.length;
    }
    
    // function updateUserEmail(address userAddress, bytes32 userEmail) public returns(bool success)
    // {
    //     userStructs[userAddress].userEmail = userEmail;
    //     emit LogUpdateUser(userAddress,  userStructs[userAddress].index, userEmail, userStructs[userAddress].userAge);
    //     return true;
    // }
    function updateAdminName (string memory _email,string memory _name) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isAdmin(_emailCode) == true,'user not in system');
        adminArray[_emailCode].name = _name;
        adminIndex[adminArray[_emailCode].index].name = _name;
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
    function updateAdminAddress (string memory _email,string memory _userAddress) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isAdmin(_emailCode) == true,'user not in system');
        adminArray[_emailCode].userAddress = _userAddress;
        adminIndex[adminArray[_emailCode].index].userAddress = _userAddress;
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
    function updateAdminContactNumber (string memory _email,uint _contactNumber) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isAdmin(_emailCode) == true,'user not in system');
        adminArray[_emailCode].contactNumber = _contactNumber;
        adminIndex[adminArray[_emailCode].index].contactNumber = _contactNumber;
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
        ) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isAdmin(_emailCode) == true,'user not in system');
        uint i;
        uint num = adminArray[_emailCode].index;

        for (i = 0;i<index.length;i++){
            if(index[i]==1){
                adminArray[_emailCode].name = _name;
                adminIndex[num].name = _name;
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

                adminIndex[num].userAddress = _userAddress;

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
                adminIndex[num].contactNumber = _contactNumber;
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
    ///////
    function updateAdminiEmail (string memory _email) public returns(bool success)
    {
       // return true;
    }
    function checkAdminUserAccess(bytes32 email)public view returns(uint userAccess){
        
        return adminArray[email].userAccess;
    }
    function checkAdminPasswordCode(bytes32 email) public view returns(bytes32 passwordCode ){
        return adminArray[email].passwordCode;
    }
}