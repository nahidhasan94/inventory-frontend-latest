function productAction1() {
    let category = document.getElementById("category-field").value
    let name = document.getElementById("product-field").value
    let price = document.getElementById("price-field").value
    let quantity = document.getElementById("quantity-field").value
    $.ajax(
        {
            url: "http://localhost:8080/product/create",
            type: "POST",
            accept: "application/json",
            contentType: "application/json",
            headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'requester': '{"username": "admin@asd.com","authorities": "ROLE_ADMIN"}'

                },
            data: JSON.stringify({
                name: name.toString(),
                price: parseInt(price),
                category: category.toString(),
                quantity: parseInt(quantity)

            }),
            dataType: 'json',
            success: function (response) {
                alert("success");

            }
            , error: function (error) {
                alert(error.message);
            }
        }
    )
}
