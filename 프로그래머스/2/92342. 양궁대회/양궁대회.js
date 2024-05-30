function solution(n, info) {
    let answer = [];
    let maxDiff = 0;
    
    const calculateScoreDiff = (ryanResult, ryanNum = n, apeach = info)  => {
        let count = 0;
        let score = {
            ryan: 0,
            apeach: 0,
        };
        let ryan = new Array(info.length).fill(0);
        let temp = [];
        
        ryanResult.forEach((result, i) => {
            if (result === 0) { // 라이언 승리
                score['ryan'] += 10-i;
                ryan[i] = apeach[i] + 1;
                temp.push(10-i);
                count += apeach[i] + 1;
            } else { // 라이언 패배
                if (apeach[i] > 0) score['apeach'] += 10-i;
            }
        });
        
        if (count > ryanNum) return [-1, []];
        
        ryan[ryan.length-1] = ryanNum-count;

        return [score['ryan'] - score['apeach'], ryan];
    }
    
    const dfs = (statusList, scoreKinds = 10) => {
        if (statusList.length === scoreKinds) {
            const [diff, ryan] = calculateScoreDiff(statusList);
            
            if (diff >= maxDiff) {
                if (maxDiff === diff) {
                    for(let i = ryan.length-1; i >= 0; i--) {
                        if (ryan[i] > answer[i]) {
                            answer = ryan;
                            break;
                        } else if (ryan[i] < answer[i]) break;
                    }
                } else answer = ryan;
                
                
                maxDiff = diff;
            }
            
            return;
        }
        
        [0,1].forEach(status=> dfs([...statusList, status]));
    };
    
    dfs([]);
    
    return maxDiff > 0 ? answer : [-1];
}
