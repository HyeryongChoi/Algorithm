if __name__ == '__main__':
    T = 10

    for test_case in range(1, T+1):
        answer = []

        n = int(input()) # 원본 암호문 길이
        cryptogram = list(map(int, input().split()))
        m = int(input()) # 명령어 개수
        raw_ops = list(input().split())

        i = 0
        while i < len(raw_ops):
            _, target, count = raw_ops[i:i+3]
            target, count = int(target), int(count)
            temp = list(map(int, raw_ops[i+3:i+3+count]))

            cryptogram = cryptogram[:target] + temp + cryptogram[target:]

            i += 3 + count

        answer = cryptogram[:10]

        print(f'#{test_case}', end = ' ')
        print(*answer)