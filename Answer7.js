//Write a function that generates the first n numbers of the Fibonacci sequence.

function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    
    return sequence;
}

const n = 15;
console.log(fibonacci(n));

