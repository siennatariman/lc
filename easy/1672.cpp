class Solution {
public:
    int currentHighest = 0;
    int container = 0;

    vector<vector<int>> customer;
    
    int maximumWealth(vector<vector<int>>& accounts) {
        customer = accounts;

        // Iterate over the rows
        for(size_t i=0; i < customer.size(); i++){

            // Iterate the columns for each row
            for(size_t j=0; j < customer[i].size(); j++){
                container += customer[i][j];
            }
            if(currentHighest < container){
                currentHighest = container;
            }

        // Reset container for the next customer
        container = 0;
      }  
    return currentHighest;
    }
};