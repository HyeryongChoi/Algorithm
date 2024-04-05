import sys

input = sys.stdin.readline

n = int(input())
buildings = list(map(int, input().split()))

def solution(n, buildings):
	counts = [2] * n # 양옆은 보이니까 카운트
	counts[0], counts[n-1] = 1, 1

	if n <= 2:
		print(n-1)
		return
	
	for i in range(n-1):
		max_slop = (buildings[i+1]-buildings[i])
		
		for j in range(i+2, n):
			# i~j 기울기가 그 이전 기울기 max값 보다 커야 볼 수 있음
			slop = (buildings[j]-buildings[i])/(j-i)
			can_see = slop > max_slop

			max_slop = max(max_slop, slop)
			
			if can_see:
				counts[i] += 1
				counts[j] += 1


	print(max(counts))
	
solution(n, buildings)
