def solution(begin, end):
    answer = []
    
    # result[i] = i의 약수 중 자기 자신을 제외한 가장 큰 수
    for i in range(begin, end + 1):
        if i == 1:
            answer.append(0)
            continue

        ans = [1]
        for j in range(2, int(i**0.5)+1):
            if i % j == 0 and j <= 1e7:
                ans.append(j)
                
                share = i//j
                if share <= 1e7 and share != i: ans.append(share)
            
        answer.append(max(ans))

    return answer