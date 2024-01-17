// 1480. Running Sum of 1d Array
#include <iostream>

class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        std::vector<int> resultVector;
        
        for(int i=0; i < nums.size(); i++){
            if(i==0){
                resultVector.push_back(nums[i]);
            } else {
                resultVector.push_back(nums[i] + resultVector[i-1]);
            };
        };
        return resultVector;
    }
};