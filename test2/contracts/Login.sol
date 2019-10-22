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
    struct Admin{
        string email;
        bytes32 passwordCode;
        bytes32 passwordRestToken;
        string firstName;
        string lastName;
        uint contactNumber;
        string userAddress;
        uint userType;
        bool userAccess;
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

    mapping(bytes32 => Admin[]) public adminArray;

    function scanDistributor(uint64 _boxtId,uint64 _distributorId)public view returns(bool) {
        // first map packet id and get packet location
        // second we store distributor id in box distributors array
    }

    // function scanPacket(uint64 _packetId)public view returns(/* packetdtail*//*supply chin */bool){
    //     return true;
    // }

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

    function addAdmin(string memory _email,string memory _firstName,string memory _lastName)public returns(bool){
        bytes32 _emailCode = keccak256(abi.encodePacked((_email)));
        Admin memory _admin;
        _admin.email = _email;
        _admin.passwordCode = "";
        _admin.passwordRestToken = "";
        _admin.firstName = _firstName;
        _admin.lastName = _lastName;
        _admin.contactNumber = 0;
        _admin.userAddress = "";
        _admin.userType = 1;
        _admin.userAccess = false;
        adminArray[_emailCode].push(_admin);
        
        return true;

    }
}