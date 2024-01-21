#include <iostream>
#include <cmath>
#include <string>

class Solution {
public:
    std::string categorizeBox(int length, int width, int height, int mass) {
    std::string boxCategory1, boxCategory2, finalBoxCategory;
    long long int volume = static_cast<long long int>(length) * width * height;

    if((length >= std::pow(10,4)) || (width >= std::pow(10,4)) || (height>= std::pow(10,4)) || (mass >= std::pow(10,4)) || (volume >= std::pow(10,9))){
        boxCategory1 = "Bulky";
    }

    if(mass >= 100){
        boxCategory2 = "Heavy";
    }

    if(boxCategory1 == "Bulky" && boxCategory2 == "Heavy"){
        finalBoxCategory = "Both";
    } else if (boxCategory1 != "Bulky" && boxCategory2 != "Heavy"){
        finalBoxCategory = "Neither";
    } else if (boxCategory1 == "Bulky" && boxCategory2 != "Heavy"){
        finalBoxCategory = "Bulky";
    } else if (boxCategory1 != "Bulky" && boxCategory2 == "Heavy") {
        finalBoxCategory = "Heavy";
    }

    return finalBoxCategory;
    }   
};