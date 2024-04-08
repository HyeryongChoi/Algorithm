import sys

input = sys.stdin.readline

n, k = map(int, input().split())
arr = list(map(int, input().split()))

def solution():
	# 최대 k번 원소를 삭제한 수열에서 짝수로 이루어져 있는 연속한 부분 수열 중 가장 긴 길이?
	cnt = 0 # 삭제한 원소 개수
	answer = 0
	left, right = 0, 0
	
	while right < n:
		if arr[right] % 2 == 0:
			# 다음 원소가 짝수라면 부분 수열에 추가
			cur_len = right-left+1-cnt
			answer = max(answer, cur_len)
			right += 1
		elif cnt < k:
			# 삭제한 원소 개수가 k미만이고 다음 원소가 홀수라면 삭제
			cnt += 1
			right += 1
		else:
			# 삭제할 수 없다면 left 다음 칸으로 이동
			if arr[left] % 2 != 0: cnt -= 1 # left가 홀수인 경우 cnt 다시 줄여줌
			left += 1

	print(answer)
	
solution()