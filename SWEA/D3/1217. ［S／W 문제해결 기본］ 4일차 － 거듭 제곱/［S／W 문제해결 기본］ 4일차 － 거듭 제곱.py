if __name__ == '__main__':
    T = 10

    for test_case in range(1, T+1):
        t = int(input())
        n, m = map(int, input().split())

        answer = pow(n, m)

        print(f'#{test_case} {answer}')