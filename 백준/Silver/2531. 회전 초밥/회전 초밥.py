import sys

input = sys.stdin.readline

# 회전 초밥 벨트에 놓인 접시의 수 N, 초밥의 가짓수 d, 연속해서 먹는 접시의 수 k, 쿠폰 번호 c
n, d, k, c = map(int, input().split())
arr = [int(input()) for _ in range(n)]
arr += arr[:]

def solution():
	# 주어진 회전 초밥 벨트에서 먹을 수 있는 초밥의 가짓수의 최댓값
	counts = dict()

	answer = 0
	left, right = 0, 0

	while right < 2*n:
		
		if arr[right] not in counts: counts[arr[right]] = 0
		counts[arr[right]] += 1

		if right-left+1 == k:
			kind_cnt = len(counts) if c in counts else len(counts)+1
			
			answer = max(answer, kind_cnt)
			
			counts[arr[left]] -= 1
			if counts[arr[left]] == 0: del counts[arr[left]]

			left += 1
			right += 1
			
		else: right += 1

	print(answer)
	
solution()