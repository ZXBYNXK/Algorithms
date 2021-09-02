// https://www.hackerrank.com/challenges/grading/problem
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'gradingStudents' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts INTEGER_ARRAY grades as parameter.
     */

    public static List<Integer> gradingStudents(List<Integer> grades) {
        // Write your code here
        
        // Create empty list.
        List<Integer> gradesMod = new ArrayList<Integer>();
        
        // Loop through current grades
        for (Integer grade: grades) {
            
            // If above a rounded failing grade.
            if (grade >= 38) {
                
                /* 
                    Convert a number 100 to 0 to just a single number representing
                    how far away from 5 or 10. (i.e.: 73 % 10 = 3 is 2 away from 5) 
                */
                int remainder = grade % 10;
                
                /*
                    Figure out how far away the number is from 5 or 10.
                */
                int variant = remainder <= 5 ? 
                5 - remainder : 
                10 - remainder;           
                
                // If variant is less than 3 meaning 2 or 1 then round to nearest multiple of 5.
                if ( variant < 3 ) {
                    gradesMod.add(grade + variant);
                } else {
                    // If not add grade as-is.
                    gradesMod.add(grade);
                }
                
            } else {
                // Else add failing score regardless of rounding.
                gradesMod.add(grade);
            }
        }

        // Return the new "Integer List"
        return gradesMod;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int gradesCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> grades = IntStream.range(0, gradesCount).mapToObj(i -> {
            try {
                return bufferedReader.readLine().replaceAll("\\s+$", "");
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        })
            .map(String::trim)
            .map(Integer::parseInt)
            .collect(toList());

        List<Integer> result = Result.gradingStudents(grades);

        bufferedWriter.write(
            result.stream()
                .map(Object::toString)
                .collect(joining("\n"))
            + "\n"
        );

        bufferedReader.close();
        bufferedWriter.close();
    }
}
