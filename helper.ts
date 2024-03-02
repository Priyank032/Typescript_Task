function isBalanced(str: string): boolean {
    const charMap = new Map<string, number>();

    for (const char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    const counts = Array.from(charMap.values());
    return counts.length === 2 && counts[0] === counts[1];
}

// Function to get longest balanced substrings
export function getBalancedSubstrings(S: string): string[] {
    const substrings: string[] = [];

    for (let i = 0; i < S.length; i++) {
        for (let j = i + 2; j <= S.length; j++) {
            const substring = S.substring(i, j);
            if (isBalanced(substring)) {
                substrings.push(substring);
            }
        }
    }

    const maxLength = Math.max(...substrings.map(sub => sub.length));
    return substrings.filter(sub => sub.length === maxLength);
}
export function fibonacci(position: number): number {
    if (position <= 1) {
        return position;
    }
    return fibonacci(position - 1) + fibonacci(position - 2);
}

export function migrateRings(N: number, A: string, B: string, C: string): string[] {
    const steps: string[] = [];
    
    function moveRing(n: number, source: string, target: string, auxiliary: string) {
        if (n === 1) {
            steps.push(`1: ${source} to ${target}`);
        } else {
            moveRing(n - 1, source, auxiliary, target);
            steps.push(`${n}: ${source} to ${target}`);
            moveRing(n - 1, auxiliary, target, source);
        }
    }
    
    moveRing(N, A, B, C);
    
    return steps;
}