import sys

input = sys.stdin.readline

n, m, l = map(int, input().split())
pos_list = [0] + list(map(int, input().split())) + [l] # 사이 거리를 구해야 하므로 추가

def solution():
	# 휴게소 사이 거리 간격의 최댓값을 최소로 하는 휴게소 사이 거리 간격(mid) 이분탐색하기
	# 3씩 띄어서 휴게소를 짓는다면, 10~50 사이에는 총 40/3 = 13개를 지을 수 있다.
	# mid만큼의 간격으로 휴게소 지어보기 -> 모든 경우의 수 중 최적의 해 찾기

	answer = l-2
	
	start, end = 1, l-1

	pos_list.sort()

	while start <= end:
		mid = (start+end)//2

		count = 0 # 현재 지은 휴게소 개수

		# 사이 사이에 mid간격으로 휴게소 세우기
		for i in range(1, len(pos_list)):
			dist = pos_list[i] - pos_list[i-1] # 휴게소 사이 거리

			if dist <= mid: continue
				
			# e.g. 10~50에 10간격으로 -> 20, 30, 40
			cnt = dist//mid

			if dist % mid == 0:
				cnt -= 1 # 마지막 위치와 겹치므로 cnt - 1

			count += cnt
		
		if count > m: start = mid + 1 # 간격 넓혀서 휴게소 세우기
		else:
			answer = mid
			end = mid - 1 # 간격 좁혀서 휴게소 세우기
			
	print(answer)

solution()