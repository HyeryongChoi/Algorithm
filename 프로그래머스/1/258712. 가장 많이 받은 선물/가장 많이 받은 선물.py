from collections import defaultdict

def solution(friends, gifts):
    answer = 0
    gift_counts = defaultdict(int)
    gift_values = defaultdict(int)
    next_month = defaultdict(int)

    for gift in gifts:
        a, b = gift.split()
        
        gift_counts[(a,b)] += 1
        gift_values[a] += 1
        gift_values[b] -= 1
        
        
    for i in range(len(friends)-1):
        for j in range(i+1,len(friends)):
            a, b = friends[i], friends[j]
            
            if (gift_counts[(a,b)] == 0 and gift_counts[(b,a)] == 0) or (gift_counts[(a,b)] == gift_counts[(b,a)]):
                if gift_values[a] > gift_values[b]:
                    next_month[a] += 1
                elif gift_values[a] < gift_values[b]:
                    next_month[b] += 1
            elif gift_counts[(a,b)] > gift_counts[(b,a)]:
                next_month[a] += 1
            elif gift_counts[(a,b)] < gift_counts[(b,a)]:
                next_month[b] += 1

    for val in next_month.values():
        answer = max(answer, val)
        
    return answer