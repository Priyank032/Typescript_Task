import express, { Request, Response } from 'express';
import { getBalancedSubstrings ,migrateRings,fibonacci} from "./helper"
const app = express();
const PORT = 3000;

app.use(express.json());

// Function to check if a string is balanced


app.post('/fibonacci-value', (req: Request, res: Response) => {
    const N: number = req.body.number;

    const result = fibonacci(N);
    res.json(result);
});
app.post('/balanced-substrings', (req: Request, res: Response) => {
    const S: string = req.body.S;

    const result = getBalancedSubstrings(S);
    res.json(result);
});

app.post('/migrateRings', (req: Request, res: Response) => {
    const { N, A, B, C } = req.body;

    // Input validation
    if (!N || typeof N !== 'number' || N < 1) {
        return res.status(400).json({ error: 'N must be a positive integer' });
    }

    if (!A || !B || !C || typeof A !== 'string' || typeof B !== 'string' || typeof C !== 'string') {
        return res.status(400).json({ error: 'A, B, and C must be non-empty strings' });
    }

    const result = migrateRings(N, A, B, C);
    return res.json({ steps: result });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
