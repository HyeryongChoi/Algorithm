from collections import deque

if __name__ == '__main__':
    T = 10
    for test_case in range(1, T+1):
        t = int(input())
        arr = deque(list(map(int, input().split())))

        while True:
            finish = False

            for i in range(1, 6):
                arr[0] = arr[0] - i
                arr.rotate(-1)

                if arr[-1] <= 0:
                    arr[-1] = 0
                    finish = True
                    break

            if finish: break

        print(f'#{test_case}', end=' ')
        print(*arr)