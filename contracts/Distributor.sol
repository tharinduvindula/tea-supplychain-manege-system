pragma solidity >=0.4.21 <0.6.0;

contract DistributorContract {
    
    struct Distributor{
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

    struct DisplayDistributor{
        bytes32 emailCode;
        string email;
        string name;
        uint contactNumber;
        string userAddress;
        uint userAccess;
    }
    
    event LogNewDistributor(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogUpdateDistributor(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogDeleteDistributor(
        bytes32 indexed emailcode,
        uint index
        );
        
    struct RegistationToken{
        bytes32 emailCode;
        bytes32 token;
    }
        
    mapping(bytes32 => Distributor) public distributorArray;
    DisplayDistributor[] private distributorIndex;
    RegistationToken[] private distributorRegistationToken;
    
    function isDistributor(bytes32 _emailCode)public view returns(bool isIndeed) {
        if(distributorIndex.length == 0) return false;
        return (distributorIndex[distributorArray[_emailCode].index].emailCode == _emailCode);
    }
    function createDistributorToken(bytes32 _emailCode)private returns(bytes32){
        bytes32 token = randomtoken();
        RegistationToken memory registationToken;
        registationToken.emailCode = _emailCode;
        registationToken.token = token;
        distributorRegistationToken.push(registationToken);
        return token;
    }
    function randomtoken() private view returns (bytes32) {
       return keccak256(abi.encodePacked( block.timestamp, block.difficulty));
    }
    function setDisplayDistributor(bytes32 _emailCode,string memory _email,string memory _name,uint _telephone,string memory _address)
     private returns(bool){

        DisplayDistributor memory displayDistributor;
        displayDistributor.emailCode = _emailCode;
        displayDistributor.email = _email;
        displayDistributor.name = _name;
        displayDistributor.contactNumber = _telephone;
        displayDistributor.userAddress = _address;
        displayDistributor.userAccess = 1;
        distributorIndex.push(displayDistributor);
        return true;

    }
    function insertDistributor(string memory _email,string memory _name,string memory _address,uint _telephone) public returns(bool){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked(("a")));
        require(isDistributor(_emailCode) != true,'user allredy in system');

        distributorArray[_emailCode].email = _email;
        distributorArray[_emailCode].emailCode = _emailCode;
        distributorArray[_emailCode].passwordCode = _passwordCode;
        distributorArray[_emailCode].passwordRestToken = createDistributorToken(_emailCode);
        distributorArray[_emailCode].name = _name;
        distributorArray[_emailCode].contactNumber = _telephone;
        distributorArray[_emailCode].userAddress = _address;
        distributorArray[_emailCode].userAccess = 1;
        setDisplayDistributor(_emailCode,_email,_name,_telephone,_address);
        distributorArray[_emailCode].index = distributorIndex.length-1;

        emit LogNewDistributor (
            _emailCode,
            distributorArray[_emailCode].index,
            _email,
            distributorArray[_emailCode].passwordCode,
            distributorArray[_emailCode].passwordRestToken,
            _name,
            _telephone,
            _address,
            distributorArray[_emailCode].userAccess
            );
        return true;
    }
    function deleteDistributor (bytes32 email) public returns(string memory){
        uint i;
        string memory name;
        for( i = 0; i < distributorRegistationToken.length; i++) {
            if(distributorRegistationToken[i].emailCode == email){
                distributorRegistationToken[i].emailCode = distributorRegistationToken[distributorRegistationToken.length-1].emailCode;
                distributorRegistationToken[i].token = distributorRegistationToken[distributorRegistationToken.length-1].token;
                distributorRegistationToken.length--;
            }
        }
        distributorArray[email].userAccess = 4;
        distributorIndex[distributorArray[email].index].userAccess = 4;
        name = distributorIndex[distributorArray[email].index].name;
        emit LogDeleteDistributor(
            email,
            distributorArray[email].index
        );
        return name;
    }
    function blockDistributor(bytes32 email) public returns(string memory)
    {
        string memory name;
        if(distributorArray[email].userAccess == 5){
        distributorArray[email].userAccess = 3;
        distributorIndex[distributorArray[email].index].userAccess = 3;
        name = distributorIndex[distributorArray[email].index].name;
        }
        if(distributorArray[email].userAccess == 3){
        distributorArray[email].userAccess = 5;
        distributorIndex[distributorArray[email].index].userAccess = 5;
        name = distributorIndex[distributorArray[email].index].name;
        }
        return name;
    }
    function editUserAccess(string memory _email,uint usreAccess)public returns(bool){
        bytes32 email = keccak256(abi.encodePacked((_email)));
        distributorArray[email].userAccess = usreAccess;
        distributorIndex[distributorArray[email].index].userAccess = usreAccess;
        return true;

    }
    function getDistributor(string memory _email) public view returns(bytes32,string memory email,string memory name,
    uint contactNumber,string memory userAddress, uint userAccess){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isDistributor(_emailCode) == true,'user not in system');
        return(
            _emailCode,
            distributorArray[_emailCode].email,
            distributorArray[_emailCode].name,
            distributorArray[_emailCode].contactNumber,
            distributorArray[_emailCode].userAddress,
            distributorArray[_emailCode].userAccess
            );
    }
    function getDistributori(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        uint,
        string memory,
        uint
        ){
            return (
                distributorIndex[i].emailCode,
                distributorIndex[i].email,
                distributorIndex[i].name,
                distributorIndex[i].contactNumber,
                distributorIndex[i].userAddress,
                distributorIndex[i].userAccess
                );
    }
    function getDistributorCount() public view returns(uint)
    {
        return distributorIndex.length;
    }
    
    // function updateUserEmail(address userAddress, bytes32 userEmail) public returns(bool success)
    // {
    //     userStructs[userAddress].userEmail = userEmail;
    //     emit LogUpdateUser(userAddress,  userStructs[userAddress].index, userEmail, userStructs[userAddress].userAge);
    //     return true;
    // }
    function updateDistributorName (string memory _email,string memory _name) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isDistributor(_emailCode) == true,'user not in system');
        distributorArray[_emailCode].name = _name;
        distributorIndex[distributorArray[_emailCode].index].name = _name;
        emit LogUpdateDistributor(
            _emailCode,
            distributorArray[_emailCode].index,
            _email,
            distributorArray[_emailCode].passwordCode,
            distributorArray[_emailCode].passwordRestToken,
            _name,
            distributorArray[_emailCode].contactNumber,
            distributorArray[_emailCode].userAddress,
            distributorArray[_emailCode].userAccess
            );
        return true;
    }
    function updateDistributorAddress (string memory _email,string memory _userAddress) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isDistributor(_emailCode) == true,'user not in system');
        distributorArray[_emailCode].userAddress = _userAddress;
        distributorIndex[distributorArray[_emailCode].index].userAddress = _userAddress;
        emit LogUpdateDistributor(
            _emailCode,
            distributorArray[_emailCode].index,
            _email,
            distributorArray[_emailCode].passwordCode,
            distributorArray[_emailCode].passwordRestToken,
            distributorArray[_emailCode].name,
            distributorArray[_emailCode].contactNumber,
            _userAddress,
            distributorArray[_emailCode].userAccess
            );
        return true;
    }
    function updateDistributorContactNumber (string memory _email,uint _contactNumber) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isDistributor(_emailCode) == true,'user not in system');
        distributorArray[_emailCode].contactNumber = _contactNumber;
        distributorIndex[distributorArray[_emailCode].index].contactNumber = _contactNumber;
        emit LogUpdateDistributor(
            _emailCode,
            distributorArray[_emailCode].index,
            _email,
            distributorArray[_emailCode].passwordCode,
            distributorArray[_emailCode].passwordRestToken,
            distributorArray[_emailCode].name,
            _contactNumber,
            distributorArray[_emailCode].userAddress,
            distributorArray[_emailCode].userAccess
            );
        return true;
    }
    function updateDistributor(
        string memory _email,
        uint[] memory index,
        string memory _name,
        string memory _userAddress,
        uint _contactNumber
        ) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isDistributor(_emailCode) == true,'user not in system');
        uint i;
        uint num = distributorArray[_emailCode].index;

        for (i = 0;i<index.length;i++){
            if(index[i]==1){
                distributorArray[_emailCode].name = _name;
                distributorIndex[num].name = _name;
                emit LogUpdateDistributor(
                    _emailCode,
                    distributorArray[_emailCode].index,
                    _email,distributorArray[_emailCode].passwordCode,
                    distributorArray[_emailCode].passwordRestToken,
                    _name,
                    distributorArray[_emailCode].contactNumber,
                    distributorArray[_emailCode].userAddress,
                    distributorArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==2){
                distributorArray[_emailCode].userAddress = _userAddress;

                distributorIndex[num].userAddress = _userAddress;

                emit LogUpdateDistributor(
                    _emailCode,
                    distributorArray[_emailCode].index,
                    _email,
                    distributorArray[_emailCode].passwordCode,
                    distributorArray[_emailCode].passwordRestToken,
                    distributorArray[_emailCode].name,
                    distributorArray[_emailCode].contactNumber,
                    _userAddress,
                    distributorArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==3){
                distributorArray[_emailCode].contactNumber = _contactNumber;
                distributorIndex[num].contactNumber = _contactNumber;
                emit LogUpdateDistributor(
                    _emailCode,
                    distributorArray[_emailCode].index,
                    _email,
                    distributorArray[_emailCode].passwordCode,
                    distributorArray[_emailCode].passwordRestToken,
                    distributorArray[_emailCode].name,
                    _contactNumber,
                    distributorArray[_emailCode].userAddress,
                    distributorArray[_emailCode].userAccess
                    );

            }
        }
        return true;
    }
    ///////
    function updateDistributoriEmail (string memory _email) public returns(bool success)
    {
       // return true;
    }
    function checkDistributorUserAccess(bytes32 email)public view returns(uint userAccess){
        
        return distributorArray[email].userAccess;
    }
    function checkDistributorPasswordCode(bytes32 email) public view returns(bytes32 passwordCode ){
        return distributorArray[email].passwordCode;
    }
}