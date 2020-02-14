pragma solidity >=0.4.21 <0.6.0;

import "./Admin.sol";
import "./Manager.sol";
import "./Distributor.sol";
import "./Loader.sol";
import "./Supervisor.sol";

contract Login {
    DistributorContract public distributorc;
    ManagerContract public managerc;
    AdminContract public adminc;
    LoaderContract public loaderc;
    SupervisorContract public supervisorc;
    address ada;
    address maa;
    address disa;
    address loa;
    address sua;
    constructor(address ad,address ma,address dis,address lo,address su) public {
        adminc = AdminContract(ad);
        managerc = ManagerContract(ma);
        distributorc = DistributorContract(dis);
        loaderc = LoaderContract(lo);
        supervisorc = SupervisorContract(su);
        ada = ad;
        maa = ma;
        disa = dis;
        loa = lo;
        sua = su;
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
                require(!(userAccess == 1), "user not register in the system");
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
                require(!(userAccess == 1),"user not register in the system");
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
            if(loaderc.isLoader(email)){
                userAccess = loaderc.checkLoaderUserAccess(email);
                require(!(userAccess == 1), "user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                bytes32 passwordCode = loaderc.checkLoaderPasswordCode(email);
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
            } else if(supervisorc.isSupervisor(email)){
                userAccess = supervisorc.checkSupervisorUserAccess(email);
                require(!(userAccess == 1),"user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                bytes32 passwordCode = supervisorc.checkSupervisorPasswordCode(email);
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
        else if(_appId == 3){
            if(distributorc.isDistributor(email)){
                userAccess = distributorc.checkDistributorUserAccess(email);
                require(!(userAccess == 1), "user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                bytes32 passwordCode = distributorc.checkDistributorPasswordCode(email);
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
        else{
            require(false,"dosen't macth this password");
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
    function registation(string memory _email,bytes32 token,uint _appId) public view returns(bool,uint) {
       bytes32 email = keccak256(abi.encodePacked((_email)));
        uint userAccess;
        if(_appId==1){
            if(adminc.isAdmin(email)){
                userAccess = adminc.checkAdminUserAccess(email);
                if(userAccess == 1) {
                    if(adminc.checkAdminToken(_email,token)){
                       return (true,11);
                    } else{
                        require(false,"token is invalid");
                    }
                }else{
                    require(false,"user Allredy signup");
                }
            } else if(managerc.isManager(email)){
                userAccess = managerc.checkManagerUserAccess(email);
                if(userAccess == 1) {
                    if(managerc.checkManagerToken(_email,token)){
                        return (true,12);
                    } else{
                        require(false,"token is invalid");
                    }
                }else{
                    require(false,"user Allredy signup");
                }
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else if(_appId==2){
            if(loaderc.isLoader(email)){
                userAccess = loaderc.checkLoaderUserAccess(email);
                if(userAccess == 1) {
                    if(loaderc.checkLoaderToken(_email,token)){
                         return (true,21);
                    } else{
                        require(false,"token is invalid");
                    }
                }else{
                    require(false,"user Allredy signup");
                }
            } else if(supervisorc.isSupervisor(email)){
                userAccess = supervisorc.checkSupervisorUserAccess(email);
                if(userAccess == 1) {
                    if(supervisorc.checkSupervisorToken(_email,token)){
                         return (true,22);
                    } else{
                        require(false,"token is invalid");
                    }
                }else{
                    require(false,"user Allredy signup");
                }
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else if(_appId == 3){
            if(distributorc.isDistributor(email)){
                userAccess = distributorc.checkDistributorUserAccess(email);
                if(userAccess == 1) {
                    if(distributorc.checkDistributorToken(_email,token)){
                         return (true,31);
                    } else{
                        require(false,"token is invalid");
                    }
                }else{
                    require(false,"user Allredy signup");
                }
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else{
            require(false,"dosen't macth this email");
        }
    }
    function frogetPassword(string memory _email,uint _appId) public view returns(bool,uint) {
        bytes32 email = keccak256(abi.encodePacked((_email)));
        uint userAccess;
        if(_appId==1){
            if(adminc.isAdmin(email)){
                userAccess = adminc.checkAdminUserAccess(email);
                require(!(userAccess == 1), "user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                return (true,11);
            } else if(managerc.isManager(email)){
                userAccess = managerc.checkManagerUserAccess(email);
                require(!(userAccess == 1),"user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                return (true,12);
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else if(_appId==2){
            if(loaderc.isLoader(email)){
                userAccess = loaderc.checkLoaderUserAccess(email);
                require(!(userAccess == 1), "user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                return (true,21);

            } else if(supervisorc.isSupervisor(email)){
                userAccess = supervisorc.checkSupervisorUserAccess(email);
                require(!(userAccess == 1),"user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                return (true,22);
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else if(_appId == 3){
            if(distributorc.isDistributor(email)){
                userAccess = distributorc.checkDistributorUserAccess(email);
                require(!(userAccess == 1), "user not register in the system");
                require(!(userAccess == 2),"user not confirm thier email");
                return (true,31);
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else{
            require(false,"dosen't macth this email");
        }

    }
    function resetPassword(string memory _email,bytes32 token,uint _appId)public view returns(bool,uint) {
       bytes32 email = keccak256(abi.encodePacked((_email)));
        uint userAccess;
        if(_appId==1){
            if(adminc.isAdmin(email)){
                userAccess = adminc.checkAdminUserAccess(email);
                require(!(userAccess == 4), "user remove from the system");
                require(!(userAccess == 3),"user tempory block from the system");
                if(adminc.checkAdminToken(_email,token)){
                    return (true,11);
                } else{
                    require(false,"token is invalid");
                }
            } else if(managerc.isManager(email)){
                userAccess = managerc.checkManagerUserAccess(email);
                userAccess = managerc.checkManagerUserAccess(email);
                require(!(userAccess == 4), "user remove from the system");
                require(!(userAccess == 3),"user tempory block from the system");
                if(managerc.checkManagerToken(_email,token)){
                   return (true,12);
                } else{
                    require(false,"token is invalid");
                }
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else if(_appId==2){
            if(loaderc.isLoader(email)){
                userAccess = loaderc.checkLoaderUserAccess(email);
                require(!(userAccess == 4), "user remove from the system");
                require(!(userAccess == 3),"user tempory block from the system");
                if(loaderc.checkLoaderToken(_email,token)){
                    return (true,21);
                } else{
                    require(false,"token is invalid");
                }
            } else if(supervisorc.isSupervisor(email)){
                userAccess = supervisorc.checkSupervisorUserAccess(email);
                require(!(userAccess == 4), "user remove from the system");
                require(!(userAccess == 3),"user tempory block from the system");
                if(supervisorc.checkSupervisorToken(_email,token)){
                    return (true,22);
                } else{
                    require(false,"token is invalid");
                }
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else if(_appId == 3){
            if(distributorc.isDistributor(email)){
                userAccess = distributorc.checkDistributorUserAccess(email);
                require(!(userAccess == 4), "user remove from the system");
                require(!(userAccess == 3),"user tempory block from the system");
                if(distributorc.checkDistributorToken(_email,token)){
                    return (true,31);
                } else{
                    require(false,"token is invalid");
                }
            } else {
                require(false,"dosen't macth this email");
            }
        }
        else{
            require(false,"dosen't macth this email");
        }
    }
    // function createBox() public returns(bool){

    // }
    // function creatPacket() public returns(bool){
    // }


}
