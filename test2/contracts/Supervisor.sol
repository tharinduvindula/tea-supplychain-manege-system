pragma solidity >=0.4.21 <0.6.0;

contract SupervisorContract {
    
    struct Supervisor{
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

    struct DisplaySupervisor{
        bytes32 emailCode;
        string email;
        string name;
        uint contactNumber;
        string userAddress;
        uint userAccess;
    }
    
    event LogNewSupervisor(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogUpdateSupervisor(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogDeleteSupervisor(
        bytes32 indexed emailcode,
        uint index
        );
        
    struct RegistationToken{
        bytes32 emailCode;
        bytes32 token;
    }
        
    mapping(bytes32 => Supervisor) public supervisorArray;
    DisplaySupervisor[] private supervisorIndex;
    RegistationToken[] private supervisorRegistationToken;
    
    function isSupervisor(bytes32 _emailCode)private view returns(bool isIndeed) {
        if(supervisorIndex.length == 0) return false;
        return (supervisorIndex[supervisorArray[_emailCode].index].emailCode == _emailCode);
    }
    function createSupervisorToken(bytes32 _emailCode)private returns(bytes32){
        bytes32 token = randomtoken();
        RegistationToken memory registationToken;
        registationToken.emailCode = _emailCode;
        registationToken.token = token;
        supervisorRegistationToken.push(registationToken);
        return token;
    }
    function randomtoken() private view returns (bytes32) {
       return keccak256(abi.encodePacked( block.timestamp, block.difficulty));
    }
    function setDisplaySupervisor(bytes32 _emailCode,string memory _email,string memory _name) private returns(bool){

        DisplaySupervisor memory displaySupervisor;
        displaySupervisor.emailCode = _emailCode;
        displaySupervisor.email = _email;
        displaySupervisor.name = _name;
        displaySupervisor.contactNumber = 717615678;
        displaySupervisor.userAddress = "1335,bogahawaththa Road,pannipitiya,colombo,sri lanka,10230";
        displaySupervisor.userAccess = 1;
        supervisorIndex.push(displaySupervisor);
        return true;

    }
    function insertSupervisor(string memory _email,string memory _name) public returns(bytes32){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked(("a")));
        require(isSupervisor(_emailCode) != true,'user allredy in system');

        supervisorArray[_emailCode].email = _email;
        supervisorArray[_emailCode].emailCode = _emailCode;
        supervisorArray[_emailCode].passwordCode = _passwordCode;
        supervisorArray[_emailCode].passwordRestToken = "";
        supervisorArray[_emailCode].name = _name;
        supervisorArray[_emailCode].contactNumber = 0;
        supervisorArray[_emailCode].userAddress = "";
        supervisorArray[_emailCode].userAccess = 1;
        setDisplaySupervisor(_emailCode,_email,_name);
        supervisorArray[_emailCode].index = supervisorIndex.length-1;

        emit LogNewSupervisor (
            _emailCode,
            supervisorArray[_emailCode].index,
            _email,
            supervisorArray[_emailCode].passwordCode,
            supervisorArray[_emailCode].passwordRestToken,
            _name,
            supervisorArray[_emailCode].contactNumber,
            supervisorArray[_emailCode].userAddress,
            supervisorArray[_emailCode].userAccess
            );
        return createSupervisorToken(_emailCode);
    }
    function deleteSupervisor (bytes32 email) public returns(string memory){
        uint i;
        string memory name;
        for( i = 0; i < supervisorRegistationToken.length; i++) {
            if(supervisorRegistationToken[i].emailCode == email){
                supervisorRegistationToken[i].emailCode = supervisorRegistationToken[supervisorRegistationToken.length-1].emailCode;
                supervisorRegistationToken[i].token = supervisorRegistationToken[supervisorRegistationToken.length-1].token;
                supervisorRegistationToken.length--;
            }
        }
        supervisorArray[email].userAccess = 4;
        supervisorIndex[supervisorArray[email].index].userAccess = 4;
        name = supervisorIndex[supervisorArray[email].index].name;
        emit LogDeleteSupervisor(
            email,
            supervisorArray[email].index
        );
        return name;
    }
    function blockSupervisor(bytes32 email) public returns(string memory)
    {
        string memory name;
        if(supervisorArray[email].userAccess == 5){
        supervisorArray[email].userAccess = 3;
        supervisorIndex[supervisorArray[email].index].userAccess = 3;
        name = supervisorIndex[supervisorArray[email].index].name;
        }
        if(supervisorArray[email].userAccess == 3){
        supervisorArray[email].userAccess = 5;
        supervisorIndex[supervisorArray[email].index].userAccess = 5;
        name = supervisorIndex[supervisorArray[email].index].name;
        }
        return name;
    }
    editUserAccess(string memory _email,uint usreAccess){
        bytes32 email = keccak256(abi.encodePacked((_email)));
        supervisorArray[email].userAccess = usreAccess;
        supervisorIndex[supervisorArray[email].index].userAccess = usreAccess;

    }
    function getSupervisor(string memory _email) public view returns(string memory email,string memory name,
    uint contactNumber,string memory userAddress, uint userAccess){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isSupervisor(_emailCode) == true,'user not in system');
        return(
            _emailCode,
            supervisorArray[_emailCode].email,
            supervisorArray[_emailCode].name,
            supervisorArray[_emailCode].contactNumber,
            supervisorArray[_emailCode].userAddress,
            supervisorArray[_emailCode].userAccess
            );
    }
    function getSupervisori(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        uint,
        string memory,
        uint
        ){
            return (
                supervisorIndex[i].emailCode,
                supervisorIndex[i].email,
                supervisorIndex[i].name,
                supervisorIndex[i].contactNumber,
                supervisorIndex[i].userAddress,
                supervisorIndex[i].userAccess
                );
    }
    function getSupervisorCount() public view returns(uint)
    {
        return supervisorIndex.length;
    }
    
    // function updateUserEmail(address userAddress, bytes32 userEmail) public returns(bool success)
    // {
    //     userStructs[userAddress].userEmail = userEmail;
    //     emit LogUpdateUser(userAddress,  userStructs[userAddress].index, userEmail, userStructs[userAddress].userAge);
    //     return true;
    // }
    function updateDistributorName (string memory _email,string memory _name) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isSupervisor(_emailCode) == true,'user not in system');
        supervisorArray[_emailCode].name = _name;
        supervisorIndex[supervisorArray[_emailCode].index].name = _name;
        emit LogUpdateSupervisor(
            _emailCode,
            supervisorArray[_emailCode].index,
            _email,
            supervisorArray[_emailCode].passwordCode,
            supervisorArray[_emailCode].passwordRestToken,
            _name,
            supervisorArray[_emailCode].contactNumber,
            supervisorArray[_emailCode].userAddress,
            supervisorArray[_emailCode].userAccess
            );
        return true;
    }
    function updateSupervisorAddress (string memory _email,string memory _userAddress) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isSupervisor(_emailCode) == true,'user not in system');
        supervisorArray[_emailCode].userAddress = _userAddress;
        supervisorIndex[supervisorArray[_emailCode].index].userAddress = _userAddress;
        emit LogUpdateSupervisor(
            _emailCode,
            supervisorArray[_emailCode].index,
            _email,
            supervisorArray[_emailCode].passwordCode,
            supervisorArray[_emailCode].passwordRestToken,
            supervisorArray[_emailCode].name,
            supervisorArray[_emailCode].contactNumber,
            _userAddress,
            supervisorArray[_emailCode].userAccess
            );
        return true;
    }
    function updateSupervisorContactNumber (string memory _email,uint _contactNumber) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isSupervisor(_emailCode) == true,'user not in system');
        supervisorArray[_emailCode].contactNumber = _contactNumber;
        supervisorIndex[supervisorArray[_emailCode].index].contactNumber = _contactNumber;
        emit LogUpdateSupervisor(
            _emailCode,
            supervisorArray[_emailCode].index,
            _email,
            supervisorArray[_emailCode].passwordCode,
            supervisorArray[_emailCode].passwordRestToken,
            supervisorArray[_emailCode].name,
            _contactNumber,
            supervisorArray[_emailCode].userAddress,
            supervisorArray[_emailCode].userAccess
            );
        return true;
    }
    function updateSupervisor(
        string memory _email,
        uint[] memory index,
        string memory _name,
        string memory _userAddress,
        uint _contactNumber
        ) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isSupervisor(_emailCode) == true,'user not in system');
        uint i;
        uint num = supervisorArray[_emailCode].index;

        for (i = 0;i<index.length;i++){
            if(index[i]==1){
                supervisorArray[_emailCode].name = _name;
                supervisorIndex[num].name = _name;
                emit LogUpdateSupervisor(
                    _emailCode,
                    supervisorArray[_emailCode].index,
                    _email,supervisorArray[_emailCode].passwordCode,
                    supervisorArray[_emailCode].passwordRestToken,
                    _name,
                    supervisorArray[_emailCode].contactNumber,
                    supervisorArray[_emailCode].userAddress,
                    supervisorArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==2){
                supervisorArray[_emailCode].userAddress = _userAddress;

                supervisorIndex[num].userAddress = _userAddress;

                emit LogUpdateSupervisor(
                    _emailCode,
                    supervisorArray[_emailCode].index,
                    _email,
                    supervisorArray[_emailCode].passwordCode,
                    supervisorArray[_emailCode].passwordRestToken,
                    supervisorArray[_emailCode].name,
                    supervisorArray[_emailCode].contactNumber,
                    _userAddress,
                    supervisorArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==3){
                supervisorArray[_emailCode].contactNumber = _contactNumber;
                supervisorIndex[num].contactNumber = _contactNumber;
                emit LogUpdateSupervisor(
                    _emailCode,
                    supervisorArray[_emailCode].index,
                    _email,
                    supervisorArray[_emailCode].passwordCode,
                    supervisorArray[_emailCode].passwordRestToken,
                    supervisorArray[_emailCode].name,
                    _contactNumber,
                    supervisorArray[_emailCode].userAddress,
                    supervisorArray[_emailCode].userAccess
                    );

            }
        }
        return true;
    }
    ///////
    function updateSupervisorEmail (string memory _email) public returns(bool success)
    {
       // return true;
    }
    
    function checkSupervisorUserAccess(bytes32 email)public view returns(uint userAccess){
        return supervisorArray[email].userAccess;
    }
    function checkSupervisorPasswordCode(bytes32 email) public view returns(bytes32 passwordCode){
        return supervisorArray[email].passwordCode;
    }
}