export const mockGeminiApiCall = (prompt, type) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (type === 'summarizeThesis') {
                resolve({
                    summary: [
                        "Seeking B2B SaaS companies with $1M-$5M ARR and proven product-market fit.",
                        "Focuses on businesses with high customer retention rates.",
                        "Aims to scale operations and pursue strategic expansion."
                    ]
                });
            }
            // ... other mock responses
        }, 1500);
    });
};