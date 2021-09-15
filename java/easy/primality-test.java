// https://www.hackerrank.com/challenges/java-primality-test/problem
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;



public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        String n = bufferedReader.readLine();
        
        bufferedReader.close();
        
        primality(n);
    }
    
    // See if string number argument is prime.
    public static void primality(String in) {
        
        // Use java.util.math.BigInteger class
        BigInteger number = new BigInteger(in);
        
        /* 
        Use java.util.math.BigInteger.isProbablePrime(<certainty>) method to 
        determine if prime number with certainty of 1 
        */ 
        if (number.isProbablePrime(1)) {
            System.out.println("prime");
        } else {
            System.out.println("not prime");
        }
        
    }
}
