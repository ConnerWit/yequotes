document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const newQuoteButton = document.getElementById('new-quote');
    
    const fetchRandomQuote = async () => {
        try {
            quoteText.textContent = 'Loading...';
            const response = await fetch('/api/quote');
            
            if (!response.ok) {
                throw new Error('Failed to fetch quote');
            }
            
            const data = await response.json();
            quoteText.textContent = data.text;
        } catch (error) {
            console.error('Error:', error);
            quoteText.textContent = 'Failed to load quote. Please try again.';
        }
    };
    
    fetchRandomQuote();
    
    newQuoteButton.addEventListener('click', fetchRandomQuote);
});
