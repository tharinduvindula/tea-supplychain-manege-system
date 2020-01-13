pragma solidity >=0.4.21 <0.6.0;

contract ManagerContract {

    struct Manager{
        string email;
        bytes32 emailCode;
        bytes32 passwordCode;
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
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogUpdateManager(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
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

    mapping(bytes32 => Manager) public managerArray;
    DisplayManager[] private managerIndex;
    mapping(bytes32 => RegistationToken) private managerRegistationToken;

    function isManager(bytes32 _emailCode)public view returns(bool isIndeed) {
        if(managerIndex.length == 0) return false;
        return (managerIndex[managerArray[_emailCode].index].emailCode == _emailCode);
    }
    function createManagerToken(string memory _email)public returns(bytes32){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 token = randomtoken();
        if(managerRegistationToken[_emailCode].emailCode != _emailCode){
            managerRegistationToken[_emailCode].emailCode = _emailCode;
        }
        managerRegistationToken[_emailCode].token = token;
        return token;
    }
    function getManagerToken(string memory _email)public view returns(bytes32){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        return  managerRegistationToken[_emailCode].token;
    }
    function checkManagerToken(string memory _email,bytes32 _token)public view returns(bool){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        return  (managerRegistationToken[_emailCode].token == _token);
    }
    function randomtoken() private view returns (bytes32) {
       return keccak256(abi.encodePacked(block.timestamp,block.difficulty,block.number));
    }
    function setPassword(string memory _email,string memory _password)public returns (bool) {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked((_password)));

        managerArray[_emailCode].passwordCode = _passwordCode;
        delete managerRegistationToken[_emailCode];
        managerArray[_emailCode].userAccess = 5;
        managerIndex[managerArray[_emailCode].index].userAccess = 5;
        emit LogUpdateManager(
            _emailCode,
            managerArray[_emailCode].index,
            _email,
            _passwordCode,
            managerArray[_emailCode].name,
            managerArray[_emailCode].contactNumber,
            managerArray[_emailCode].userAddress,
            5
            );
        return true;

    }
    function setDisplayManager(bytes32 _emailCode,string memory _email,string memory _name,uint _telephone,string memory _address)
     private returns(bool){

        DisplayManager memory displayManager;
        displayManager.emailCode = _emailCode;
        displayManager.email = _email;
        displayManager.name = _name;
        displayManager.contactNumber = _telephone;
        displayManager.userAddress = _address;
        displayManager.userAccess = 1;
        managerIndex.push(displayManager);
        return true;

    }
    function insertManager(string memory _email,string memory _name,string memory _address,uint _telephone) public returns(bool){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked(("a")));
        require(isManager(_emailCode) != true,'user allredy in system');

        managerArray[_emailCode].email = _email;
        managerArray[_emailCode].emailCode = _emailCode;
        managerArray[_emailCode].passwordCode = _passwordCode;
        managerArray[_emailCode].name = _name;
        managerArray[_emailCode].contactNumber = _telephone;
        managerArray[_emailCode].userAddress = _address;
        managerArray[_emailCode].userAccess = 1;
        setDisplayManager(_emailCode,_email,_name,_telephone,_address);
        managerArray[_emailCode].index = managerIndex.length-1;
        createManagerToken(_email);

        emit LogNewManager (
            _emailCode,
            managerArray[_emailCode].index,
            _email,
            managerArray[_emailCode].passwordCode,
            _name,
            _telephone,
            _address,
            managerArray[_emailCode].userAccess
            );
        return true;
    }
    function deleteManager (bytes32 email) public returns(string memory){
        uint i;
        string memory name;
        delete managerRegistationToken[email];
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
        if(managerArray[email].userAccess == 5){
        managerArray[email].userAccess = 3;
        managerIndex[managerArray[email].index].userAccess = 3;
        name = managerIndex[managerArray[email].index].name;
        }
        if(managerArray[email].userAccess == 3){
        managerArray[email].userAccess = 5;
        managerIndex[managerArray[email].index].userAccess = 5;
        name = managerIndex[managerArray[email].index].name;
        }
        return name;
    }
    function editUserAccess(string memory _email,uint usreAccess)public returns(bool){
        bytes32 email = keccak256(abi.encodePacked((_email)));
        managerArray[email].userAccess = usreAccess;
        managerIndex[managerArray[email].index].userAccess = usreAccess;
        return true;

    }
    function getManager(string memory _email) public view returns(bytes32,string memory email,string memory name,
    uint contactNumber,string memory userAddress, uint userAccess){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isManager(_emailCode) == true,'user not in system');
        return(
            _emailCode,
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
    function updateManagerName (string memory _email,string memory _name) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isManager(_emailCode) == true,'user not in system');
        managerArray[_emailCode].name = _name;
        managerIndex[managerArray[_emailCode].index].name = _name;
        emit LogUpdateManager(
            _emailCode,
            managerArray[_emailCode].index,
            _email,
            managerArray[_emailCode].passwordCode,
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
    function updateManageriEmail (string memory _email) public returns(bool success)
    {
       // return true;
    }
    function checkManagerUserAccess(bytes32 email)public view returns(uint userAccess){
        
        return managerArray[email].userAccess;
    }
    function checkManagerPasswordCode(bytes32 email) public view returns(bytes32 passwordCode ){
        return managerArray[email].passwordCode;
    }
}