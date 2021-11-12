var arr_color_name = ["white", "Black", "Light nevyblue", "Maroon red", "Smoky white", "Sky blue", "yellow", "water"];

var cart_arr = JSON.parse(localStorage.getItem("image_show_case"));
//function for highlite color
function color_border(x) {
    x.style.border = "4px solid teal";
    x.style.height = "61px";
    x.style.width = "61px";
}

function color_normal(x) {
    x.style.border = "3px solid transparent";
    x.style.height = "60px";
    x.style.width = "60px";
}
// button 1
document.getElementById("bt1").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("bt1");
    color_border(change_1)

    document.getElementById("color_name").textContent = arr_color_name[0];
})
document.getElementById("bt1").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("bt1");
    color_normal(change_1)

    document.getElementById("color_name").textContent = "";
})
// button 2
document.getElementById("bt2").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("bt2");
    color_border(change_1)

    document.getElementById("color_name").textContent = arr_color_name[1];
})
document.getElementById("bt2").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("bt2");
    color_normal(change_1)

    document.getElementById("color_name").textContent = "";
})
// button 3
document.getElementById("bt3").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("bt3");
    color_border(change_1)

    document.getElementById("color_name").textContent = arr_color_name[2];
})
document.getElementById("bt3").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("bt3");
    color_normal(change_1)

    document.getElementById("color_name").textContent = "";
})
// button 4
document.getElementById("bt4").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("bt4");
    color_border(change_1)

    document.getElementById("color_name").textContent = arr_color_name[3];
})
document.getElementById("bt4").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("bt4");
    color_normal(change_1)

    document.getElementById("color_name").textContent = "";
})
// button 5
document.getElementById("bt5").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("bt5");
    color_border(change_1)

    document.getElementById("color_name").textContent = arr_color_name[4];
})
document.getElementById("bt5").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("bt5");
    color_normal(change_1)

    document.getElementById("color_name").textContent = "";
})
// button 6
document.getElementById("bt6").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("bt6");
    color_border(change_1)

    document.getElementById("color_name").textContent = arr_color_name[5];
})
document.getElementById("bt6").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("bt6");
    color_normal(change_1)

    document.getElementById("color_name").textContent = "";
})
// button 7
document.getElementById("bt7").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("bt7");
    color_border(change_1)
    document.getElementById("color_name").textContent = arr_color_name[6];
})
document.getElementById("bt7").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("bt7");
    color_normal(change_1)
    document.getElementById("color_name").textContent = "";
})
// button 8
document.getElementById("bt8").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("bt8");
    color_border(change_1)

    document.getElementById("color_name").textContent = arr_color_name[7];
})
document.getElementById("bt8").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("bt8");
    color_normal(change_1)

    document.getElementById("color_name").textContent = "";
})
// done up to here ---------------------

// size sielection

var arr_size = ["s", "m", "l", "xl", "xxl", "xxxl"]
function border_size(x) {
    x.style.border = "4px solid teal";
    x.style.borderStyle = "double"
    x.style.height = "61px";
    x.style.width = "61px";
}
function border_normal(y) {
    y.style.borderStyle = "none"
    y.style.border = "1px solid rgb(12, 10, 10, 0.281)";
    y.style.height = "60px";
    y.style.width = "60px";
}
//s button
document.getElementById(arr_size[0]).addEventListener("mouseover", function () {

    var change_1 = document.getElementById(arr_size[0]);
    border_size(change_1);


})
document.getElementById(arr_size[0]).addEventListener("mouseleave", function () {
    var change_1 = document.getElementById(arr_size[0]);
    border_normal(change_1)

})
//m button
document.getElementById(arr_size[1]).addEventListener("mouseover", function () {

    var change_1 = document.getElementById(arr_size[1]);
    border_size(change_1);

})
document.getElementById(arr_size[1]).addEventListener("mouseleave", function () {
    var change_1 = document.getElementById(arr_size[1]);

    border_normal(change_1)

})
//l button
document.getElementById(arr_size[2]).addEventListener("mouseover", function () {

    var change_1 = document.getElementById(arr_size[2]);
    border_size(change_1);

})
document.getElementById(arr_size[2]).addEventListener("mouseleave", function () {
    var change_1 = document.getElementById(arr_size[2]);

    border_normal(change_1)

})
//xl button
document.getElementById(arr_size[3]).addEventListener("mouseover", function () {

    var change_1 = document.getElementById(arr_size[3]);
    border_size(change_1);

})
document.getElementById(arr_size[3]).addEventListener("mouseleave", function () {
    var change_1 = document.getElementById(arr_size[3]);

    border_normal(change_1);

})
//xxl button
document.getElementById(arr_size[4]).addEventListener("mouseover", function () {

    var change_1 = document.getElementById(arr_size[4]);
    border_size(change_1);

})
document.getElementById(arr_size[4]).addEventListener("mouseleave", function () {
    var change_1 = document.getElementById(arr_size[4]);

    border_normal(change_1);

})
//xxxl button
document.getElementById(arr_size[5]).addEventListener("mouseover", function () {

    var change_1 = document.getElementById(arr_size[5]);
    border_size(change_1);

})
document.getElementById(arr_size[5]).addEventListener("mouseleave", function () {
    var change_1 = document.getElementById(arr_size[5]);

    border_normal(change_1);

})

