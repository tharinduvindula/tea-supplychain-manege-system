pragma solidity >=0.4.21 <0.6.0;

contract LoaderContract {
    
    struct Loader{
        string email;
        bytes32 emailCode;
        bytes32 passwordCode;
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
        string name,
        uint contactNumber,
        string userAddress,
        uint userAccess
        );
    event LogUpdateLoader(
        bytes32 indexed emailCode,
        uint index,string email,
        bytes32 passwordCode,
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
    mapping(bytes32 => RegistationToken) private loaderRegistationToken;
    
    function isLoader(bytes32 _emailCode)public view returns(bool isIndeed) {
        if(loaderIndex.length == 0) return false;
        return (loaderIndex[loaderArray[_emailCode].index].emailCode == _emailCode);
    }
    function createLoaderToken(string memory _email)public returns(bytes32){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 token = randomtoken();
        if(loaderRegistationToken[_emailCode].emailCode != _emailCode){
            loaderRegistationToken[_emailCode].emailCode = _emailCode;
        }
        loaderRegistationToken[_emailCode].token = token;
        return token;
    }
    function getLoaderToken(string memory _email)public view returns(bytes32){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        return  loaderRegistationToken[_emailCode].token;
    }
    function checkLoaderToken(string memory _email,bytes32 _token)public view returns(bool){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        return  (loaderRegistationToken[_emailCode].token == _token);
    }
    function randomtoken() private view returns (bytes32) {
       return keccak256(abi.encodePacked(block.timestamp,block.difficulty,block.number));
    }
    function setPassword(string memory _email,string memory _password)public returns (bool) {
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked((_password)));

        loaderArray[_emailCode].passwordCode = _passwordCode;
        delete loaderRegistationToken[_emailCode];
        loaderArray[_emailCode].userAccess = 5;
        loaderIndex[loaderArray[_emailCode].index].userAccess = 5;
        emit LogUpdateLoader(
            _emailCode,
            loaderArray[_emailCode].index,
            _email,
            _passwordCode,
            loaderArray[_emailCode].name,
            loaderArray[_emailCode].contactNumber,
            loaderArray[_emailCode].userAddress,
            5
            );
        return true;

    }
    function setDisplayLoader(bytes32 _emailCode,string memory _email,string memory _name,uint _telephone,string memory _address)
     private returns(bool){

        DisplayLoader memory displayLoader;
        displayLoader.emailCode = _emailCode;
        displayLoader.email = _email;
        displayLoader.name = _name;
        displayLoader.contactNumber = _telephone;
        displayLoader.userAddress = _address;
        displayLoader.userAccess = 1;
        loaderIndex.push(displayLoader);
        return true;

    }
    function insertLoader(string memory _email,string memory _name,string memory _address,uint _telephone) public returns(bool){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        bytes32 _passwordCode = keccak256(abi.encodePacked(("a")));
        require(isLoader(_emailCode) != true,'user allredy in system');

        loaderArray[_emailCode].email = _email;
        loaderArray[_emailCode].emailCode = _emailCode;
        loaderArray[_emailCode].passwordCode = _passwordCode;
        loaderArray[_emailCode].name = _name;
        loaderArray[_emailCode].contactNumber = _telephone;
        loaderArray[_emailCode].userAddress = _address;
        loaderArray[_emailCode].userAccess = 1;
        setDisplayLoader(_emailCode,_email,_name,_telephone,_address);
        loaderArray[_emailCode].index = loaderIndex.length-1;
        createLoaderToken(_email);

        emit LogNewLoader (
            _emailCode,
            loaderArray[_emailCode].index,
            _email,
            loaderArray[_emailCode].passwordCode,
            _name,
            _telephone,
            _address,
            loaderArray[_emailCode].userAccess
            );
        return true;
    }
    function deleteLoader (bytes32 email) public returns(string memory){
        uint i;
        string memory name;
        delete loaderRegistationToken[email];
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
    function editUserAccess(string memory _email,uint usreAccess)public returns(bool){
        bytes32 email = keccak256(abi.encodePacked((_email)));
        loaderArray[email].userAccess = usreAccess;
        loaderIndex[loaderArray[email].index].userAccess = usreAccess;
        return true;

    }
    function getLoader(string memory _email) public view returns(bytes32,string memory email,string memory name,
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
    function updateLoaderName (string memory _email,string memory _name) public returns(bool success){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        require(isLoader(_emailCode) == true,'user not in system');
        loaderArray[_emailCode].name = _name;
        loaderIndex[loaderArray[_emailCode].index].name = _name;
        emit LogUpdateLoader(
            _emailCode,
            loaderArray[_emailCode].index,
            _email,
            loaderArray[_emailCode].passwordCode,
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
    function updateLoaderiEmail (string memory _email) public returns(bool success)
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