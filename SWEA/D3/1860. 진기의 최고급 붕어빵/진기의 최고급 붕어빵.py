from collections import deque

if __name__ == '__main__':
    T = int(input())

    for test_case in range(1, T+1):
        answer = 'Possible'
        n, m, k = map(int, input().split())
        arrive_times = list(map(int, input().split()))
        breads = deque([])

        arrive_times.sort()

        for t in range(m, arrive_times[-1]+1, +m):
            breads.extend([t]*k)

        for arrive_time in arrive_times:
            if any(time <= arrive_time for time in breads):
                breads.popleft()
            else:
                answer = 'Impossible'
                break

        print(f'#{test_case} {answer}')