var arr_pin = null;
var delivery_main = document.getElementById("delivery");

var div_min = document.createElement("div");
div_min.id = "div_min"
var input_1 = document.createElement("input")
input_1.id = "pin_in"
input_1.type = "number"

var check = document.createElement("button");
check.id = "btn";

div_min.append(input_1, check);
delivery_main.append(div_min)
document.getElementById("btn").textContent = "Check";



var delivery_address = document.createElement("div");
delivery_address.id = "delivery_address"
var location_div = document.createElement("div");
location_div.id = "location_div"

var location_icon = document.createElement("img");
location_icon.id = "location_icon"
location_icon.src = "https://images.bewakoof.com/web/pin-1595571616.png";
location_div.append(location_icon)

var delivery_detail = document.createElement("p");
delivery_detail.id = "delivery_detail";
delivery_detail.textContent = "Delivering to"

var pin_number = document.createElement("p");
pin_number.id = "pin_number";
pin_number.textContent = "  ******";

var div_contain_detail = document.createElement("div")
div_contain_detail.id = "div_contain_detail";
div_contain_detail.append(delivery_detail, pin_number)

var change_button_div = document.createElement("div");
var change_button = document.createElement("button");
change_button.id = "change_button";
change_button.textContent = "change";
change_button_div.append(change_button)
delivery_address.append(location_div, div_contain_detail, change_button_div);


//input pin



//click button check pin
document.getElementById("btn").addEventListener("click", function () {

    var out1 = document.getElementById("pin_in");
    var out2 = out1.value;
    arr_pin = out2;
    if (out2.length == 6) {

        document.getElementById("div_min").style.border = "2px solid transparent"
        document.getElementById("div_min").innerHTML = "";
        div_min.append(delivery_address)



    }
    else {
        document.getElementById("div_min").style.border = "2px solid red"

        out1.value = "";
        // alert("please enter valid pin")
    }
})


