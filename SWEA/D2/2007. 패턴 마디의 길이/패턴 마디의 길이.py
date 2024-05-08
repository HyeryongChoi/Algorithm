if __name__ == '__main__':
    T = int(input())
    for test_case in range(1, T+1):
        answer = ''
        s = input().rstrip()

        start, end = 0, 1

        while start < end and end-start <= 10:
            word = s[start:end]

            if s.count(word) >= 2:
                end += 1
                arr = s.split(word)

                if arr[0] == arr[1] and arr[1] == '':
                    answer = word
                    break

        print(f'#{test_case} {len(answer)}')