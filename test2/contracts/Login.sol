pragma solidity >=0.4.21 <0.6.0;

import "./Admin.sol";
import "./Manager.sol";
import "./Distributor.sol";
import "./Loader.sol";
import "./Supervisor.sol";

contract Login {
    AdminContract adminc;
    ManagerContract managerc;
    DistributorContract distributorc;
    LoaderContract loaderc;
    SupervisorContract supervisorc;
    constructor(address ad,address ma,address dis,address lo,address su) public {
        adminc = AdminContract(ad);
        managerc = ManagerContract(ma);
        distributorc = DistributorContract(dis);
        loaderc = LoaderContract(lo);
        supervisorc = SupervisorContract(su);
    }
    // struct Packet{
    //     uint packetId;
    //     uint boxId;
    //     uint productId;
    //     uint rate;
    // }
    // struct Box{
    //     uint boxtId;
    //     uint containerId;
    //     uint orderId;
    //     uint[] distributorIndex;
    //     uint256[]  time;
    // }
    // struct Container{
    //     uint containerId;
    //     uint orderId;
    //     uint rate;
    //     uint[] distributorIndex;
    //     uint256[]  time;
    // }
    // struct Order{
    //     uint packetId;
    //     uint orderId;
    // }
    // struct Product{
    //     uint packetId;
    //     uint orderId;
    //     uint rate;

    // }
    // struct Estate{
    //     uint packetId;
    //     uint orderId;
    //     uint rate;

    // }

    // struct Manager{
    //     string email;
    //     string firstName;
    //     string lastName;
    //     uint userType;
    //     bool userAccess;
    // }
    // struct Worker{
    //     string email;
    //     string firstName;
    //     string lastName;
    //     uint userType;
    //     bool userAccess;
    // }
    // struct Distributor{
    //     string email;
    //     string firstName;
    //     string lastName;
    //     string location;
    //     string countryIsoCode;
    //     uint userType;
    //     bool userAccess;

    // }

    // function scanDistributor(/*uint64 _boxtId,uint64 _distributorId*/)public pure returns(bool){
    //     // first map packet id and get packet location
    //     // second we store distributor id in box distributors array
    //     return true;
    // }

    // function scanPacket(/*uint64 _packetId*/)public pure returns(/* packetdtail*//*supply chin */bool){
    //     return true;
    // }

    function login(string memory _email,string memory _password,uint _appId)public view returns(bool){

        bytes32 email = keccak256(abi.encodePacked((_email)));
        bytes32 password = keccak256(abi.encodePacked((_password)));
        uint userAccess;
        if(email == password){
            return true;
        }

        if(_appId==1){
        
           
            
            if(adminc.isAdmin(email)){
                userAccess = adminc.checkAdminUserAccess(email);
                require(!(userAccess== 1),"user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                bytes32 passwordCode = adminc.checkAdminPasswordCode(email);
                if(passwordCode == password ){
                    if(userAccess == 5){
                        return true;
                    }else{
                        require(!(userAccess == 3),"user tempory block in the system");
                        require(!(userAccess == 4),"user deleted from system");
                        return false;
                    }
                } else {
                    require(false,"dosen't macth this password");
                    return false;
                }
            } else if(managerc.isManager(email)){
                userAccess = managerc.checkManagerUserAccess(email);
                require(!(userAccess== 1),"user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                bytes32 passwordCode = managerc.checkManagerPasswordCode(email);
                if(passwordCode == password ){
                    if(userAccess == 5){
                        return true;
                    }else{
                        require(!(userAccess == 3),"user tempory block in the system");
                        require(!(userAccess == 4),"user deleted from system");
                        return false;
                    }
                } else {
                    require(false,"dosen't macth this password");
                    return false;
                }
                
            } else {
                require(false,"dosen't macth this email");
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
    
   
    

    //mapping(address => UserStruct) private userStructs;
    //address[] private adminIndex;

    //
    //  mapping(uint => Box) public boxes;
    //  mapping(uint => Packet) public packets;


    // event LogNewUser(address indexed userAddress, uint index, bytes32 userEmail, uint userAge);
    // event LogUpdateUser(address indexed userAddress, uint index, bytes32 userEmail, uint userAge);
    

/////////////////////////
    

    
    ///
    function registation(bytes32 token) public returns(bool)
    {
       // return true;
    }
    function frogetPassword(string memory _email) public returns(bool)
    {
        
    }
    function resetPassword(bytes32 token,string memory password)public returns(bool)
    {

    }
    // function createBox() public returns(bool){

    // }
    // function creatPacket() public returns(bool){
    // }


}
