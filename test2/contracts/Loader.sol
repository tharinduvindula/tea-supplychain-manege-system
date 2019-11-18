pragma solidity >=0.4.21 <0.6.0;

contract LoaderContract {
    
    struct Loader{
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

    struct DisplayLoader{
        bytes32 emailCode;
        string email;
        string name;
        uint contactNumber;
        string userAddress;
        uint userAccess;
    }
    
    event LogNewLoader(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogUpdateLoader(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
        bytes32 passwordRestToken,
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogDeleteLoader(
        bytes32 indexed emailcode,
        uint index
        );
        
    struct RegistationToken{
        bytes32 emailCode;
        bytes32 token;
    }
        
    mapping(bytes32 => Loader) public loaderArray;
    DisplayLoader[] private loaderIndex;
    RegistationToken[] private loaderRegistationToken;
    
    function isLoader(bytes32 _emailCode)private view returns(bool isIndeed) {
        if(loaderIndex.length == 0) return false;
        return (loaderIndex[loaderArray[_emailCode].index].emailCode == _emailCode);
    }
    function createLoaderToken(bytes32 _emailCode)private returns(bytes32){
        bytes32 token = randomtoken();
        RegistationToken memory registationToken;
        registationToken.emailCode = _emailCode;
        registationToken.token = token;
        loaderRegistationToken.push(registationToken);
        return token;
    }
    function randomtoken() private view returns (bytes32) {
       return keccak256(abi.encodePacked( block.timestamp, block.difficulty));
    }
    function setDisplayLoader(bytes32 _emailCode,string memory _email,string memory _name) private returns(bool){

        DisplayLoader memory displayLoader;
        displayLoader.emailCode = _emailCode;
        displayLoader.email = _email;
        displayLoader.name = _name;
        displayLoader.contactNumber = 717615678;
        displayLoader.userAddress = "1335,bogahawaththa Road,pannipitiya,colombo,sri lanka,10230";
        displayLoader.userAccess = 1;
        loaderIndex.push(displayLoader);
        return true;

    }
    function insertLoader(string memory _email,string memory _name) public returns(bytes32){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked(("a")));
        require(isLoader(_emailCode) != true,'user allredy in system');

        loaderArray[_emailCode].email = _email;
        loaderArray[_emailCode].emailCode = _emailCode;
        loaderArray[_emailCode].passwordCode = _passwordCode;
        loaderArray[_emailCode].passwordRestToken = "";
        loaderArray[_emailCode].name = _name;
        loaderArray[_emailCode].contactNumber = 0;
        loaderArray[_emailCode].userAddress = "";
        loaderArray[_emailCode].userAccess = 1;
        setDisplayLoader(_emailCode,_email,_name);
        loaderArray[_emailCode].index = loaderIndex.length-1;

        emit LogNewLoader (
            _emailCode,
            loaderArray[_emailCode].index,
            _email,
            loaderArray[_emailCode].passwordCode,
            loaderArray[_emailCode].passwordRestToken,
            _name,
            loaderArray[_emailCode].contactNumber,
            loaderArray[_emailCode].userAddress,
            loaderArray[_emailCode].userAccess
            );
        return createLoaderToken(_emailCode);
    }
    function deleteLoader (bytes32 email) public returns(string memory){
        uint i;
        string memory name;
        for( i = 0; i < loaderRegistationToken.length; i++) {
            if(loaderRegistationToken[i].emailCode == email){
                loaderRegistationToken[i].emailCode = loaderRegistationToken[loaderRegistationToken.length-1].emailCode;
                loaderRegistationToken[i].token = loaderRegistationToken[loaderRegistationToken.length-1].token;
                loaderRegistationToken.length--;
            }
        }
        loaderArray[email].userAccess = 4;
        loaderIndex[loaderArray[email].index].userAccess = 4;
        name = loaderIndex[loaderArray[email].index].name;
        emit LogDeleteLoader(
            email,
            loaderArray[email].index
        );
        return name;
    }
    function blockLoader(bytes32 email) public returns(string memory)
    {
        string memory name;
        if(loaderArray[email].userAccess == 5){
        loaderArray[email].userAccess = 3;
        loaderIndex[loaderArray[email].index].userAccess = 3;
        name = loaderIndex[loaderArray[email].index].name;
        }
        if(loaderArray[email].userAccess == 3){
        loaderArray[email].userAccess = 5;
        loaderIndex[loaderArray[email].index].userAccess = 5;
        name = loaderIndex[loaderArray[email].index].name;
        }
        return name;
    }
    editUserAccess(string memory _email,uint usreAccess){
        bytes32 email = keccak256(abi.encodePacked((_email)));
        loaderArray[email].userAccess = userAccess;
        loaderIndex[loaderArray[email].index].userAccess = userAccess;

    }
    function getLoader(string memory _email) public view returns(string memory email,string memory name,
    uint contactNumber,string memory userAddress, uint userAccess){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isLoader(_emailCode) == true,'user not in system');
        return(
            _emailCode,
            loaderArray[_emailCode].email,
            loaderArray[_emailCode].name,
            loaderArray[_emailCode].contactNumber,
            loaderArray[_emailCode].userAddress,
            loaderArray[_emailCode].userAccess
            );
    }
    function getLoaderi(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        uint,
        string memory,
        uint
        ){
            return (
                loaderIndex[i].emailCode,
                loaderIndex[i].email,
                loaderIndex[i].name,
                loaderIndex[i].contactNumber,
                loaderIndex[i].userAddress,
                loaderIndex[i].userAccess
                );
    }
    function getLoaderCount() public view returns(uint)
    {
        return loaderIndex.length;
    }
    
    // function updateUserEmail(address userAddress, bytes32 userEmail) public returns(bool success)
    // {
    //     userStructs[userAddress].userEmail = userEmail;
    //     emit LogUpdateUser(userAddress,  userStructs[userAddress].index, userEmail, userStructs[userAddress].userAge);
    //     return true;
    // }
    function updateDistributorName (string memory _email,string memory _name) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isLoader(_emailCode) == true,'user not in system');
        loaderArray[_emailCode].name = _name;
        loaderIndex[loaderArray[_emailCode].index].name = _name;
        emit LogUpdateLoader(
            _emailCode,
            loaderArray[_emailCode].index,
            _email,
            loaderArray[_emailCode].passwordCode,
            loaderArray[_emailCode].passwordRestToken,
            _name,
            loaderArray[_emailCode].contactNumber,
            loaderArray[_emailCode].userAddress,
            loaderArray[_emailCode].userAccess
            );
        return true;
    }
    function updateLoaderAddress (string memory _email,string memory _userAddress) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isLoader(_emailCode) == true,'user not in system');
        loaderArray[_emailCode].userAddress = _userAddress;
        loaderIndex[loaderArray[_emailCode].index].userAddress = _userAddress;
        emit LogUpdateLoader(
            _emailCode,
            loaderArray[_emailCode].index,
            _email,
            loaderArray[_emailCode].passwordCode,
            loaderArray[_emailCode].passwordRestToken,
            loaderArray[_emailCode].name,
            loaderArray[_emailCode].contactNumber,
            _userAddress,
            loaderArray[_emailCode].userAccess
            );
        return true;
    }
    function updateLoaderContactNumber (string memory _email,uint _contactNumber) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isLoader(_emailCode) == true,'user not in system');
        loaderArray[_emailCode].contactNumber = _contactNumber;
        loaderIndex[loaderArray[_emailCode].index].contactNumber = _contactNumber;
        emit LogUpdateLoader(
            _emailCode,
            loaderArray[_emailCode].index,
            _email,
            loaderArray[_emailCode].passwordCode,
            loaderArray[_emailCode].passwordRestToken,
            loaderArray[_emailCode].name,
            _contactNumber,
            loaderArray[_emailCode].userAddress,
            loaderArray[_emailCode].userAccess
            );
        return true;
    }
    function updateLoader(
        string memory _email,
        uint[] memory index,
        string memory _name,
        string memory _userAddress,
        uint _contactNumber
        ) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isLoader(_emailCode) == true,'user not in system');
        uint i;
        uint num = loaderArray[_emailCode].index;

        for (i = 0;i<index.length;i++){
            if(index[i]==1){
                loaderArray[_emailCode].name = _name;
                loaderIndex[num].name = _name;
                emit LogUpdateLoader(
                    _emailCode,
                    loaderArray[_emailCode].index,
                    _email,loaderArray[_emailCode].passwordCode,
                    loaderArray[_emailCode].passwordRestToken,
                    _name,
                    loaderArray[_emailCode].contactNumber,
                    loaderArray[_emailCode].userAddress,
                    loaderArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==2){
                loaderArray[_emailCode].userAddress = _userAddress;

                loaderIndex[num].userAddress = _userAddress;

                emit LogUpdateLoader(
                    _emailCode,
                    loaderArray[_emailCode].index,
                    _email,
                    loaderArray[_emailCode].passwordCode,
                    loaderArray[_emailCode].passwordRestToken,
                    loaderArray[_emailCode].name,
                    loaderArray[_emailCode].contactNumber,
                    _userAddress,
                    loaderArray[_emailCode].userAccess
                    );

            }
            else if(index[i]==3){
                loaderArray[_emailCode].contactNumber = _contactNumber;
                loaderIndex[num].contactNumber = _contactNumber;
                emit LogUpdateLoader(
                    _emailCode,
                    loaderArray[_emailCode].index,
                    _email,
                    loaderArray[_emailCode].passwordCode,
                    loaderArray[_emailCode].passwordRestToken,
                    loaderArray[_emailCode].name,
                    _contactNumber,
                    loaderArray[_emailCode].userAddress,
                    loaderArray[_emailCode].userAccess
                    );

            }
        }
        return true;
    }
    ///////
    function updateLoaderEmail (string memory _email) public returns(bool success)
    {
       // return true;
    }
    
    function checkLoaderUserAccess(bytes32 email)public view returns(uint userAccess){
        
        return loaderArray[email].userAccess;
    }
    function checkLoaderPasswordCode(bytes32 email) public view returns(bytes32 passwordCode ){
        return loaderArray[email].passwordCode;
    }
}