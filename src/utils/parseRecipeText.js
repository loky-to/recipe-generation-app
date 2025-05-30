export function parseRecipeText(text) {
    const result = {
      title: '',
      ingredients: [],
      steps: [],
    };
  
    if (!text || typeof text !== 'string') return result;
  
    const lines = text
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);
  
    let section = '';
  
    for (const line of lines) {
      const lower = line.toLowerCase();
  
      if (lower.startsWith('title:')) {
        // Only set title if not already set
        if (!result.title) {
          result.title = line.replace(/title:\s*/i, '').trim();
        }
        section = '';
      } else if (lower.startsWith('ingredients')) {
        section = 'ingredients';
      } else if (lower.startsWith('instructions') || lower.startsWith('directions') || lower.startsWith('steps')) {
        section = 'steps';
      } else {
        if (section === 'ingredients') {
          // Remove leading bullet (-, *, •) or numbering if any
          result.ingredients.push(line.replace(/^[-*•]\s*/, '').trim());
        } else if (section === 'steps') {
          // Remove numbering e.g. "1. ", "2. "
          result.steps.push(line.replace(/^\d+\.\s*/, '').trim());
        }
      }
    }
  
    return result;
  }