// var image_collection = [
//     {
//         img_main: "https://images.bewakoof.com/t540/white-half-sleeve-t-shirt-105-1635793001-1.jpg",
//         img1: "https://images.bewakoof.com/t540/white-half-sleeve-t-shirt-105-1635793001-1.jpg",
//         img2: "https://images.bewakoof.com/t540/white-half-sleeve-t-shirt-105-1635793005-2.jpg",
//         img3: "https://images.bewakoof.com/t540/white-half-sleeve-t-shirt-105-1635793008-3.jpg",
//         img4: "https://images.bewakoof.com/t540/white-half-sleeve-t-shirt-105-1635793012-4.jpg"
//     },
//     {
//         img_main: "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1635793542-1.jpg",
//         img1: "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1635793542-1.jpg",
//         img2: "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1635793545-2.jpg",
//         img3: "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1635793549-3.jpg",
//         img4: "https://images.bewakoof.com/t540/jet-black-half-sleeve-t-shirt-106-1635793552-4.jpg"
//     },
//     {
//         img_main: "https://images.bewakoof.com/t540/navy-blue-half-sleeve-t-shirt-men-s-plain-t-shirts-115-1630523876-1.jpg",
//         img1: "https://images.bewakoof.com/t540/navy-blue-half-sleeve-t-shirt-men-s-plain-t-shirts-115-1630523876-1.jpg",
//         img2: "https://images.bewakoof.com/t540/navy-blue-half-sleeve-t-shirt-men-s-plain-t-shirts-115-1630325369-2.jpg",
//         img3: "https://images.bewakoof.com/t540/navy-blue-half-sleeve-t-shirt-men-s-plain-t-shirts-115-1630325363-3.jpg",
//         img4: "https://images.bewakoof.com/t540/navy-blue-half-sleeve-t-shirt-men-s-plain-t-shirts-115-1630325357-4.jpg"
//     },
//     {
//         img_main: "https://images.bewakoof.com/t540/bold-red-half-sleeve-t-shirt-men-s-plain-t-shirts-69875-1631631938.jpg",
//         img1: "https://images.bewakoof.com/t540/bold-red-half-sleeve-t-shirt-men-s-plain-t-shirts-69875-1631631938.jpg",
//         img2: "https://images.bewakoof.com/t540/bold-red-half-sleeve-t-shirt-men-s-plain-t-shirts-69875-1631631941.jpg",
//         img3: "https://images.bewakoof.com/t540/bold-red-half-sleeve-t-shirt-men-s-plain-t-shirts-69875-1631631944.jpg",
//         img4: "https://images.bewakoof.com/t540/bold-red-half-sleeve-t-shirt-men-s-plain-t-shirts-69875-1631631947.jpg"
//     },
//     {
//         img_main: "https://images.bewakoof.com/t540/meteor-grey-half-sleeve-t-shirt-211953-1635867997-1.jpg",
//         img1: "https://images.bewakoof.com/t540/meteor-grey-half-sleeve-t-shirt-211953-1635867997-1.jpg",
//         img2: "https://images.bewakoof.com/t540/meteor-grey-half-sleeve-t-shirt-211953-1635868001-2.jpg",
//         img3: "https://images.bewakoof.com/t540/meteor-grey-half-sleeve-t-shirt-211953-1635868004-3.jpg",
//         img4: "https://images.bewakoof.com/t540/meteor-grey-half-sleeve-t-shirt-211953-1635868008-4.jpg"
//     },
//     {
//         img_main: "https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1585890848.jpg",
//         img1: "https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1585890848.jpg",
//         img2: "https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1585890862.jpg",
//         img3: "https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1585890869.jpg",
//         img4: "https://images.bewakoof.com/t540/blue-haze-half-sleeve-t-shirt-men-s-plain-t-shirts-217604-1585890877.jpg"
//     },
//     {
//         img_main: "https://images.bewakoof.com/t540/pineapple-yellow-half-sleeve-t-shirt-men-s-plain-t-shirts-231522-1585315740.jpg",
//         img1: "https://images.bewakoof.com/t540/pineapple-yellow-half-sleeve-t-shirt-men-s-plain-t-shirts-231522-1585315740.jpg",
//         img2: "https://images.bewakoof.com/t540/pineapple-yellow-half-sleeve-t-shirt-men-s-plain-t-shirts-231522-1585315743.jpg",
//         img3: "https://images.bewakoof.com/t540/pineapple-yellow-half-sleeve-t-shirt-men-s-plain-t-shirts-231522-1585315746.jpg",
//         img4: "https://images.bewakoof.com/t540/pineapple-yellow-half-sleeve-t-shirt-men-s-plain-t-shirts-231522-1585315748.jpg"
//     },
//     {
//         img_main: "https://images.bewakoof.com/t540/beach-blue-half-sleeve-t-shirt-329407-1635870362-1.jpg",
//         img1: "https://images.bewakoof.com/t540/beach-blue-half-sleeve-t-shirt-329407-1635870362-1.jpg",
//         img2: "https://images.bewakoof.com/t540/beach-blue-half-sleeve-t-shirt-329407-1635870365-2.jpg",
//         img3: "https://images.bewakoof.com/t540/beach-blue-half-sleeve-t-shirt-329407-1635870369-3.jpg",
//         img4: "https://images.bewakoof.com/t540/beach-blue-half-sleeve-t-shirt-329407-1635870372-4.jpg"
//     },

// ]

var main_image = document.createElement(img.);
main_image.id = "main_image"
main_image.src = image_show_case.imgUrl;
var main_div = document.getElementById("image_containt");

main_div.append(main_image)
//first image_icon;
var icon_div = document.getElementById("small_icon");
var bt1 = document.createElement("button");
bt1.id = "button_1"
var image1 = document.createElement("img");
image1.id = "image1"
image1.src = image_show_case.imgUrl;
bt1.append(image1);

//second image_icon
var icon_div = document.getElementById("small_icon");
var bt2 = document.createElement("button");
bt2.id = "button_2"
var image2 = document.createElement("img");
image2.id = "image2"
image2.src = image_show_case.imgUrl;
bt2.append(image2);

//third image_icon;
var icon_div = document.getElementById("small_icon");
var bt3 = document.createElement("button");
bt3.id = "button_3"
var image3 = document.createElement("img");
image3.id = "image3"
image3.src = image_show_case.imgUrl;
bt3.append(image3);

