import java.util.*; // Arrays, Collections 사용을 위해 import

class Solution {
    public int solution(int[][] sizes) {
        int max_w = 0;
        int max_h = 0;
            
        for (int i = 0; i < sizes.length; i++) {
            // Collections.reverseOrder를 사용하기 위해서 int[] 대신 Integer[] 사용
            Integer[] size_arr = new Integer[]{sizes[i][0], sizes[i][1]};
            
            Arrays.sort(size_arr, Collections.reverseOrder());
            
           // System.out.printf("(%d, %d)", size_arr[0], size_arr[1]);
            
            if (max_w < size_arr[0]) {
                max_w = size_arr[0];
            }
            
            if (max_h < size_arr[1]) {
                max_h = size_arr[1];
            }
        }
    
        return max_w * max_h;
    }
}