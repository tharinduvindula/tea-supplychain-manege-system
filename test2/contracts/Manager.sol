pragma solidity >=0.4.21 <0.6.0;

contract ManagerContract {
     
    struct Manager{
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

    struct DisplayManager{
        bytes32 emailCode;
        string email;
        string name;
        uint contactNumber;
        string userAddress;
        uint userAccess;
    }
    
    event LogNewManager(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogUpdateManager(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogDeleteManager(
        bytes32 indexed emailcode,
        uint index
        );
        
    struct RegistationToken{
        bytes32 emailCode;
        bytes32 token;
    }
        
    mapping(bytes32 => Manager) private managerArray;
    DisplayManager[] private managerIndex;
    RegistationToken[] private managerRegistationToken;
    
    function isManager(bytes32 _emailCode)public view returns(bool isIndeed) {
        if(managerIndex.length == 0) return false;
        return (managerIndex[managerArray[_emailCode].index].emailCode == _emailCode);
    }
    function createManagerToken(bytes32 _emailCode)private returns(bytes32){
        bytes32 token = randomtoken();
        RegistationToken memory registationToken;
        registationToken.emailCode = _emailCode;
        registationToken.token = token;
        managerRegistationToken.push(registationToken);
        return token;
    }
    function randomtoken() private view returns (bytes32) {
       return keccak256(abi.encodePacked( block.timestamp, block.difficulty));
    }
    function setDisplayManager(bytes32 _emailCode,string memory _email,string memory _name) private returns(bool){

        DisplayManager memory displayManager;
        displayManager.emailCode = _emailCode;
        displayManager.email = _email;
        displayManager.name = _name;
        displayManager.contactNumber = 717615678;
        displayManager.userAddress = "1335,bogahawaththa Road,pannipitiya,colombo,sri lanka,10230";
        displayManager.userAccess = 1;
        managerIndex.push(displayManager);
        return true;

    }
    function insertManager(string memory _email,string memory _name) public returns(bytes32){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked(("a")));
        require(isManager(_emailCode) != true,'user allredy in system');

        managerArray[_emailCode].email = _email;
        managerArray[_emailCode].emailCode = _emailCode;
        managerArray[_emailCode].passwordCode = _passwordCode;
        managerArray[_emailCode].passwordRestToken = "";
        managerArray[_emailCode].name = _name;
        managerArray[_emailCode].contactNumber = 0;
        managerArray[_emailCode].userAddress = "";
        managerArray[_emailCode].userAccess = 1;
        setDisplayManager(_emailCode,_email,_name);
        managerArray[_emailCode].index = managerIndex.length-1;

        emit LogNewManager (
            _emailCode,
            managerArray[_emailCode].index,
            _email,
            managerArray[_emailCode].passwordCode,
            managerArray[_emailCode].passwordRestToken,
            _name,
            managerArray[_emailCode].contactNumber,
            managerArray[_emailCode].userAddress,
            managerArray[_emailCode].userAccess
            );
        return createManagerToken(_emailCode);
    }
    function deleteManager (bytes32 email) public returns(string memory){
        uint i;
        string memory name;
        for( i = 0; i < managerRegistationToken.length; i++) {
            if(managerRegistationToken[i].emailCode == email){
                managerRegistationToken[i].emailCode = managerRegistationToken[managerRegistationToken.length-1].emailCode;
                managerRegistationToken[i].token = managerRegistationToken[managerRegistationToken.length-1].token;
                managerRegistationToken.length--;
            }
        }
        managerArray[email].userAccess = 4;
        managerIndex[managerArray[email].index].userAccess = 4;
        name = managerIndex[managerArray[email].index].name;
        emit LogDeleteManager(
            email,
            managerArray[email].index
        );
        return name;
    }
    function blockManager(bytes32 email) public returns(string memory)
    {
        string memory name;
        managerArray[email].userAccess = 3;
        managerIndex[managerArray[email].index].userAccess = 3;
        name = managerIndex[managerArray[email].index].name;
        return name;
    }
    function getManager(string memory _email) public view returns(string memory email,string memory name,
    uint contactNumber,string memory userAddress, uint userAccess){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isManager(_emailCode) == true,'user not in system');
        return(
            managerArray[_emailCode].email,
            managerArray[_emailCode].name,
            managerArray[_emailCode].contactNumber,
            managerArray[_emailCode].userAddress,
            managerArray[_emailCode].userAccess
            );
    }
    function getManageri(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        uint,
        string memory,
        uint
        ){
            return (
                managerIndex[i].emailCode,
                managerIndex[i].email,
                managerIndex[i].name,
                managerIndex[i].contactNumber,
                managerIndex[i].userAddress,
                managerIndex[i].userAccess
                );
    }
    function getManagerCount() public view returns(uint)
    {
        return managerIndex.length;
    }
    
    // function updateUserEmail(address userAddress, bytes32 userEmail) public returns(bool success)
    // {
    //     userStructs[userAddress].userEmail = userEmail;
    //     emit LogUpdateUser(userAddress,  userStructs[userAddress].index, userEmail, userStructs[userAddress].userAge);
    //     return true;
    // }
    function updateDistributorName (string memory _email,string memory _name) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isManager(_emailCode) == true,'user not in system');
        managerArray[_emailCode].name = _name;
        managerIndex[managerArray[_emailCode].index].name = _name;
        emit LogUpdateManager(
            _emailCode,
            managerArray[_emailCode].index,
            _email,
            managerArray[_emailCode].passwordCode,
            managerArray[_emailCode].passwordRestToken,
            _name,
            managerArray[_emailCode].contactNumber,
            managerArray[_emailCode].userAddress,
            managerArray[_emailCode].userAccess
            );
        return true;
    }
    function updateManagerAddress (string memory _email,string memory _userAddress) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isManager(_emailCode) == true,'user not in system');
        managerArray[_emailCode].userAddress = _userAddress;
        managerIndex[managerArray[_emailCode].index].userAddress = _userAddress;
        emit LogUpdateManager(
            _emailCode,
            managerArray[_emailCode].index,
            _email,
            managerArray[_emailCode].passwordCode,
            managerArray[_emailCode].passwordRestToken,
            managerArray[_emailCode].name,
            managerArray[_emailCode].contactNumber,
            _userAddress,
            managerArray[_emailCode].userAccess
            );
        return true;
    }
    function updateManagerContactNumber (string memory _email,uint _contactNumber) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isManager(_emailCode) == true,'user not in system');
        managerArray[_emailCode].contactNumber = _contactNumber;
        managerIndex[managerArray[_emailCode].index].contactNumber = _contactNumber;
        emit LogUpdateManager(
            _emailCode,
            managerArray[_emailCode].index,
            _email,
            managerArray[_emailCode].passwordCode,
            managerArray[_emailCode].passwordRestToken,
            managerArray[_emailCode].name,
            _contactNumber,
            managerArray[_emailCode].userAddress,
            managerArray[_emailCode].userAccess
            );
        return true;
    }
    function updateManager(
        string memory _email,
        uint[] memory index,
        string memory _name,
        string memory _userAddress,
        uint _contactNumber
        ) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isManager(_emailCode) == true,'user not in system');
        uint i;
        uint num = managerArray[_emailCode].index;

        for (i = 0;i<index.length;i++){
            if(index[i]==1){
                managerArray[_emailCode].name = _name;
                managerIndex[num].name = _name;
                emit LogUpdateManager(
                    _emailCode,
                    managerArray[_emailCode].index,
                    _email,managerArray[_emailCode].passwordCode,
                    managerArray[_emailCode].passwordRestToken,
                    _name,
                    managerArray[_emailCode].contactNumber,
                    managerArray[_emailCode].userAddress,
                    managerArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==2){
                managerArray[_emailCode].userAddress = _userAddress;

                managerIndex[num].userAddress = _userAddress;

                emit LogUpdateManager(
                    _emailCode,
                    managerArray[_emailCode].index,
                    _email,
                    managerArray[_emailCode].passwordCode,
                    managerArray[_emailCode].passwordRestToken,
                    managerArray[_emailCode].name,
                    managerArray[_emailCode].contactNumber,
                    _userAddress,
                    managerArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==3){
                managerArray[_emailCode].contactNumber = _contactNumber;
                managerIndex[num].contactNumber = _contactNumber;
                emit LogUpdateManager(
                    _emailCode,
                    managerArray[_emailCode].index,
                    _email,
                    managerArray[_emailCode].passwordCode,
                    managerArray[_emailCode].passwordRestToken,
                    managerArray[_emailCode].name,
                    _contactNumber,
                    managerArray[_emailCode].userAddress,
                    managerArray[_emailCode].userAccess
                    );

            }
        }
        return true;
    }
    ///////
    function updateManagerEmail (string memory _email) public returns(bool success)
    {
       // return true;
    }
    
    function checkManagerUserAccess(bytes32 email)public view returns(uint userAccess){
        return managerArray[email].userAccess;
    }
    function checkManagerPasswordCode(bytes32 email) public view returns(bytes32 passwordCode){
        return managerArray[email].passwordCode;
    }
}