//fourth image_icon
var icon_div = document.getElementById("small_icon");
var bt4 = document.createElement("button");
bt4.id = "button_4"
var image4 = document.createElement("img");
image4.id = "image4"
image4.src = image_show_case.imgUrl;
bt4.append(image4);
icon_div.append(bt1, bt2, bt3, bt4)

//when the color is not selected
document.getElementById("button_1").addEventListener("click", function () {
    document.getElementById("main_image").src = image_show_case.imgUrl
})

document.getElementById("button_2").addEventListener("click", function () {

    document.getElementById("main_image").src = image_show_case.imgUrl;
})

document.getElementById("button_3").addEventListener("click", function () {
    document.getElementById("main_image").src = image_show_case.imgUrl
})

document.getElementById("button_4").addEventListener("click", function () {
    document.getElementById("main_image").src = image_show_case.imgUrl
})

//first color selection
document.getElementById("bt1").addEventListener("click", function () {
    display_image_onclick("bt1", image_show_case)


    document.getElementById("button_1").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_2").addEventListener("click", function () {
        console.log("hi");
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_3").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_4").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    // add_to_cart(image_collection[0]);

})

//second color selection
document.getElementById("bt2").addEventListener("click", function () {
    display_image_onclick("bt2", image_show_case)

    document.getElementById("button_1").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_2").addEventListener("click", function () {

        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_3").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_4").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

})


//third color selection
document.getElementById("bt3").addEventListener("click", function () {
    display_image_onclick("bt3", image_show_case)

    document.getElementById("button_1").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_2").addEventListener("click", function () {
        console.log("hi");
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_3").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_4").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

})


//fourth color selection
document.getElementById("bt4").addEventListener("click", function () {
    display_image_onclick("bt4", image_show_case)

    document.getElementById("button_1").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_2").addEventListener("click", function () {

        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_3").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_4").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

})


//fifth color selection
document.getElementById("bt5").addEventListener("click", function () {
    display_image_onclick("bt5", image_show_case)

    document.getElementById("button_1").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_2").addEventListener("click", function () {
        console.log("hi");
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_3").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_4").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })


})

//sixth color selection
document.getElementById("bt6").addEventListener("click", function () {
    display_image_onclick("bt6", image_show_case)

    document.getElementById("button_1").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_2").addEventListener("click", function () {

        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_3").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_4").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

})

// seventh color selection
document.getElementById("bt7").addEventListener("click", function () {
    display_image_onclick("bt7", image_show_case)
    document.getElementById("button_1").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_2").addEventListener("click", function () {
        console.log("hi");
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_3").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_4").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

})

// eigth color sselection
document.getElementById("bt8").addEventListener("click", function () {
    display_image_onclick("bt8", image_show_case)
    document.getElementById("button_1").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_2").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_3").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })

    document.getElementById("button_4").addEventListener("click", function () {
        document.getElementById("main_image").src = image_show_case.imgUrl
    })


})


//function to display the images in their respectie places
function display_image_onclick(k, item) {
    document.getElementById(k).style.border = "5px solid green";
    document.getElementById("main_image").src = item.imgUrl;
    document.getElementById("image1").src = item.imgUrl;
    document.getElementById("image2").src = item.imgUrl;
    document.getElementById("image3").src = item.imgUrl;
    document.getElementById("image4").src = item.imgUrl;
}

//hover effect for "button one" in image icons left most
document.getElementById("button_1").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("button_1");
    change_1.style.border = "5px solid teal";
})
document.getElementById("button_1").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("button_1");
    change_1.style.border = "2px solid teal";

})

//hover effect for "button two" in image icons left most
document.getElementById("button_2").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("button_2");
    change_1.style.border = "5px solid teal";
})
document.getElementById("button_2").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("button_2");
    change_1.style.border = "2px solid teal";

})

//hover effect for "button three" in image icons left most
document.getElementById("button_3").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("button_3");
    change_1.style.border = "5px solid teal";
})
document.getElementById("button_3").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("button_3");
    change_1.style.border = "2px solid teal";

})

//hover effect for "button four" in image icons left most
document.getElementById("button_4").addEventListener("mouseover", function () {
    var change_1 = document.getElementById("button_4");
    change_1.style.border = "5px solid teal";
})
document.getElementById("button_4").addEventListener("mouseleave", function () {
    var change_1 = document.getElementById("button_4");
    change_1.style.border = "2px solid teal";

})


//getting and displaying text data  localStorage.getItem("image_show_case")

document.getElementById("name_tag").textContent = image_show_case.name;
document.getElementById("price_tag").textContent = image_show_case.price;
document.getElementById("price_tag").textContent = image_show_case.cutprice;