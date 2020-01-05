pragma solidity >=0.4.21 <0.6.0;

contract ProductContract {

    struct Product{
        string productName;
        bytes32 productNameCode;
        string flaver;
        string packetTypeAndWeight;
        uint productAccess;
        uint index;
        uint rate;
        uint price;
        uint unit;
    }

    struct DisplayProduct{
        bytes32 productNameCode;
        string productName;
        string flaver;
        string packetTypeAndWeight;
        uint productAccess;
        uint rate;
        uint price;
        uint unit;
    }

    event LogNewProduct(
        bytes32 indexed productNameCode,
        uint index,string productName,
        string flaver,
        string packetTypeAndWeight,
        uint productAccess,
        uint rate,
        uint price,
        uint unit
        );
    event LogUpdateProduct(
        bytes32 indexed productNameCode,
        uint index,string productName,
        string flaver,
        string packetTypeAndWeight,
        uint productAccess,
        uint rate,
        uint price,
        uint unit
        );
    event LogDeleteProduct(
        bytes32 indexed productNamecode,
        uint index
        );

    mapping(bytes32 => Product) public ProductArray;
    DisplayProduct[] private ProductIndex;

    function isProduct(bytes32 _productNameCode)public view returns(bool isIndeed) {
        if(ProductIndex.length == 0) return false;
        return (ProductIndex[ProductArray[_productNameCode].index].productNameCode == _productNameCode);
    }

    function setDisplayProduct
    (bytes32 _productNameCode,string memory _productName,string memory _flaver,string memory _packetTypeAndWeight,uint _price)
     private returns(bool){

        DisplayProduct memory displayProduct;
        displayProduct.productNameCode = _productNameCode;
        displayProduct.productName = _productName;
        displayProduct.flaver = _flaver;
        displayProduct.packetTypeAndWeight = _packetTypeAndWeight;
        displayProduct.productAccess = 1;
        displayProduct.price = _price;
        displayProduct.rate = 0;
        displayProduct.unit = 0;
        ProductIndex.push(displayProduct);
        return true;

    }
    function insertProduct(string memory _productName,string memory _flaver,string memory _packetTypeAndWeight,uint _price) public returns(bool){
        bytes32 _productNameCode = keccak256(abi.encodePacked((_productName)));
        require(isProduct(_productNameCode) != true,'product allredy in system');

        ProductArray[_productNameCode].productName = _productName;
        ProductArray[_productNameCode].productNameCode = _productNameCode;
        ProductArray[_productNameCode].flaver = _flaver;
        ProductArray[_productNameCode].packetTypeAndWeight = _packetTypeAndWeight;
        ProductArray[_productNameCode].productAccess = 1;
        ProductArray[_productNameCode].price = _price;
        ProductArray[_productNameCode].rate = 0;
        ProductArray[_productNameCode].unit = 0;
        setDisplayProduct(_productNameCode,_productName,_flaver,_packetTypeAndWeight,_price);
        ProductArray[_productNameCode].index = ProductIndex.length-1;

        emit LogNewProduct (
            _productNameCode,
            ProductArray[_productNameCode].index,
            _productName,
            _flaver,
            _packetTypeAndWeight,
            ProductArray[_productNameCode].productAccess,
            ProductArray[_productNameCode].rate,
            _price,
            ProductArray[_productNameCode].unit
            );
        return true;
    }
    function deleteProduct (bytes32 _productNameCode) public returns(string memory){
        ProductArray[_productNameCode].productAccess = 4;
        ProductIndex[ProductArray[_productNameCode].index].productAccess = 4;
        emit LogDeleteProduct(
            _productNameCode,
            ProductArray[_productNameCode].index
        );
        return  ProductArray[_productNameCode].productName;
    }

    function getProduct(string memory _productName) public view returns(bytes32,string memory productName,string memory flaver,
    string memory packetTypeAndWeight, uint productAccess, uint price,uint rate){
        bytes32 _productNameCode = keccak256(abi.encodePacked((_productName)));
        require(isProduct(_productNameCode) == true,'product not in system');
        return(
            _productNameCode,
            ProductArray[_productNameCode].productName,
            ProductArray[_productNameCode].flaver,
            ProductArray[_productNameCode].packetTypeAndWeight,
            ProductArray[_productNameCode].productAccess,
            ProductArray[_productNameCode].price,
            ProductArray[_productNameCode].rate
            );
    }
    function getProducti(uint i) public view returns(
        bytes32,
        string memory,
        string memory,
        string memory,
        uint,
        uint,
        uint
        ){
            return (
                ProductIndex[i].productNameCode,
                ProductIndex[i].productName,
                ProductIndex[i].flaver,
                ProductIndex[i].packetTypeAndWeight,
                ProductIndex[i].productAccess,
                ProductIndex[i].price,
                ProductIndex[i].rate
                );
    }
    function getProductCount() public view returns(uint)
    {
        return ProductIndex.length;
    }

    // function updateUserproductName(address weight, bytes32 productproductName) public returns(bool success)
    // {
    //     productStructs[weight].productproductName = productproductName;
    //     emit LogUpdateUser(weight,  productStructs[weight].index, productproductName, productStructs[weight].productAge);
    //     return true;
    // }
    function updateProductFlaver (string memory _productName,string memory _flaver) public returns(bool success){
        bytes32 _productNameCode = keccak256(abi.encodePacked((_productName)));
        require(isProduct(_productNameCode) == true,'product not in system');
        ProductArray[_productNameCode].flaver = _flaver;
        ProductIndex[ProductArray[_productNameCode].index].flaver = _flaver;
        emit LogUpdateProduct(
            _productNameCode,
            ProductArray[_productNameCode].index,
            _productName,
            _flaver,
            ProductArray[_productNameCode].packetTypeAndWeight,
            ProductArray[_productNameCode].productAccess,
            ProductArray[_productNameCode].rate,
            ProductArray[_productNameCode].price,
            ProductArray[_productNameCode].unit
            );
        return true;
    }
    function updateProductPacketTypeAndWeight (string memory _productName,string memory _packetTypeAndWeight) public returns(bool success){
        bytes32 _productNameCode = keccak256(abi.encodePacked((_productName)));
        require(isProduct(_productNameCode) == true,'product not in system');
        ProductArray[_productNameCode].packetTypeAndWeight = _packetTypeAndWeight;
        ProductIndex[ProductArray[_productNameCode].index].packetTypeAndWeight = _packetTypeAndWeight;
        emit LogUpdateProduct(
            _productNameCode,
            ProductArray[_productNameCode].index,
            _productName,
            ProductArray[_productNameCode].flaver,
            _packetTypeAndWeight,
            ProductArray[_productNameCode].productAccess,
            ProductArray[_productNameCode].rate,
            ProductArray[_productNameCode].price,
            ProductArray[_productNameCode].unit
            );
        return true;
    }
    function updateProductPrice (string memory _productName,uint _price) public returns(bool success){
        bytes32 _productNameCode = keccak256(abi.encodePacked((_productName)));
        require(isProduct(_productNameCode) == true,'product not in system');
        ProductArray[_productNameCode].price = _price;
        ProductIndex[ProductArray[_productNameCode].index].price = _price;
        emit LogUpdateProduct(
            _productNameCode,
            ProductArray[_productNameCode].index,
            _productName,
            ProductArray[_productNameCode].flaver,
            ProductArray[_productNameCode].packetTypeAndWeight,
            ProductArray[_productNameCode].productAccess,
            ProductArray[_productNameCode].rate,
            _price,
            ProductArray[_productNameCode].unit
            );
        return true;
    }
    function updateProduct(
        string memory _productName,
        uint[] memory index,
        string memory _flaver,
        string memory _packetTypeAndWeight,
        uint _price
        ) public returns(bool success){
        bytes32 _productNameCode = keccak256(abi.encodePacked((_productName)));
        require(isProduct(_productNameCode) == true,'product not in system');
        uint i;
        uint num = ProductArray[_productNameCode].index;

        for (i = 0;i<index.length;i++){
            if(index[i]==1){
                ProductArray[_productNameCode].flaver = _flaver;
                ProductIndex[num].flaver = _flaver;
                emit LogUpdateProduct(
                    _productNameCode,
                    ProductArray[_productNameCode].index,
                    _productName,
                    _flaver,
                    ProductArray[_productNameCode].packetTypeAndWeight,
                    ProductArray[_productNameCode].productAccess,
                    ProductArray[_productNameCode].rate,
                    ProductArray[_productNameCode].price,
                    ProductArray[_productNameCode].unit
                    );

            }
            else if(index[i]==2){
                ProductArray[_productNameCode].packetTypeAndWeight = _packetTypeAndWeight;
                ProductIndex[num].packetTypeAndWeight = _packetTypeAndWeight;
                emit LogUpdateProduct(
                    _productNameCode,
                    ProductArray[_productNameCode].index,
                    _productName,
                    ProductArray[_productNameCode].flaver,
                    _packetTypeAndWeight,
                    ProductArray[_productNameCode].productAccess,
                    ProductArray[_productNameCode].rate,
                    ProductArray[_productNameCode].price,
                    ProductArray[_productNameCode].unit
                    );

            }
            else if(index[i]==3){
                ProductArray[_productNameCode].price = _price;
                ProductIndex[num].price = _price;
                emit LogUpdateProduct(
                    _productNameCode,
                    ProductArray[_productNameCode].index,
                    _productName,
                    ProductArray[_productNameCode].flaver,
                    ProductArray[_productNameCode].packetTypeAndWeight,
                    ProductArray[_productNameCode].productAccess,
                    ProductArray[_productNameCode].rate,
                    _price,
                    ProductArray[_productNameCode].unit
                    );

            }
        }
        return true;
    }
    ///////
    function updateProductiproductName (string memory _productName) public returns(bool success){
       // return true;
    }
    function rateProduct (string memory _productName,uint _rate) public returns(bool success){
        bytes32 _productNameCode = keccak256(abi.encodePacked((_productName)));
        require(isProduct(_productNameCode) == true,'product not in system');
        uint nrate = (_rate+ProductArray[_productNameCode].rate*ProductArray[_productNameCode].unit)/(ProductArray[_productNameCode].unit+1);
        ProductArray[_productNameCode].unit = ProductArray[_productNameCode].unit + 1;
        ProductArray[_productNameCode].rate = nrate;
        ProductIndex[ProductArray[_productNameCode].index].rate = nrate;
        emit LogUpdateProduct(
            _productNameCode,
            ProductArray[_productNameCode].index,
            _productName,
            ProductArray[_productNameCode].flaver,
            ProductArray[_productNameCode].packetTypeAndWeight,
            ProductArray[_productNameCode].productAccess,
            nrate,
            ProductArray[_productNameCode].price,
            ProductArray[_productNameCode].unit
            );
        return true;
    }
    // function createProductPacket (string memory _productName,uint _unit) public returns(bool success){
    //     bytes32 _productNameCode = keccak256(abi.encodePacked((_productName)));
    //     require(isProduct(_productNameCode) == true,'product not in system');
    //     ProductArray[_productNameCode].rate = _rate;
    //     ProductIndex[ProductArray[_productNameCode].index].rate = _rate;
    //     emit LogUpdateProduct(
    //         _productNameCode,
    //         ProductArray[_productNameCode].index,
    //         _productName,
    //         ProductArray[_productNameCode].flaver,
    //         ProductArray[_productNameCode].packetTypeAndWeight,
    //         ProductArray[_productNameCode].weight,
    //         ProductArray[_productNameCode].productAccess,
    //         _rate,
    //         ProductArray[_productNameCode].price,
    //         ProductArray[_productNameCode].unit
    //         );
    //     return true;
    // }
}