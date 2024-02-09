class Solution {
public:
    int newNum = 0;
    int stepCount = 0;

    int numberOfSteps(int num) {
        newNum = num;
        while(newNum!=0){
            if(newNum%2==0){ // number is even
                newNum /= 2;
            } else if (newNum%2!=0){ // number is odd
                newNum -= 1;
            }
        }
    }
};