import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        int[] counts = new int[3];
        
        // 1번 수포자 1~5 반복
        // 2번 수포자 2, i 반복 (i = 1, 3, 4, 5)
        // 3번 수포자 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 반복
        int[] arr_a = {1,2,3,4,5};
        int[] arr_b = {2,1,2,3,2,4,2,5};
        int[] arr_c = {3,3,1,1,2,2,4,4,5,5};
        
        for (int i = 0; i < answers.length; i++){
            if (answers[i] == arr_a[i%arr_a.length]) counts[0] += 1;
            if (answers[i] == arr_b[i%arr_b.length]) counts[1] += 1;
            if (answers[i] == arr_c[i%arr_c.length]) counts[2] += 1;
        }
        
        int max = Arrays.stream(counts).max().getAsInt();
        
        ArrayList<Integer> answer = new ArrayList<>();
        
        for(int i=0; i<counts.length;i++) {
            if (counts[i] == max) answer.add(i+1);
        }
        
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}