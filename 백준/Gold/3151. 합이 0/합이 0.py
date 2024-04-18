import sys
from bisect import bisect_left, bisect_right

input = sys.stdin.readline

n = int(input())
arr = list(map(int, input().split()))

def solution():
	answer = 0

	# 오름차순 정렬
	arr.sort()

	# -(arr[i] + arr[j]) = arr[k]를 만족하는 k 찾기
	for i in range(n-1):
		for j in range(i+1,n):
			target = -(arr[i] + arr[j])
	
			# left ~ j까지의 값은 이미 이전에 탐색 완료했으므로 j+1부터 탐색
			left = bisect_left(arr, target, lo = j+1)
			right = bisect_right(arr, target, lo = j+1)

			cnt =  right - left

			# 만족하는 k가 없다면 패스
			if cnt <= 0: continue
	
			answer += cnt
	
	print(answer)

solution()
