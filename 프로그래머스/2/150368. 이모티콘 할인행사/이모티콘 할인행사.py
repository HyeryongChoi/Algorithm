discounts = [10,20,30,40]
answer = [0, 0]

def solution(users, emoticons):
    
    dfs(0, [0]*len(emoticons), users, emoticons)
    
    return answer

def dfs(index, emo_discounts, users, emoticons):
    global answer
    
    if index == len(emoticons):
        sign_up_count = 0
        total_cost = 0
        
        for target_discount, target_cost in users:
            cost_sum = 0
            
            for i in range(len(emoticons)):
                # 일정 비율 이상 할인한다면 이모티콘 구매
                if emo_discounts[i] >= target_discount:
                    cost_sum += (emoticons[i]*(100-emo_discounts[i]))/100
                
                # 구매비용 합이 일정 가격 이상이 된다면 이모티콘 구매 취소 후 이모티콘 플러스 가입
                if cost_sum >= target_cost:
                    cost_sum = 0
                    sign_up_count += 1
                    break
                    
            total_cost += cost_sum
        
        if sign_up_count > answer[0] or (sign_up_count == answer[0] and total_cost > answer[1]):
            answer = [sign_up_count, total_cost]
        
        return
    
    for discount in discounts:
        emo_discounts[index] = discount
        dfs(index+1, emo_discounts, users, emoticons)
        