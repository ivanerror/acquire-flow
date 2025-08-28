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
            else if (type === 'analyzeFinancials') {
                resolve({
                    insights: [
                        "Revenue shows consistent 15% year-over-year growth.",
                        "Gross margin slightly declined in the last quarter, requiring further investigation.",
                        "Company has healthy cash reserves with low debt-to-equity ratio."
                    ],
                    risks: [
                        "Significant one-time expense recorded in Q2. Clarification recommended.",
                        "Accounts receivable increased 30% in the last 6 months."
                    ]
                });
            } else if (type === 'draftReply') {
                resolve({
                    draft: "Yes, certainly. The one-time expense in Q2 was for upgrading our server infrastructure to support user growth. I will send you a copy of the invoice for your records shortly."
                });
            }
        }, 1500);
    });
};