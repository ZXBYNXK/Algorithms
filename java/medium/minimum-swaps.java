// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the minimumSwaps function below.
    static int minimumSwaps(int[] arr) {
        int count = 0;
        int minSwaps = 0;
        
        while(count < arr.length) {
            // System.out.println(Arrays.toString(arr));
            
            // Represents the distance away a number is in comparison to sorted array
            int distanceAway = (arr[count] - count + 1) - 2;
            
            // Ex:
            // Where a unsorted list of:       1, 2, 4, 3 
            //    Sorted list based on count:  1, 2, 3, 4, 
            //    Distance away:               0, 0,+1,-1
            //    Note: If ever zero then number is allready where it should be.
            
            // System.out.println(arr[count]);                
            // System.out.println(difference);
            
            // if the distance away is not zero then perform swap
            if(distanceAway != 0) {
                
                // Increment swaps
                minSwaps+=1;
                
                // Assign temp to contain the value of the num in index to swap 
                int temp = arr[count + distanceAway];
                
                // System.out.println("Swapping " + arr[count] + " and " + arr[ count + difference]);
                
                // Assign the current num to its index + distanceAway
                arr[count + distanceAway] = arr[count];
                
                // Assign the number originally in the distant index to the current one
                arr[count] = temp;
                
            } else {
                // Else increment count scince number does'nt need swapped.
                count += 1;
            }
            
        }
        
        // return result of min swaps
        return minSwaps;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] arr = new int[n];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        int res = minimumSwaps(arr);

        bufferedWriter.write(String.valueOf(res));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
